import { NavLink } from "react-router";
import { FilterButton, AddShipmentButton } from "../ActionButtons";

const ShipmentEmpty = () => {
  return (
    <section className="w-full bg-white rounded-2xl p-4 md:p-6 ">
      {/* Search and Action Buttons */}
      <div className="flex flex-col  md:flex-row gap-4 md:gap-6 justify-between items-start md:items-center mb-6">
        {/* Search Input */}
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full w-full md:w-auto">
          <img
            src="/Icones/search.svg"
            alt="ابحث عن تصنيف"
            className="object-contain w-4 h-4 aspect-square"
          />
          <input
            type="text"
            placeholder="...ابحث عن تصنيف"
            className="text-sm text-right text-gray-500 bg-transparent outline-none w-full md:w-40"
            dir="rtl"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none">
            <FilterButton />
          </div>
          <div className="flex-1 md:flex-none">
            <NavLink to="/home/shipments/addnewstore">
              <AddShipmentButton />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Table Header */}
      {/* Responsive Table Header */}
      <div className="max-md:overflow-x-auto w-full">
        <div className="grid grid-cols-12 min-[500px]:grid-cols-8 md:grid-cols-12 gap-2 px-4 py-3 bg-red-50 rounded-xl  min-w-[300px]">
          {/* اسم العميل */}
          <div className="col-span-3 min-[500px]:col-span-1 md:col-span-3 flex items-center gap-2">
            <img
              src="/Icones/Profile.svg"
              alt="عميل"
              className="w-4 h-4 sm:w-5 sm:h-5 min-w-[16px] sm:min-w-[20px] object-contain"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap truncate">
              اسم العميل
            </span>
          </div>

          {/* اسم المتجر */}
          <div className="col-span-3 min-[500px]:col-span-1 md:col-span-3 flex items-center gap-2">
            <img
              src="/Icones/store.svg"
              alt="متجر"
              className="w-4 h-4 sm:w-5 sm:h-5 min-w-[16px] sm:min-w-[20px] object-contain"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap truncate">
              اسم المتجر
            </span>
          </div>

          {/* شركة الشحن */}
          <div className="col-span-3 min-[500px]:col-span-1 md:col-span-3 flex items-center gap-2">
            <img
              src="/Icones/shipment.svg"
              alt="شحن"
              className="w-4 h-4 sm:w-5 sm:h-5 min-w-[16px] sm:min-w-[20px] object-contain"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap truncate">
              شركة الشحن
            </span>
          </div>

          {/* عنوان العميل */}
          <div className="col-span-3 min-[500px]:col-span-2 md:col-span-3 flex items-center gap-2">
            <img
              src="/Icones/Location.svg"
              alt="عنوان"
              className="w-4 h-4 sm:w-5 sm:h-5 min-w-[16px] sm:min-w-[20px] object-contain"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap truncate">
              عنوان العميل
            </span>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center py-12 md:py-16 bg-slate-50 rounded-2xl mt-4">
        <img
          src="/images/ShipmentEmpty.png"
          alt="لا توجد شحنات"
          className="w-64 md:w-80 h-auto"
        />
        <p className="mt-6 text-lg md:text-xl font-semibold text-pink-950">
          لا توجد شحنات لعرضها
        </p>
      </div>
    </section>
  );
};

export default ShipmentEmpty;
