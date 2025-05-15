const WelcomeModal = ({ onClose }) => {
  return (
    <div
      className="flex fixed inset-0 justify-center items-center bg-black/50 z-[100] p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-white rounded-3xl border border-pink-950 w-full max-w-[600px] md:p-8 p-4 mx-2">
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 md:right-6 md:top-6 p-2 bg-red-100 rounded-lg"
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              d="M7 7L17 17M7 17L17 7"
              stroke="#4D1A2D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* المحتوى الرئيسي */}
        <div className="flex flex-col items-center text-center">
          {/* النص العلوي */}
          <div className="text-pink-950 text-xl md:text-2xl mb-3 md:mb-4">
            1255#، إلى عبد الله
          </div>

          {/* عنوان WELCOME */}
          <h1 className="text-3xl md:text-5xl font-bold text-red-100 mb-6 md:mb-8">
            WELCOME
          </h1>

          {/* الصورة الرئيسية */}
          <div className="w-full h-48 md:h-64 rounded-lg mb-6 md:mb-8 flex items-center justify-center">
            <img
              src="/images/Welcome.png"
              alt="Welcome"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* الصورة الثانية في الزاوية اليمين السفلية */}
        <div className="absolute -bottom-4 right-1 md:-bottom-7 md:right-1 w-20 h-20 md:w-32 md:h-32">
          <img
            src="/images/Group.svg"
            alt="Decoration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
