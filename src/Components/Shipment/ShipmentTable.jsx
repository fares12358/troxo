/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router";
import MenuShipment from "./../Menu/MenuShipment";

const ShipmentTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const handleRowClick = (rowId) => {
    setExpandedRow(expandedRow === rowId ? null : rowId);
  };
  const [selectedRow, setSelectedRow] = useState(false);

  const handleMenuToggle = () => {
    setSelectedRow(!selectedRow);
  };
  const shipmentData = [
    {
      id: 1,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "5",
      price: "646 ريال سعودي",
      height: "25 سم",
      width: "30 سم",
      length: "35 سم",
      weight: "1 كغ",
    },
    {
      id: 2,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "7",
      price: "346 ريال سعودي",
      height: "25 سم",
      width: "30 سم",
      length: "35 سم",
      weight: "1 كغ",
    },
    {
      id: 3,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "15",
      price: "246 ريال سعودي",
      height: "25 سم",
      width: "30 سم",
      length: "35 سم",
      weight: "1 كغ",
    },
    {
      id: 4,
      customerName: "مشاري الذبياني",
      product: "طقم رياضي",
      quantity: "10",
      price: "146 ريال سعودي",
      height: "25 سم",
      width: "30 سم",
      length: "35 سم",
      weight: "1 كغ",
    },
  ];
  return (
    <div className="flex flex-col  gap-2">
      <section
        className="flex flex-col p-4 bg-white rounded-lg border border-gray-200 "
        dir="rtl"
      >
        {/* Header Section - معدل للاستجابة */}
        <div className="flex flex-row justify-between items-start md:items-center gap-3 mb-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-gray-800">
              قائمة طلبات الشحن
            </h2>
            <time className="text-xs text-gray-500">
              25 مايو 2023، 09:41 مساءً
            </time>
          </div>

          <div className="flex justify-center relative">
            <button
              onClick={() => handleMenuToggle(shipmentData.id)}
              className="text-gray-400 hover:text-red-900"
            >
              <svg
                className="w-6 h-6 rotate-90 bg-red-100 rounded-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
            {selectedRow && (
              <div className="absolute left-5 top-[75%] mt-1 z-50">
                <MenuShipment onClose={() => setSelectedRow(true)} />
              </div>
            )}
          </div>
        </div>

        {/* جدول متجاوب مع تمرير أفقي على الجوال فقط */}
        <div className="mt-5 overflow-auto">
          <table className="w-full table-auto border-collapse border-spacing-0">
            {/* Table Header - معدل للاستجابة */}
            <thead className="bg-gray-50">
              <tr className="">
                {/* عمود العميل */}
                <th className=" px-3 py-3 text-center text-xs md:text-sm font-medium text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <div className=" md:flex flex-col items-center">
                      <img
                        src="/Icones/Sortup.svg"
                        alt="تصاعدي"
                        className="w-3 h-3"
                      />
                      <img
                        src="/Icones/Sortdown.svg"
                        alt="تنازلي"
                        className="w-3 h-3 mt-1"
                      />
                    </div>
                    <img
                      src="/Icones/Profile.svg"
                      alt="عميل"
                      className="w-4 h-4"
                    />
                    <span>العميل</span>
                  </div>
                </th>

                {/* عمود المنتج */}
                <th className="px-3 py-3 text-center text-xs md:text-sm font-medium text-gray-500 ">
                  <div className="flex items-center justify-center gap-2">
                    <img src="/Icones/box.svg" alt="منتج" className="w-4 h-4" />
                    <span>المنتج</span>
                  </div>
                </th>

                {/* عمود الكمية */}
                <th className="px-3 py-3 text-center text-xs md:text-sm font-medium text-gray-500 ">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/Icones/Quantity.svg"
                      alt="كمية"
                      className="w-4 h-4"
                    />
                    <span>الكمية</span>
                  </div>
                </th>

                {/* عمود السعر */}
                <th className="px-3 py-3 text-center text-xs md:text-sm font-medium text-gray-500 ">
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src="/Icones/price.svg"
                      alt="سعر"
                      className="w-4 h-4"
                    />
                    <span>السعر</span>
                  </div>
                </th>

                {/* عمود الإجراءات */}
                <th className="px-3 py-3 text-center text-xs md:text-sm font-medium text-gray-500 ">
                  <span>الإجراءات</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {shipmentData.map((shipment) => (
                <>
                  <tr
                    key={shipment.id}
                    className={`hover:bg-gray-50 ${
                      expandedRow === shipment.id ? "bg-blue-50" : ""
                    }`}
                    onClick={() => handleRowClick(shipment.id)}
                  >
                    <td className="px-3 py-3 md:px-4 md:py-4 text-center text-xs md:text-sm whitespace-nowrap">
                      {shipment.customerName}
                    </td>
                    <td className="px-3 py-3 md:px-4 md:py-4 text-center text-xs md:text-sm whitespace-nowrap">
                      {shipment.product}
                    </td>
                    <td className="px-3 py-3 md:px-4 text-center md:py-4 text-xs md:text-sm whitespace-nowrap">
                      {shipment.quantity}
                    </td>
                    <td className="px-3 py-3 md:px-4 text-center md:py-4 text-xs md:text-sm whitespace-nowrap">
                      {shipment.price}
                    </td>
                    <td className="px-3 py-3 md:px-4 md:py-4 text-xs md:text-sm whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <img
                            src="/Icones/Edit.svg"
                            alt="Edit icone"
                            className="w-6"
                          />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-gray-700">
                          <img
                            src="/Icones/Delete.svg"
                            alt="delete icone"
                            className="w-6"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {expandedRow === shipment.id && (
                    <tr>
                      <td colSpan="5" className="px-2 py-3 bg-blue-50">
                        <div className="p-3 md:p-4 text-center rounded-xl border border-solid bg-slate-50 border-neutral-200">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <DetailItem label="المتجر" value="جول الذهبي" />
                            <DetailItem
                              label="العميل"
                              value={shipment.customerName}
                            />
                            <DetailItem
                              label="المنتج"
                              value={shipment.product}
                            />
                            <DetailItem
                              label="الكمية"
                              value={shipment.quantity}
                            />
                            <DetailItem label="السعر" value={shipment.price} />
                            <DetailItem
                              label="الارتفاع"
                              value={shipment.height}
                            />
                            <DetailItem label="العرض" value={shipment.width} />
                            <DetailItem label="الطول" value={shipment.length} />
                            <DetailItem label="الوزن" value={shipment.weight} />
                          </div>
                          <button
                            onClick={() => setExpandedRow(null)}
                            className="text-xs  md:text-sm text-center text-red-500 hover:text-red-700 mt-2"
                          >
                            إغلاق التفاصيل
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>

        {/* Confirm Button - معدل للاستجابة */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <NavLink to="/home/shipments/checkout">
            <button className="px-4 py-2 cursor-pointer md:px-6 md:py-4 text-sm md:text-base font-extrabold bg-red-100 text-pink-950 rounded-xl w-full sm:w-auto min-w-[200px]">
              متابعة الدفع
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ShipmentTable;

// مكون مساعد لعرض التفاصيل
const DetailItem = ({ label, value }) => (
  <div className="flex gap-2 min-w-[150px]">
    <div className="text-xs md:text-sm font-semibold text-zinc-400">
      {label}
    </div>
    <div className="text-xs md:text-sm font-semibold text-slate-950">
      {value}
    </div>
  </div>
);
