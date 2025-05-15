/* eslint-disable react/prop-types */
import { useState } from "react";
import SuccessAddClientModal from "./SuccessAddClientModal";

export default function EditClientModal({ onClose }) {
  const [formData, setFormData] = useState({
    clientName: "مشاري الذيباني",
    email: "mashary@gmail.com",
    phone: "+966 53 337 3122",
    country: "مملكة سعودية",
    city: "مكة المكرمة",
    postalCode: "12345",
    address: "حر جَبَل النور، المملكة العربية السعودية",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    setShowSuccessModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center p-4 z-[1000]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <header className="sticky top-0 flex justify-between items-center px-6 py-4 bg-red-50 border-b border-gray-200 z-10">
          <h2 id="modal-title" className="text-xl font-bold text-pink-900">
            تعديل بيانات العميل
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        {/* Modal Content */}
        <div className="p-2 md:p-4">
          <form onSubmit={handleSubmit}>
            {/* Store Info Section */}
            <section className="p-5 mb-1 rounded-xl bg-gray-50">
              <div className="flex justify-between">
                <h3 className="mb-4 text-lg font-semibold text-[#FC746C]">
                  بطاقة بيانات العميل
                </h3>
                <button className="flex overflow-hidden items-center py-1 px-3 text-sm bg-red-100 rounded-md text-pink-950">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e95660b64d80ec70fafcd1a47dbccf9a97e8de4?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
                    className="w-6 h-6 mr-2"
                    alt=""
                  />
                  إنشاء رابط دعوة
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="clientName"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    اسم العميل<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/Profile.svg"
                        alt="أيقونة العميل"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="clientName"
                      name="clientName"
                      type="text"
                      placeholder="أدخل اسم العميل"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.clientName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    رقم الهاتف <span className="text-red-600">*</span>
                  </label>

                  <div className="relative flex gap-2">
                    {/* أيقونة الهاتف داخل حقل الإدخال */}
                    <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                      <img
                        src="/Icones/phone.svg"
                        alt="أيقونة هاتف"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="w-24 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg transition-all"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>

                    {/* حقل إدخال رقم الهاتف مع رمز الدولة المدمج */}
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="+966 50 123 4567"
                      className="w-full pl-4 pr-10 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg transition-all"
                      value="50 123 4567"
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    البريد الالكتروني<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/email.svg"
                        alt="أيقونة بريد الكتروني"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ادخل البريد الالكتروني"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Address Section */}
            <section className="p-5 mb-6 rounded-xl bg-gray-50">
              <h3 className="mb-4 text-lg text-right font-semibold text-gray-800">
                تفاصيل عنوان العميل
              </h3>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    الدولة <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/Country.svg"
                        alt="أيقونة الدولة"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <select
                      id="country"
                      name="country"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="السعودية">السعودية</option>
                      <option value="مصر">مصر</option>
                      <option value="الإمارات">الإمارات</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    المدينة <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/City.svg"
                        alt="أيقونة المدينة"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <select
                      id="city"
                      name="city"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.city}
                      onChange={handleChange}
                    >
                      <option value="مكة مكرمة">مكة مكرمة</option>
                      <option value="الرياض">الرياض</option>
                      <option value="جدة">جدة</option>
                      <option value="الدمام">الدمام</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    الرمز البريدي <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/PostCard.svg"
                        alt="أيقونة الرمز البريدي"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      placeholder="أدخل الرمز البريدي"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="md:col-span-2 lg:col-span-3">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    عنوان المتجر <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/Location.svg"
                        alt="أيقونة العنوان"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="أدخل العنوان بالتفصيل"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                type="submit"
                onClick={onSubmit}
                className="px-6 py-3 text-sm font-semibold bg-red-100 text-pink-950 rounded-lg hover:bg-red-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                حفظ البيانات
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-sm font-semibold bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                الغاء الطلب
              </button>
              {showSuccessModal && (
                <SuccessAddClientModal
                  onClose={() => setShowSuccessModal(false)}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
