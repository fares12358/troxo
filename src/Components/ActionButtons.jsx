/* eslint-disable react/prop-types */



export const ActionButtons = ({ icon, children, variant = "default" }) => {
  const baseClasses =
    "flex overflow-hidden flex-col justify-center items-center px-1 py-1 rounded-lg min-h-12 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]";
  const variantClasses = {
    default: "bg-pink-950 bg-opacity-10",
    outline: "bg-white border border-solid border-zinc-200",
    primary: "bg-red-100",
  };
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="flex overflow-hidden gap-2 items-start px-3 py-2.5 rounded-lg border border-solid border-pink-950 min-h-10 cursor-pointer">
        {icon && (
          <img
            src={icon}
            alt="action icone"
            className="object-contain shrink-0 w-6 aspect-square "
          />
        )}
        <span className="text-base font-medium tracking-tight leading-none text-center text-pink-950">
          {children}
        </span>
      </div>
    </div>
  );
};

export const FilterButton = () => {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
      hover:bg-red-100 hover:text-pink-950 hover:border-pink-950 focus:ring-pink-950 focus:ring-offset-pink-50`}
      aria-label="تصفية النتائج"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-nowrap">فلتر</span>
    </button>
  );
};

export const ExcelButton = () => (
  <button className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 text-sm font-semibold bg-red-100 rounded-md text-pink-950">
    <div className="flex overflow-hidden gap-2 items-start cursor-pointer">
      <img
        src="/Icones/Download.svg"
        alt="Download icone"
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>ملف إكسل</span>
    </div>
  </button>
);

export const AddProductButton = ({onClick}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2  font-medium text-pink-950 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2`}
    aria-label="إضافة منتج جديد"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
    <span className="whitespace-nowrap">إضافة منتج</span>
  </button>
);
export const AddShipmentButton = () => (
  <button className="flex overflow-hidden flex-col justify-center items-center py-1 pr-3 pl-2 text-xs font-medium tracking-normal bg-red-100 rounded-md text-pink-950">
    <div className="flex overflow-hidden gap-2 items-center cursor-pointer">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e95660b64d80ec70fafcd1a47dbccf9a97e8de4?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
      <span>إضافة شحنات</span>
    </div>
  </button>
);

export const AddCustomerButton = ({ onClick }) => {

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 font-semibold text-pink-950 bg-red-100 rounded-lg hover:bg-red-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
      aria-label="إضافة عميل جديد"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-nowrap">إضافة عميل</span>
    </button>
    
  );
  
};

