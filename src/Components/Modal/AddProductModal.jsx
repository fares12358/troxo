/* eslint-disable react/prop-types */
import { useState } from "react";
import SuccessAddProductModal from "./SuccessAddProductModal";

const AddProductModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    price: "",
    length: "",
    height: "",
    width: "",
    weight: "",
    isFragile: false,
    hasLiquid: false,
    isHazardous: false,
    mainImage: null,
    dimensionImages: null,
  });
  const [quantity, setQuantity] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showSafetyDetails, setShowSafetyDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState); // استخدام الدالة التحديثية لضمان الحصول على أحدث قيمة
  };
  const toggleSafteyDetails = () => {
    setShowSafetyDetails((prevState) => !prevState); // استخدام الدالة التحديثية لضمان الحصول على أحدث قيمة
  };

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    setShowSuccessModal(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 flex justify-between items-center px-6 py-4 bg-red-50 border-b border-gray-200 z-10">
          <h2 id="modal-title" className="text-xl font-bold text-pink-900">
            إضافة منتج جديد
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
        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-2 ">
          {/* Section 1: Basic Info */}

          <div className=" mx-auto p-2 font-sans arabic-font" dir="ltr">
            <div className="p-5 rounded-xl bg-gray-50 relative">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    toggleDetails();
                  }}
                  aria-expanded={showDetails}
                  aria-label={showDetails ? "إخفاء التفاصيل" : "إظهار التفاصيل"}
                >
                  <img
                    src="/Icones/ButtonArrowRight.svg"
                    alt=""
                    className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-200 ${
                      showDetails ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <h3 className="text-lg font-semibold text-[#FC746C] text-right">
                  بطاقة بيانات المنتج
                </h3>
              </div>

              {showDetails && (
                <>
                  <div className="mt-4 flex flex-col-reverse md:flex-row gap-6">
                    {/* الجانب الأيسر (الصورة والكمية) */}
                    <div className="md:w-1/2 flex flex-col items-end space-y-4">
                      {/* حقل الكمية */}
                      <label className="flex flex-col item-end text-sm text-right font-semibold text-slate-950 mb-2">
                        الكمية
                      </label>
                      <div className="inline-flex self-end px-8 py-4 items-center gap-1 text-lg font-bold bg-white rounded-lg">
                        <button
                          className="bg-red-50 rounded-lg px-4 py-2"
                          onClick={() => setQuantity(Math.max(0, quantity - 1))}
                          aria-label="تقليل الكمية"
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="bg-red-50 rounded-lg px-4 py-2"
                          onClick={() => setQuantity(quantity + 1)}
                          aria-label="زيادة الكمية"
                        >
                          +
                        </button>
                      </div>

                      {/* حقل الصورة */}
                      <div className="relative flex flex-col items-center justify-center bg-white rounded-lg p-6 text-center w-full">
                        <img
                          src="/Icones/imagePlus.png"
                          alt=""
                          className="w-10 h-10 mb-2 absolute left-3 top-3"
                        />
                        <img
                          src="/Icones/AddImage.png"
                          alt="add image icon"
                          className="w-10 h-10"
                        />
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          أضف صورة رئيسية للمنتج
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          أسحب الصورة هنا أو انقر للاختيار يدويًا
                        </p>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm cursor-pointer"
                        >
                          اختر ملف
                        </label>
                      </div>
                    </div>

                    {/* الجانب الأيمن (باقي الحقول) */}
                    <div className="md:w-2/3 space-y-4">
                      {/* اسم المنتج */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                          اسم المنتج
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/box.svg"
                              alt="أيقونة منتج"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            placeholder="أدخل اسم المنتج"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                          />
                        </div>
                      </div>

                      <div className="space-y-2" dir="rtl">
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                          نوع المنتج
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/MainCategory.svg"
                              alt="أيقونة نوع المنتج"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <select
                            name="productType1"
                            value={formData.productType1}
                            onChange={handleChange}
                            className="w-full px-4 pr-10 py-2 border border-gray-300 rounded-lg text-right"
                          >
                            <option value="">نوع المنتج</option>
                            <option value="type1">النوع 1</option>
                            <option value="type2">النوع 2</option>
                          </select>
                        </div>
                      </div>

                      {/* السعر */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                          السعر
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/price.svg"
                              alt="أيقونة السعر"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="أدخل السعر"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" mb-2 rounded-xl bg-gray-50 mt-6" dir="rtl">
                    <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-300 mb-6 pb-2">
                      بيانات تخزين المنتج
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* الطول */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700 text-right">
                          الطول (سم) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/length.svg"
                              alt="أيقونة الطول"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="length"
                            value={formData.length}
                            onChange={handleChange}
                            placeholder="أدخل الطول"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                            required
                          />
                        </div>
                      </div>

                      {/* الوزن */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700 text-right">
                          الوزن (كجم) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/weight.svg"
                              alt="أيقونة الوزن"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            placeholder="أدخل الوزن"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                            required
                          />
                        </div>
                      </div>

                      {/* الارتفاع */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700 text-right">
                          الارتفاع (سم) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/height.svg"
                              alt="أيقونة الارتفاع"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            placeholder="أدخل الارتفاع"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                            required
                          />
                        </div>
                      </div>

                      {/* العرض */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-700 text-right">
                          العرض (سم) <span className="text-red-600">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <img
                              src="/Icones/width.svg"
                              alt="أيقونة العرض"
                              className="w-5 h-5 text-gray-400"
                            />
                          </div>
                          <input
                            type="text"
                            name="width"
                            value={formData.width}
                            onChange={handleChange}
                            placeholder="أدخل العرض"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-right"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mt-4" dir="rtl">
              <div className="flex justify-between items-center">
                <h3 className="text-lg mr-4 font-semibold text-[#FC746C]  pb-2">
                  بيانات السلامة والأمان
                </h3>
                <button
                  onClick={(e) => {
                    e.preventDefault();

                    toggleSafteyDetails();
                  }}
                  aria-expanded={showSafetyDetails}
                  aria-label={
                    showSafetyDetails ? "إخفاء التفاصيل" : "إظهار التفاصيل"
                  }
                >
                  <img
                    src="/Icones/ButtonArrowRight.svg"
                    alt="arrow right icone"
                    className={`w-6 h-6 md:w-7 md:h-7 ml-4 transition-transform duration-200 ${
                      showSafetyDetails ? "rotate-90" : ""
                    }`}
                  />
                </button>
              </div>

              {showSafetyDetails && (
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isFragile"
                      checked={formData.isFragile}
                      onChange={handleChange}
                      className="rounded "
                    />
                    <span>منتج هش (منتجات حساسة)</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="hasLiquid"
                      checked={formData.hasLiquid}
                      onChange={handleChange}
                      className="rounded  "
                    />
                    <span>المنتج يحتوي على مواد سائلة</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="isHazardous"
                      checked={formData.isHazardous}
                      onChange={handleChange}
                      className="rounded "
                    />
                    <span>المنتج يحتوي على مواد خطرة</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-center space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء الطلب
            </button>
            <button
              type="submit"
              onClick={onSubmit}
              className="px-6 py-2 bg-red-100 text-pink-950 rounded-lg hover:bg-blue-700 transition-colors"
            >
              إضافة منتج
            </button>
            {showSuccessModal && (
              <SuccessAddProductModal
                onClose={() => setShowSuccessModal(false)}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
