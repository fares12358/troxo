/* eslint-disable react/prop-types */
const CheckBox = ({ checked, onChange }) => {
  return (
    <div
      className={`w-5 h-5 border-2 rounded flex items-center justify-center cursor-pointer ${
        checked ? "bg-blue-500 border-blue-500" : "border-gray-300"
      }`}
      onClick={onChange}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
        </svg>
      )}
    </div>
  );
};

export default CheckBox;
