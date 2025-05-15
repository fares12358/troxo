import { NavLink } from "react-router";
import ImageSwipper from "../../Components/ImageSwipper";

const ForgetPassword = () => {
  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-6xl xl:max-w-full overflow-hidden flex flex-col md:flex-row md:justify-center  rounded-lg">
        {/* Left Side Image */}
        <ImageSwipper />

        {/* Right Side Form */}
        <div className="w-full flex flex-col justify-center items-center min-h-screen md:w-1/2 p-8 relative">
          {/* Logo */}
          <div className="absolute top-8 left-8">
            <img src="/images/Logo.png" alt="Logo" className="w-32" />
          </div>
          <div className="w-full max-w-md mt-24">
            {/* Title */}
            <h2 className="text-2xl font-bold text-right text-gray-900">
              نسيت كلمة المرور؟
            </h2>
            <p className="text-gray-600 text-right mt-2">
              لا تقلق، يحدث ذلك للجميع. أدخل بريدك الإلكتروني أدناه لاستعادة
              كلمة المرور الخاصة بك{" "}
            </p>

            {/* Form Fields */}
            <form className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-2 border text-right rounded-lg "
              />
              {/* Submit Button */}
              <NavLink to="/confirmEmail" className=" hover:text-black">
                <button
                  type="submit"
                  className="w-full cursor-pointer mt-4 bg-[#FFDDDD]  py-2 rounded-lg hover:bg-gray-200 transition duration-300"
                >
                  ارسال
                </button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
