import { useState } from "react";
import { NavLink } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const PersonalSignUp = () => {
  const { state, dispatch } = useAppContext();
  const { personalSignUp } = state;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    countryCode,
    password,
    confirmPassword,
    policyCheck
  } = personalSignUp;

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    dispatch({ type: "UPDATE_SIGNUP_FIELD", field, value });
  };

  const handleGoToNextStep = (e) => {
    e.preventDefault();
    // Trim inputs to avoid spaces-only inputs
    if (firstName.trim() === "") {
      setError("First name can't be empty");
      return;
    }
    if (lastName.trim() === "") {
      setError("Second name can't be empty");
      return;
    }
    if (email.trim() === "") {
      setError("Email can't be empty");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }
    if (phoneNumber.trim() === "") {
      setError("Phone number can't be empty");
      return;
    }
    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("Phone number must be between 9 and 15 digits");
      return;
    }
    if (password.trim() === "") {
      setError("Password can't be empty");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (confirmPassword.trim() === "") {
      setError("Confirm your password");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!policyCheck) {
      setError("يجب الموافقة على الشروط وسياسة الخصوصية");
      return;
    }

    setError("");
    navigate("/BussinessSignUp");
  };

  return (
    <div className="mt-6">
      <form className="space-y-5" onSubmit={handleGoToNextStep}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="الاسم الأول"
            className="w-full px-4 py-3 border rounded-lg text-right"
            value={firstName}
            onChange={handleChange("firstName")}
          />
          <input
            type="text"
            name="lastName"
            placeholder="اسم العائلة"
            className="w-full px-4 py-3 border rounded-lg text-right"
            value={lastName}
            onChange={handleChange("lastName")}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          className="w-full px-4 py-3 border rounded-lg text-right"
          value={email}
          onChange={handleChange("email")}
        />

        <div className="flex flex-col md:flex-row gap-2">
          <select
            name="countryCode"
            className="w-full px-4 py-3 border rounded-lg text-right focus:ring-2"
            value={countryCode}
            onChange={handleChange("countryCode")}
          >
            <option value="+966">🇸🇦 +966</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="5×× ××× ×××"
            className="w-full px-4 py-3 border rounded-lg text-right"
            pattern="[0-9]{9,15}"
            value={phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </div>

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          className="w-full px-4 py-3 border rounded-lg text-right"
          value={password}
          onChange={handleChange("password")}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="تأكيد كلمة المرور"
          className="w-full px-4 py-3 border rounded-lg text-right"
          value={confirmPassword}
          onChange={handleChange("confirmPassword")}
        />

        <div className="flex items-center justify-end gap-3">
          <label htmlFor="terms" className="text-gray-600 text-sm text-right">
            أوافق على{" "}
            <NavLink to="/terms" className="text-red-500 hover:underline">
              الشروط
            </NavLink>{" "}
            و{" "}
            <NavLink to="/privacy" className="text-red-500 hover:underline">
              سياسة الخصوصية
            </NavLink>
          </label>
          <input
            type="checkbox"
            id="terms"
            name="policyCheck"
            className="w-5 h-5 accent-red-200 rounded"
            checked={policyCheck}
            onChange={handleChange("policyCheck")}
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2 text-right">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-[#FFDDDD] text-gray-900 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
        >
          الخطوة التالية
        </button>
      </form>
    </div>
  );
};

export default PersonalSignUp;
