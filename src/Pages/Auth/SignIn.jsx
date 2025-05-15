import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import WelcomeModal from "../../Components/Modal/WelcomeModal";
import ImageSwipper from "../../Components/ImageSwipper";

const SignIn = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const onSignInClick = async (e) => {
    e.preventDefault();
    // navigate("/home", { state: { showWelcomeModal: true } });
    if (email === '') {
      setError("email can't be empty");
      return;
    }
    if (password === "") {
      setError("password can't be empty");
      return
    }
    // api call
    try {
      setLoader(true)
      const req = await axios.post(`${Api}/end_point`)
      console.log(req);
      
    } catch (error) {
      

    } finally {
      setLoader(false);
    }






  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-6xl xl:max-w-full  overflow-hidden flex flex-col md:flex-row md:justify-center  rounded-lg">
        {/* Left Side Image */}
        <ImageSwipper />

        {/* Right Side Form */}
        <div className="w-full flex flex-col justify-center items-center min-h-screen md:w-1/2 p-8 relative">
          {/* Logo - Fixed at top right */}
          <div className="absolute top-8 left-8">
            <img src="/images/Logo.png" alt="Logo" className="w-32" />
          </div>

          {/* Form Container - Centered */}
          <div className="w-full max-w-md mt-24">
            {/* Title */}
            <h2 className="text-2xl font-bold text-right text-gray-900">
              ابدأ الآن
            </h2>
            <p className="text-gray-600 text-right mt-2">
              . يرجى إدخال معلوماتك للوصول إلى حسابك
            </p>

            {/* Form Fields */}
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="ادخل كلمة المرور"
                className="w-full px-4 py-2 border text-right rounded-lg focus:outline-none focus:ring-2 "
                onChange={(e) => { setPassowrd(e.target.value) }}
                value={password}
              />
              <NavLink
                to="/forgetpassword"
                className="text-sm text-[#B1B1B2] text-right hover:text-black "
              >
                نسيت كلمة المرور؟
              </NavLink>

              {/* erorr handle */}
              {
                error !== '' && <p className="text-red-500 text-sm font-meduim">{error}</p>
              }

              {/* Submit Button */}
              <NavLink to="/home" className="hover:text-black">
                <button
                  onClick={onSignInClick}
                  type="submit"
                  className="w-full cursor-pointer mt-4 bg-[#FFDDDD] py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  تسجيل الدخول
                </button>
              </NavLink>
            </form>

            {showWelcomeModal && (
              <WelcomeModal onClose={() => setShowWelcomeModal(false)} />
            )}

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-2 text-gray-600">أو</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 mt-4">
              لا تملك حسابًا؟
              <NavLink to="/" className="hover:text-black">
                سجل مجانا
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
