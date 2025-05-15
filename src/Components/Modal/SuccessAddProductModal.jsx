export default function SuccessAddProductModal({ onClose }) {
    return (
      <div
        className="flex fixed inset-0 justify-center items-center bg-black/50 z-[100] p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="relative p-6 sm:p-10 text-center bg-white rounded-2xl w-full max-w-[930px] mx-4 sm:mx-0 sm:w-[90%] md:w-[80%] lg:w-[930px]">
          <img
            src="/Icones/SucessProduct.svg"
            alt="Success add product"
            className="mx-auto mt-0 mb-6 sm:mb-8 h-[120px] w-[130px] sm:h-[150px] sm:w-[160px] md:h-[190px] md:w-[204px]"
          />
          <div>
            <h2 id="modal-title" className="mb-4 sm:mb-5 text-2xl sm:text-3xl md:text-4xl text-pink-950">
              تهانينا
            </h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-zinc-800 px-2 sm:px-0">
              تمت إضافة المنتج بنجاح تمت إضافة المنتج بنجاح تمت إضافة المنتج بنجاح
            </p>
            <button
              onClick={onClose}
              className="px-10 sm:px-16 py-3 sm:py-4 text-base sm:text-lg bg-red-100 rounded-xl cursor-pointer border-[none] text-pink-950"
            >
              تم
            </button>
          </div>
          <button
            onClick={onClose}
            className="absolute p-2 sm:p-3 rounded-lg cursor-pointer bg-gray-200 bg-opacity-40 border-[none] right-[15px] top-[15px] sm:right-[25px] sm:top-[25px] md:right-[35px] md:top-[35px]"
            aria-label="Close modal"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    );
  }
  
  function CloseIcon() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L17 17M7 17L17 7"
          stroke="#212529"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }