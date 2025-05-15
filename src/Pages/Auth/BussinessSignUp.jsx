import { Link, useNavigate } from "react-router-dom";
import FileUpload from "../../Components/FileUpload";
import {  useState } from "react";
import { useAppContext } from "../../context/AppContext";
import axios from "axios";
import { registerBusiness } from "../../api/userService";

const BussinessSignUp = () => {
  // grab state + dispatch from context
  const { state, dispatch } = useAppContext();
  const { businessSignUp, personalSignUp } = state;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    password,
    confirmPassword,
    policyCheck, file } = personalSignUp;

  // destructure all business fields from context
  const {
    entityClassification,
    commercialNumber,
    taxNumber,
    websitePrefix,
    websiteLink,
    storePlatform
  } = businessSignUp;

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // helper to dispatch any business field update
  const handleBusinessChange = (field) => (e) => {
    dispatch({
      type: "UPDATE_BUSINESS_FIELD",
      field,
      value: e.target.value
    });
  };


  const validateAll = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError("الحقول الأساسية مطلوبة"); return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("صيغة البريد غير صحيحة"); return false;
    }
    if (!/^[0-9]{9,15}$/.test(phoneNumber)) {
      setError("رقم الجوال غير صالح"); return false;
    }
    if (!policyCheck) {
      setError("يجب الموافقة على الشروط"); return false;
    }
    if (!entityClassification) {
      setError("تصنيف الكيان مطلوب"); return false;
    }
    if (!commercialNumber.trim()) {
      setError("رقم السجل التجاري مطلوب"); return false;
    }
    if (!taxNumber.trim()) {
      setError("رقم الضريبة مطلوب"); return false;
    }
    if (!websiteLink.trim()) {
      setError("رابط الموقع مطلوب"); return false;
    }
    if (!storePlatform) {
      setError("منصة المتجر مطلوبة"); return false;
    }
    if (!file) {
      setError("ملف السجل التجاري مطلوب"); return false;
    }
    setError("");
    return true;
  }
  const getPlatformId = (platformName) => {
  switch (platformName) {
    case "Salla":
      return "d1111111-0000-0000-0000-111111111111";
    case "Zid":
      return "d2222222-0000-0000-0000-222222222222";
    case "Other":
      return "d3333333-0000-0000-0000-333333333333"; // or Shopify ID if applicable
    default:
      return "";
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateAll()) return;

  setLoading(true);

  try {
    const payload = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      PhoneNumber: countryCode + phoneNumber,
      Password: password,
      ConfirmPassword: confirmPassword,
      UserTypeId: entityClassification,
      StorePlateformId: getPlatformId(storePlatform),
      CommercialRegister: commercialNumber,
      CommercialRegisterFile: "", // Or use file.name / base64 later if needed
      TaxNumber: taxNumber,
      Website: `${websitePrefix}${websiteLink}`
    };

    await registerBusiness(payload);
    navigate("/success"); // or wherever the user goes next
  } catch (err) {
    setError("فشل إنشاء الحساب، تأكد من البيانات أو حاول لاحقًا");
  } finally {
    setLoading(false);
  }
};



  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      {/* Entity classification dropdown */}
      <select
        className="w-full bg-transparent focus:outline-none px-4 py-2 border rounded-lg"
        value={entityClassification}
        onChange={handleBusinessChange("entityClassification")}
      >
        <option value="">تصنيف الكيان</option>
      <option value="a1111111-1111-1111-1111-111111111111">شركة</option>
      <option value="b2222222-2222-2222-2222-222222222222">مؤسسة</option>
      <option value="c3333333-3333-3333-3333-333333333333">متجر</option>
      <option value="d4444444-4444-4444-4444-444444444444">أسر منتجة</option>
      </select>

      {/* Commercial number */}
      <input
        type="text"
        placeholder="رقم السجل التجاري"
        className="w-full px-4 py-2 border rounded-lg text-right"
        value={commercialNumber}
        onChange={handleBusinessChange("commercialNumber")}
      />

      {/* Tax number */}
      <input
        type="text"
        placeholder="رقم الضريبة"
        className="w-full px-4 py-2 border rounded-lg text-right"
        value={taxNumber}
        onChange={handleBusinessChange("taxNumber")}
      />

      {/* Website link (prefix + rest) */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="http://"
          className="bg-transparent focus:outline-none px-4 py-2 border rounded-lg"
          value={websitePrefix}
          onChange={handleBusinessChange("websitePrefix")}
        />
        <input
          type="text"
          placeholder="رابط الموقع"
          className="w-full px-4 py-2 border rounded-lg text-right"
          value={websiteLink}
          onChange={handleBusinessChange("websiteLink")}
        />
      </div>

      {/* Store platform dropdown */}
      <select
        className="w-full bg-transparent focus:outline-none px-4 py-2 border rounded-lg"
        value={storePlatform}
        onChange={handleBusinessChange("storePlatform")}
      >
        <option value="">منصة المتجر</option>
        <option value="Salla">سلة</option>
        <option value="Zid">زد</option>
        <option value="Other">أخرى</option>
      </select>

      {/* file upload comes from personalSignUp.file in context */}
      <FileUpload />

      {/* validation error */}
      {error && (
        <p className="text-red-500 text-sm text-right">{error}</p>
      )}

      {/* navigation buttons */}
      <div className="flex justify-between gap-2">
        <Link
          to="/"
          className="w-full bg-[#FFDDDD] px-12 py-2 rounded-lg text-center"
        >
          الخطوة السابقة
        </Link>
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-12 py-2 rounded-lg ${loading ? "bg-gray-300" : "bg-[#FFDDDD]"
            }`}
          aria-busy={loading}
        >
          {loading ? "جاري المعالجة..." : "إنشاء حساب"}
        </button>
      </div>
    </form>
  );
};

export default BussinessSignUp;
