import { NavLink, Outlet } from "react-router";
import ImageSwipper from "./../Components/ImageSwipper";

const TamplateSignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 border-2">
      <div className="w-full max-w-6xl xl:max-w-full overflow-hidden flex flex-col md:flex-row md:gap-2">
        {/* Left Side Image */}
        <ImageSwipper />

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center items-center min-h-screen  relative overflow-auto">
          {/* Logo */}
          <div className="absolute top-4 left-8">
            <img src="/images/Logo.png" alt="Logo" className="w-32" />
          </div>

          <div className="w-full max-w-md mb-4 mt-16">
            {/* Title */}
            <h2 className="text-2xl font-bold text-right text-gray-900">
              انشاء حساب في
            </h2>
            <p className="text-gray-600 text-right mt-2">
              .يرجى إدخال معلوماتك للوصول إلى حسابك
            </p>

            <Outlet />

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-2 text-gray-600">أو</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Already have an account */}
            <p className="text-center text-gray-600 mt-4">
              هل لديك حساب بالفعل؟
              <NavLink to="/signin" className="cursor-pointer">
                تسجيل دخول
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamplateSignUp;
