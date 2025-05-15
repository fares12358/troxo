import ShipmentAdminRow from "./ShipmentAdminRow";
function ShipmentGlobal() {
  const shipments = [
    {
      id: "1258",
      company: "/Icones/Company.png",
      address: "جبل النور، السعودية",
      status: "قيد التحضير",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
    {
      id: "1668",
      company: "/Icones/Company.png",
      address: "السادة، السعودية",
      status: "مرتجع",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
    {
      id: "1785",
      company: "/Icones/Company.png",
      address: "رقمي، السعودية",
      status: "جاهز للاستلام",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
    {
      id: "1251",
      company: "/Icones/Company.png",
      address: "جبل النور، السعودية",
      status: "قيد التحضير",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
    {
      id: "1663",
      company: "/Icones/Company.png",
      address: "السادة، السعودية",
      status: "مرتجع",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
    {
      id: "1784",
      company: "/Icones/Company.png",
      address: "رقمي، السعودية",
      status: "جاهز للاستلام",
      weight: "5 كجم",
      length: "50 سم",
      width: "15 سم",
      height: "30 سم",
      print: "/Icones/Print.svg",
      more: "/Icones/more.svg",
    },
  ];

  return (
    <>
      {/* Header Section */}
      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm font-semibold bg-[#FED5D2] rounded-lg text-zinc-800 sm:gap-4 sm:px-6 sm:py-4">
            <div className=" col-span-3 sm:col-span-2  font-semibold text-center">
              اسم الشحن
            </div>
            <div className="col-span-3 sm:col-span-3 font-semibold text-center">
              شركة الشحن
            </div>
            <div className="col-span-2 sm:col-span-3  font-semibold text-center ">
              عنوان العميل
            </div>
            <div className=" col-span-2 sm:col-span-2  font-semibold text-center ">
              حالة الشحنة
            </div>
            <div className=" col-span-1 sm:col-span-1  font-semibold text-center ">
              طباعة
            </div>
            <div className=" col-span-1 sm:col-span-1  font-semibold text-center">
              تفاصيل
            </div>
          </div>

          {/* Table Rows */}
          <div className="bg-slate-50 rounded-lg">
            {shipments.map((shipment, index) => (
              <div key={index}>
                <ShipmentAdminRow shipment={shipment} />
                {index < shipments.length - 1 && (
                  <div className="h-px mx-4 bg-neutral-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex flex-col items-center w-full gap-4 mt-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-black whitespace-nowrap">
          <span>عدد الصفوف في كل صفحة:</span>
          <select className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:border-black">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded  text-gray-700  transition-colors">
            <img src="/Icones/ArrowRight.svg" alt="السابق" className="w-4" />
          </button>
          <button className="px-3 py-1 rounded bg-gray-100  font-medium hover:bg-red-200 transition-colors">
            1
          </button>
          <button className="p-2 rounded 0 text-gray-700  transition-colors">
            <img src="/Icones/ArrowLeft.svg" alt="التالي" className="w-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ShipmentGlobal;
