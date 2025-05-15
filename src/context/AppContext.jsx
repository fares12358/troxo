import React, {
  createContext,   // لإنشاء الكونتكست
  useContext,     // لاستهلاك الكونتكست
  useReducer,     // لإدارة الحالة المعقدة
  useMemo         // لمنع إعادة إنشاء القيمة بلا داعي
} from 'react';
import PropTypes from 'prop-types';

// --------------------------------------
// 1. هيكل الحالة الابتدائية
// --------------------------------------
const initialState = {
  user: null,

  // بيانات التسجيل الشخصي
  personalSignUp: {
    firstName: '',       
    lastName: '',        
    email: '',           
    phoneNumber: '',     
    countryCode: '+966', 
    password: '',        
    confirmPassword: '',
    policyCheck: false,
    file: null           
  },

  // بيانات التسجيل التجاري
  businessSignUp: {
    entityClassification: "",
    commercialNumber: "",
    taxNumber: "",
    websitePrefix: "http://",
    websiteLink: "",
    storePlatform: ""
  }
};

// --------------------------------------
// 2. ريديُيسر (Reducer) لتحديث الحالة
// --------------------------------------
function appReducer(state, action) {
  switch (action.type) {

    // تعيين بيانات المستخدم بعد تسجيل الدخول
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };

    // تحديث أي حقل في نموذج التسجيل الشخصي
    case 'UPDATE_SIGNUP_FIELD':
      return {
        ...state,
        personalSignUp: {
          ...state.personalSignUp,
          [action.field]: action.value
        }
      };

    // إعادة نموذج التسجيل الشخصي للوضع الافتراضي
    case 'RESET_SIGNUP':
      return {
        ...state,
        personalSignUp: initialState.personalSignUp
      };

    // --------------------------------------
    // NEW: تحديث أي حقل في نموذج التسجيل التجاري
    // --------------------------------------
    case 'UPDATE_BUSINESS_FIELD':
      return {
        ...state,
        businessSignUp: {
          ...state.businessSignUp,
          [action.field]: action.value
        }
      };

    // إعادة نموذج التسجيل التجاري للوضع الافتراضي
    case 'RESET_BUSINESS':
      return {
        ...state,
        businessSignUp: initialState.businessSignUp
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// --------------------------------------
// 3. إنشاء الكونتكست
// --------------------------------------
const AppContext = createContext();

// --------------------------------------
// 4. مزود الكونتكست (Provider)
// --------------------------------------
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // useMemo يمنع إعادة إنشاء القيمة إلا إذا تغيرت state
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

// --------------------------------------
// 5. هوك مخصص لاستهلاك الكونتكست
// --------------------------------------
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
