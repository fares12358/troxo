/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

export default function SuccessShipmentModal({ onClose }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50"
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[930px] flex flex-col"
        style={{ maxHeight: "95vh" }}
      >
        {/* Header */}
        <header className="flex justify-between items-center p-3  bg-red-100 rounded-t-2xl">
          <h2
            id="modal-title"
            className="text-lg md:text-xl  font-semibold text-pink-950"
          >
            إضافة شحنة جديدة
          </h2>
          <button
            onClick={onClose}
            className="p-1 md:p-2 focus:outline-none focus:ring-2 focus:ring-pink-950 rounded-full hover:bg-red-200 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <svg
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.3936 9.59473L9.60156 14.3867"
                stroke="#4D1A2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3956 14.3898L9.59961 9.59277"
                stroke="#4D1A2D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </header>

        {/* المحتوى الرئيسي */}
        <div className="flex-1 flex flex-col items-center p-2 md:p-2 overflow-hidden">
          {/* العنوان */}
          <h1 className="mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl font-semibold text-center text-red-400">
            مبروك
          </h1>

          {/* الرسالة - معدلة حسب الصورة */}
          <p className="mt-2 md:mt-4 text-sm md:text-base lg:text-lg text-center text-black px-4">
            تمت إضافة الشحنة بنجاح وتم إنشاء السياسات الخاصة بالشحنة.
          </p>

          {/* الصورة */}
          <div className="flex-1 flex items-center justify-center p-4 w-full">
            <img
              src="/images/SuccessShipment.png"
              className="h-auto w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[150px] xl:max-w-[20px] object-contain"
              alt="نجاح إضافة الشحنة"
            />
          </div>

          {/* الأزرار */}
          <div className="w-full p-4">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <NavLink to="/home/shipments">
                <button className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base font-semibold bg-gray-200 rounded-xl text-neutral-500 hover:bg-gray-300 transition-colors">
                  صفحة الشحنات
                </button>
              </NavLink>
              <button className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base font-semibold bg-red-100 rounded-xl text-pink-950 hover:bg-red-200 transition-colors">
                سياسات الطباعة
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
