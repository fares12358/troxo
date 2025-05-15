import TicketTableRow from "./TicketTableRow";

function TicketTable() {
  const tickets = [
    {
      id: "T-1258",
      shipmentId: "p-1268",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
    {
      id: "T-1668",
      shipmentId: "p-1418",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
    {
      id: "T-1785",
      shipmentId: "p-1628",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
    {
      id: "T-1251",
      shipmentId: "p-2168",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
    {
      id: "T-1663",
      shipmentId: "p-2368",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
    {
      id: "T-1784",
      shipmentId: "p-2568",
      companyName: "Smsa",
      tickettype: "نوع التذكرة",
    },
  ];

  return (
    <>
      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm font-semibold bg-[#FED5D2] rounded-lg text-zinc-800 sm:gap-4 sm:px-6 sm:py-4">
            <div className=" col-span-3 sm:col-span-2  font-semibold text-center">
              رقم التذكرة
            </div>
            <div className=" col-span-2 sm:col-span-2  font-semibold text-center ">
              رقم الشحنة
            </div>
            <div className="col-span-3 sm:col-span-3 font-semibold text-center">
              اسم الشركة
            </div>
            <div className="col-span-2 sm:col-span-3  font-semibold text-center ">
              نوع التذكرة
            </div>

            <div className=" col-span-2 sm:col-span-2  font-semibold text-center ">
              الإجراءات
            </div>
          </div>

          {/* Table Rows */}
          <div className="bg-slate-50 rounded-lg">
            {tickets.map((ticket, index) => (
              <div key={index}>
                <TicketTableRow ticket={ticket} />
                {index < tickets.length - 1 && (
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

export default TicketTable;
