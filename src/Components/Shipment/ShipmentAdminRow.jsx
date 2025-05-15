/* eslint-disable react/prop-types */
import { StatusBadge } from "./../StatusBadge";
import { useState } from "react";

function ShipmentAdminRow({ shipment }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowToggle = (rowId) => {
    setSelectedRow(selectedRow === rowId ? null : rowId);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-200 w-full">
        <div className="text-sm col-span-3 sm:col-span-2 text-center text-gray-800">
          # {shipment.id}
        </div>
        <div className="text-sm col-span-3 sm:col-span-3 text-center text-gray-800">
          <img
            src={shipment.company}
            alt="Shipping Company"
            className="w-14 h-7 object-contain rounded-md mx-auto"
          />
        </div>
        <div className="text-sm col-span-2 sm:col-span-3 text-center text-gray-800">
          {shipment.address}
        </div>
        <div className="text-sm col-span-2 sm:col-span-2 text-center text-gray-800">
          <StatusBadge status={shipment.status} />
        </div>
        <div className="text-sm col-span-1 sm:col-span-1 text-gray-800 text-center">
          <div className="flex items-center justify-center">
            <button>
              <img src={shipment.print} alt="Print" className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="text-sm col-span-1 sm:col-span-1 text-gray-800 text-center">
          <div className="flex items-center justify-center">
            <button onClick={() => handleRowToggle(shipment.id)}>
              <img src={shipment.more} alt="more details" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* صف تفاصيل الشحنة */}
      {selectedRow === shipment.id && (
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <div className="grid grid-cols-12 items-center justify-items-center  gap-2">
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">الوزن</p>
              <p className="text-gray-800">{shipment.weight}</p>
            </div>
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">الطول</p>
              <p className="text-gray-800">{shipment.length}</p>
            </div>
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">العرض</p>
              <p className="text-gray-800">{shipment.width}</p>
            </div>
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">الارتفاع</p>
              <p className="text-gray-800">{shipment.height}</p>
            </div>
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">تاريخ الشحنة</p>
              <p className="text-gray-800">{shipment.shipDate}</p>
            </div>
            <div className="text-sm text-center col-span-2 ">
              <p className="font-medium text-gray-500">المبلغ</p>
              <div className="flex items-center justify-center">
                <span className="text-gray-800">{shipment.price}</span>
                <img
                  src={shipment.currency}
                  alt="currency"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShipmentAdminRow;
