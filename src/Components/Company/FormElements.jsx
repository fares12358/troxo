import { useState } from "react";

const FormElements = {
  DiscountSection: () => {
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-zinc-800">
            نسبة الخصم على الشحنات
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* حقل معدل الخصم */}
          <div className="md:col-span-1">
            <label
              htmlFor="discount-rate"
              className="block font-semibold text-zinc-800 mb-2"
            >
              معدل الخصم
            </label>
            <input
              type="text"
              id="discount-rate"
              placeholder="أدخل معدل الخصم"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* حقل نوع الشحن */}
          <div className="md:col-span-1">
            <label
              htmlFor="shipping-type"
              className="block font-semibold text-zinc-800 mb-2"
            >
              نوع الشحن
            </label>
            <input
              type="text"
              id="shipping-type"
              placeholder="أدخل نوع الشحن"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* حقل الوزن */}
          <div className="md:col-span-1">
            <label
              htmlFor="weight"
              className="block font-semibold text-zinc-800 mb-2"
            >
              الوزن
            </label>
            <input
              type="text"
              id="weight"
              placeholder="أدخل الوزن"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          {/* حقل نص الخصم */}
          <div className="md:col-span-1">
            <label
              htmlFor="discount-text"
              className="block font-semibold text-zinc-800 mb-2"
            >
              نص الخصم *
            </label>
            <input
              type="text"
              id="discount-text"
              placeholder="ادخل نص الخصم"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="px-8 py-3 text-base font-semibold bg-red-100 rounded-xl text-pink-950 hover:bg-red-200 transition-colors"
          >
            حفظ معدل الخصم
          </button>
        </div>
      </div>
    );
  },

  InternationalShipping: () => {
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleCompanyStatus = () => {
      setIsDisabled(!isDisabled);
    };

    return (
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-zinc-800">
            تفاصيل الشحن الدولي
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="md:col-span-1">
            <label
              htmlFor="first-half-kg"
              className="block font-semibold text-slate-950 mb-2"
            >
              السعر للنصف كيلو الأول
            </label>
            <input
              type="text"
              id="first-half-kg"
              placeholder="أدخل السعر"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="additional-half-kg"
              className="block font-semibold text-slate-950 mb-2"
            >
              السعر للنصف كيلو الإضافي
            </label>
            <input
              type="text"
              id="additional-half-kg"
              placeholder="أدخل السعر"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400"
            />
          </div>

          <div className="md:col-span-1">
            <label
              htmlFor="weight"
              className="block font-semibold text-slate-950 mb-2"
            >
              الوزن
            </label>
            <input
              type="text"
              id="weight"
              placeholder="أدخل الوزن"
              className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400"
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <h4 className="text-base font-semibold text-slate-950">
            الدفع عند الاستلام
          </h4>
          <div className="flex flex-col md:flex-row md:items-center items-start gap-8 mt-4">
            <div className="flex flex-col items-center gap-2">
              <label className="text-sm font-bold text-stone-900">
                {isDisabled ? "غير مفعل" : "تفعيل الاختيار"}
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!isDisabled}
                  onChange={toggleCompanyStatus}
                />{" "}
                <div
                  className={`w-12 h-6 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    isDisabled ? "bg-gray-300" : "bg-blue-700"
                  }`}
                ></div>
              </label>
            </div>

            <div className="">
              <label
                htmlFor="fees"
                className="block text-base font-semibold text-slate-950 mb-2"
              >
                حدد الرسوم
              </label>
              <input
                type="text"
                id="fees"
                placeholder="أدخل الرسوم"
                className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400"
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },

  LocalShipping: () => {
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleCompanyStatus = () => {
      setIsDisabled(!isDisabled);
    };

    return (
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-zinc-800">
            تفاصيل الشحن المحلي
          </h3>
        </div>

        <div className="mt-4">
          <label
            htmlFor="first-10kg"
            className="block text-base font-semibold text-slate-950 mb-2"
          >
            سعر الشحن لأول 10 كيلو
          </label>
          <input
            type="text"
            id="first-10kg"
            placeholder="أدخل السعر"
            className="w-full md:w-1/3 px-4 py-3 bg-white rounded-lg border border-neutral-400"
          />
        </div>

        <div className="mt-6 w-full">
          <h4 className="text-base font-semibold text-slate-950">
            الدفع عند الاستلام
          </h4>
          <div className="flex flex-col md:flex-row md:items-center items-start gap-8 mt-4">
            <div className="flex flex-col items-center gap-2">
              <label className="text-sm font-bold text-stone-900">
                {isDisabled ? "غير مفعل" : "تفعيل الاختيار"}
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!isDisabled}
                  onChange={toggleCompanyStatus}
                />
                <div
                  className={`w-12 h-6 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all flex items-center justify-between px-1 ${
                    isDisabled ? "bg-gray-300" : "bg-blue-700"
                  }`}
                />
              </label>
            </div>

            <div className="">
              <label
                htmlFor="fees"
                className="block text-base font-semibold text-slate-950 mb-2"
              >
                حدد الرسوم
              </label>
              <input
                type="text"
                id="fees"
                placeholder="أدخل الرسوم"
                className="w-full px-4 py-3 bg-white rounded-lg border border-neutral-400"
                disabled={isDisabled}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            type="submit"
            className="px-8 py-3 text-base font-semibold bg-red-100 rounded-xl text-pink-950 hover:bg-red-200 transition-colors"
          >
            حفظ البيانات
          </button>
        </div>
      </div>
    );
  },
};

export default FormElements;
