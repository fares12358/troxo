import SuccessShimpentModal from "../Components/Modal/SuccessShimpentModel";
import { useState } from "react";

export default function PaymentSection() {
  const [showSuccessShipmentModal, setShowSuccessShipmentModal] =
    useState(false);

  const OnSumbit = (e) => {
    e.preventDefault();
    setShowSuccessShipmentModal(true);
  };
  return (
    <>
      <section className="flex max-md:flex-col gap-3 justify-center  items-center px-11 py-8 mt-6 w-full tracking-wide bg-white rounded-lg border-2 border-solid border-zinc-200 max-md:px-5 max-md:max-w-full">
        <h3 className="text-lg font-semibold text-gray-800">طريقة الدفع</h3>
        <div className="flex gap-10 px-12 py-4  max-w-full text-base font-semibold whitespace-nowrap bg-white rounded-lg border-2 border-solid border-zinc-200 w-[350px] max-md:px-5">
          <span className="my-auto text-gray-800">الرصيد</span>
          <div className="flex flex-1 text-pink-950">
            <span className="grow my-auto">370</span>
            <img
              src="/images/CurrencyIcone.svg"
              alt="currency icone"
              className="object-contain shrink-0 aspect-square w-[27px]"
            />
          </div>
        </div>
        <button
          onClick={OnSumbit}
          className="w-full  px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-lg font-semibold bg-red-100 rounded-lg lg:rounded-xl hover:bg-red-200 text-pink-950 transition-colors"
        >
          دفع
        </button>
        <button className="w-full  px-8 lg:px-12 py-3 lg:py-4 text-base  font-semibold bg-gray-200 rounded-lg lg:rounded-xl hover:bg-gray-300 text-neutral-600 transition-colors">
          إلغاء الطلب
        </button>
        {showSuccessShipmentModal && (
          <SuccessShimpentModal
            onClose={() => setShowSuccessShipmentModal(false)}
          />
        )}
      </section>
    </>
  );
}
