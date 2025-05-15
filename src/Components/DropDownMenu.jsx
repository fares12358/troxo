/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import AddStoreModal from "./Modal/AddStoreModal";
import AddClientModal from "./Modal/AddClientModal";
import CheckBox from "./CheckBox";

const DropdownMenu = ({
  options,
  placeholder,
  title,
  icon,
  selectedItems = [], // الجديد
  onSelectMulti, // الجديد
  isMulti = false,
  isone = false,
  onSelect,
  selected, // الجديد
  modalToOpen = "store",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const dropdownRef = useRef(null);

  // يغلق القائمة إذا تم الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    if (isMulti) {
      onSelectMulti && onSelectMulti(option);
    } else {
      onSelect && onSelect(option);
      setIsOpen(false); // يغلق لما نختار في الوضع العادي
    }
  };

  const handleAddNew = () => {
    setIsOpen(false);
    setActiveModal(modalToOpen);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base bg-white rounded-lg border border-neutral-400 hover:border-neutral-500 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <img
              src={icon}
              alt=""
              className="w-5 h-5 object-contain"
              aria-hidden="true"
            />
          )}
          <span className={!selected ? "text-zinc-400" : "text-blue-950"}>
            {placeholder}
          </span>
        </div>

        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src="/Icones/search.svg"
                alt="search icone"
                className="w-5 h-5"
              />
            </div>
            <input
              type="text"
              placeholder={`ابحث عن ${title}...`}
              className="w-full py-2 pl-4 pr-10 text-sm text-right   "
            />
          </div>
          {options.map((option, index) => (
            <>
              <div
                key={index}
                className={`flex items-center px-4 py-2.5 hover:bg-gray-50 cursor-pointer ${
                  (isMulti ? selectedItems.includes(option) : "")
                    ? "bg-blue-50"
                    : ""
                }
              ${
                isone &&
                (Array.isArray(selected)
                  ? selected.includes(option)
                  : selected === option)
                  ? "bg-blue-50"
                  : ""
              }
                            `}
                onClick={() => handleSelect(option)}
              >
                {/* عرض Checkbox فقط إذا كان النوع "عميل" وفي وضع الاختيار المتعدد */}
                {title === "العميل" && isMulti && (
                  <div className="mr-2" onClick={(e) => e.stopPropagation()}>
                    <CheckBox
                      checked={selectedItems.includes(option)}
                      onChange={() => handleSelect(option)}
                    />
                  </div>
                )}
                <span className="flex-1 text-right">{option}</span>
              </div>
            </>
          ))}

          <button
            className="flex items-center gap-2 w-full px-4 py-2.5 border-t border-gray-200 bg-red-100 hover:bg-gray-100 text-neutral-600"
            onClick={handleAddNew}
          >
            <img
              src="/Icones/AddIcone.svg"
              alt="add icon"
              className="w-5 h-5"
            />
            <span>إضافة {title} جديد</span>
          </button>
        </div>
      )}

      {activeModal === "store" && (
        <AddStoreModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "client" && (
        <AddClientModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default DropdownMenu;
