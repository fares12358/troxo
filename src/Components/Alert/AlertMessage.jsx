/* eslint-disable react/prop-types */
const AlertMessage = ({ icon, title, description }) => {
  return (
    <div
      className="flex gap-2 sm:gap-3 p-2 sm:p-3 bg-sky-100 rounded-lg border border-sky-500 border-solid"
      role="alert"
    >
      <img
        src={icon}
        alt=""
        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6"
        aria-hidden="true"
      />
      <div className="flex-1 min-w-[100px]">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          {title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm leading-normal sm:leading-loose text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AlertMessage;
