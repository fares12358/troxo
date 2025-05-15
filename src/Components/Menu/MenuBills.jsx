/* eslint-disable react/prop-types */
import { MenuItem } from "./MenuItem";

const menuItems = [
  {
    text: "طباعة الفاتورة",
    textColor: "text-[#4D1A2D]",
    icon: `/Icones/Download.svg`,
    action: "print",
  },
  {
    text: "عرض اللفاتورة",
    textColor: "text-[#4D1A2D]",
    icon: `/Icones/DisplayInvoice.svg`,
    action: "display",
  },
];

export default function MenuBills({ onClose }) {
  return (
    <div
      className="bg-white rounded-lg shadow-sm w-[185px] py-2 border border-gray-200"
      // منع إغلاق القائمة عند النقر عليها
    >
      <div className="flex flex-col items-start space-y-1 px-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            icon={item.icon}
            textColor={item.textColor}
            className="hover:bg-red-100 rounded px-2 py-1"
          />
        ))}
      </div>
    </div>
  );
}
