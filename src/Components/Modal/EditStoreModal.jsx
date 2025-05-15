/* eslint-disable react/prop-types */
import { useState } from "react";
import SuccessAddStoreModal from "./SuccessAddStoreModal";

export default function EditStoreModal({ onClose }) {
  const [formData, setFormData] = useState({
    title: "تفاصيل المتجر - الثالث",
    storeName: "جولدن جول",
    phone: "+966 53 337 3122",
    country: "المملكة العربية السعودية",
    city: "مكة المكرمة",
    imageUrl: "/Icones/ButtonArrowRight.svg",
    postalCode: "12345",
    address: "الشرائع، الشارع 32، ذوات السواري، خطة 2",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    setShowSuccessModal(true);
  };
  return (
    <div
      className="fixed inset-0 flex justify-center items-center p-4 z-[1000]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      dir="rtl"
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
            تعديل بيانات متجرك
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
          <form className="">
            {/* Store Info Section */}
            <section className="p-5 mb-1 rounded-xl bg-gray-50">
              <h3 className="mb-4 text-lg font-semibold text-[#FC746C]">
                بطاقة بيانات المتجر
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* حقل اسم المتجر */}
                <div>
                  <label
                    htmlFor="storeName"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    اسم المتجر <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <img
                        src="/Icones/store.svg"
                        alt="أيقونة المتجر"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="storeName"
                      name="storeName"
                      type="text"
                      placeholder="أدخل اسم المتجر"
                      className="w-full px-4 py-2 pr-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.storeName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* حقل رقم الهاتف */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    رقم الهاتف <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <img
                        src="/Icones/phone.svg"
                        alt="أيقونة هاتف"
                        className="w-5 h-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+966"
                      className="w-full px-4 py-2 pl-10 text-gray-700 bg-white border border-gray-300 rounded-lg  transition-all"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Address Section */}
            <section className="p-5 mb-6 rounded-xl bg-gray-50">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                تفاصيل عنوان المتجر
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
                      <option value="مكة المكرمة">مكة المكرمة</option>
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
                إلغاء الطلب
              </button>
              {showSuccessModal && (
                <SuccessAddStoreModal
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
