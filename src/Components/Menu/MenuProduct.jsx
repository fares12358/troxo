/* eslint-disable react/prop-types */
import EditProductModal from "../Modal/EditProductModal";
import { MenuItem } from "./MenuItem";
import { useState } from "react";

const menuItems = [
  {
    text: "تعديل منتج",
    icon: `/Icones/Edit.svg`,
    action: "Edit",
  },
  {
    text: "حذف منتج",
    icon: `/Icones/Delete.svg`,
    action: "Delete",
  },
];

export default function MenuProduct() {
  const [activeModal, setActiveModal] = useState(null);

  const handleMenuItemClick = (action, e) => {
    e.stopPropagation(); // هذه هي السطر الأساسي الذي يحل المشكلة
    if (action === "Edit") {
      setActiveModal("Edit");
    }
    // يمكنك إضافة حالات أخرى هنا
  };

  return (
    <div className="bg-white rounded-lg shadow-sm w-[185px] py-2 border border-gray-200">
      <div className="flex flex-col items-start space-y-1 px-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            icon={item.icon}
            textColor={item.textColor}
            className="hover:bg-gray-100 rounded px-2 py-1"
            onClick={(e) => handleMenuItemClick(item.action, e)}
          />
        ))}
      </div>

      {/* عرض المودال خارج قائمة الـ MenuItem */}
      {activeModal === "Edit" && (
        <EditProductModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
