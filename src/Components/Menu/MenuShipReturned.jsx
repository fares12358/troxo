/* eslint-disable react/prop-types */
import { MenuItem } from "./MenuItem";
import { useState } from "react";
import TicketModal from "../Modal/TicketModal";

const menuItems = [
  {
    text: "طباعة البوليصة",
    textColor: "text-sky-600",
    icon: `/Icones/Print.svg`,
    action: "print",
  },
];

export default function MenuShipReturned({ onClose }) {
  const [activeModal, setActiveModal] = useState(null);

  const handleMenuItemClick = (action) => {
    if (action === "ticket") {
      console.log(action);
      setActiveModal("ticket");
    }
    console.log(action);
    // يمكنك إضافة حالات أخرى هنا
  };
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
            className="hover:bg-gray-100 rounded px-2 py-1"
            onClick={() => handleMenuItemClick(item.action)}
          />
        ))}
        {/* عرض المودال عند النقر */}
        {activeModal === "ticket" && (
          <TicketModal
            onClose={() => {
              setActiveModal(null);
              onClose(); // إغلاق القائمة بعد إغلاق المودال
            }}
          />
        )}
      </div>
    </div>
  );
}
