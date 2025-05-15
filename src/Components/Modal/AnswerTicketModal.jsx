/* eslint-disable react/prop-types */
export default function AnswerTicketModal({ onClose }) {
  return (
    <div
      className="flex fixed inset-0 justify-center items-center bg-black/50 z-[100] p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative p-6 text-center bg-white rounded-2xl w-full max-w-xl ">
        <button
          onClick={onClose}
          className="absolute p-2 rounded-lg cursor-pointer bg-gray-200 bg-opacity-40 border-[none] right-4 top-4"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <h2
          id="modal-title"
          className="mb-4 text-xl font-semibold text-center text-zinc-800"
        >
          رد على التذكرة
        </h2>

        <div className="flex   items-center gap-2 w-full justify-center mb-4">
          <div className="flex gap-2 items-center px-3 py-2 rounded-lg border border-solid border-neutral-200">
            <img src="/Icones/answer.svg" alt="calendar" className="w-5 h-5" />
            <input
              type="text"
              id="answer"
              placeholder="اكتب ردك هنا"
              className="border-none bg-transparent text-sm w-full text-right"
              readOnly
            />
          </div>
        </div>

        <button
          className="px-8  py-2 w-[220px] mx-auto mt-4 text-base bg-red-100 rounded-lg cursor-pointer border-[none] text-pink-950 "
          onClick={onClose}
        >
          ارسال
        </button>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
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
