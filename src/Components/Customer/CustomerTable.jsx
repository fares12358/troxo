import CustomerTableRow from "./CustomerTableRow";
import { FilterButton, AddCustomerButton } from "../ActionButtons";
import { useState } from "react";
import AddClientModal from "../Modal/AddClientModal";

function CustomerTable() {
  const [activeModal, setActiveModal] = useState(null);

  const handleAddClientClick = () => {
    setActiveModal("client");
  };
  const customers = [
    {
      id: "CO - 12528",
      name: "مشاري الذبياني",
      phone: "+966 53 337 3122",
      address: "حر جَبَل النور، المملكة العربية السعودية",
      date: "12-03-2025",
    },
    {
      id: "CO - 12158",
      name: "أحمد أحمد",
      phone: "+966 53 852 0484",
      address: "السادة، المملكة العربية السعودية",
      date: "22-02-2025",
    },
    {
      id: "CO - 12458",
      name: "نواف العبسي",
      phone: "+966 55 912 3047",
      address: "رقمي، المملكة العربية السعودية",
      date: "12-01-2025",
    },
    {
      id: "CO - 12568",
      name: "مشاري الذبياني",
      phone: "+966 53 337 3122",
      address: "حر جَبَل النور، المملكة العربية السعودية",
      date: "12-03-2025",
    },
    {
      id: "CO - 12258",
      name: "أحمد أحمد",
      phone: "+966 53 852 0484",
      address: "السادة، المملكة العربية السعودية",
      date: "22-02-2025",
    },
    {
      id: "CO - 12658",
      name: "نواف العبسي",
      phone: "+966 55 912 3047",
      address: "رقمي، المملكة العربية السعودية",
      date: "12-01-2025",
    },
    {
      id: "CO - 12578",
      name: "مشاري الذبياني",
      phone: "+966 53 337 3122",
      address: "حر جَبَل النور، المملكة العربية السعودية",
      date: "12-03-2025",
    },
    {
      id: "CO - 12058",
      name: "أحمد أحمد",
      phone: "+966 53 852 0484",
      address: "السادة، المملكة العربية السعودية",
      date: "22-02-2025",
    },
    {
      id: "CO - 12958",
      name: "نواف العبسي",
      phone: "+966 55 912 3047",
      address: "رقمي، المملكة العربية السعودية",
      date: "12-01-2025",
    },
    {
      id: "CO - 13558",
      name: "أحمد أحمد",
      phone: "+966 53 852 0484",
      address: "السادة، المملكة العربية السعودية",
      date: "12-01-2025",
    },
  ];
  const [isDataViewActive, setIsDataViewActive] = useState(false);

  const toggleDataView = () => {
    setIsDataViewActive(!isDataViewActive);
    // يمكنك إضافة منطق إضافي هنا عند التبديل
  };

  return (
    <article className="flex flex-col w-full p-4 mt-2 bg-white rounded-2xl md:p-6">
      {/* Header Section */}
      <div className="flex flex-col w-full gap-4 mb-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl whitespace-nowrap">
          عميل
        </h2>

        <div className="flex flex-col w-full gap-8 lg:flex-row lg:items-center lg:w-auto">
          {/* Search Box */}
          <div className="relative w-full lg:w-64">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <img
                src="/Icones/search.svg"
                className="w-4 h-4"
                alt="Search icon"
              />
            </div>
            <input
              type="text"
              className="w-full pr-10 text-sm border border-gray-300 rounded-full py-3 px-5 text-right focus:border-black focus:outline-none"
              placeholder="ابحث عن العميل..."
            />
          </div>

          {/* Filter and Add Buttons */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* Toggle Button Group */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleDataView}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors  ${
                    isDataViewActive
                      ? "bg-blue-500"
                      : "bg-white border border-gray-200"
                  }`}
                  aria-pressed={isDataViewActive}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full  transition-transform ${
                      isDataViewActive
                        ? "-translate-x-6 bg-white"
                        : "-translate-x-1 bg-gray-400 "
                    }`}
                  />
                </button>
                <span className="text-sm font-medium text-black whitespace-nowrap">
                  عرض البيانات كما هو محدد
                </span>
              </div>

              <FilterButton />
            </div>

            <AddCustomerButton onClick={handleAddClientClick} />
          </div>
          {/* عرض المودال عند النقر */}
          {activeModal === "client" && (
            <AddClientModal onClose={() => setActiveModal(null)} />
          )}
        </div>
      </div>

      {/* Warning Messages */}
      <div className="w-full mb-6">
        <p className="text-sm text-red-400 break-words">
          نستخدم بيانات العملاء (التفاصيل الشخصية وعنوان السكن) لمعرفة عناوينهم
          وطرق التواصل معهم لتسهيل تسليم الطلبات. يرجى التحقق من التفاصيل
          التالية قبل إضافة العملاء:
        </p>

        <div className="flex items-start gap-2 mt-3 text-sm text-neutral-500">
          <div className="flex-shrink-0 w-2 h-2 mt-1.5 bg-red-400 rounded-full" />
          <p className="break-words">
            في حال عدم وجود مدينة أو منطقة، يمكنك إضافة سجلات جديدة. عند إضافة
            مدينة أو منطقة جديدة، من الضروري أن يكون الاسم باللغة الإنجليزية.
          </p>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 text-sm font-semibold bg-red-100 rounded-lg text-zinc-800 sm:gap-4 sm:px-6 sm:py-4">
            <div className="col-span-3 sm:col-span-2 flex items-center justify-center gap-1 whitespace-nowrap">
              <img
                src="/Icones/Profile.svg"
                alt="client icon"
                className="w-4 h-4"
              />
              <span>رقم العميل</span>
            </div>
            <div className="col-span-3 sm:col-span-2 flex justify-center items-center gap-1 ">
              <img
                src="/Icones/Profile.svg"
                alt="client icon"
                className="w-4 h-4"
              />
              <span>اسم العميل</span>
            </div>
            <div className="col-span-2 sm:col-span-2 flex justify-center items-center gap-1 ">
              <img
                src="/Icones/phone.svg"
                alt="phone icon"
                className="w-4 h-4"
              />
              <span>رقم الهاتف</span>
            </div>
            <div className="col-span-2 sm:col-span-3 flex justify-center items-center gap-1 mt-2 sm:mt-0">
              <img
                src="/Icones/Location.svg"
                alt="location icon"
                className="w-4 h-4"
              />
              <span>عنوان العميل</span>
            </div>
            <div className="col-span-1 text-center sm:col-span-2 flex items-center justify-center  gap-1 ">
              <span>التاريخ</span>
            </div>
            <div className="col-span-1 sm:col-span-1 flex items-center justify-center"></div>
          </div>

          {/* Table Rows */}
          <div className="bg-slate-50 rounded-lg">
            {customers.map((customer, index) => (
              <div key={index}>
                <CustomerTableRow customer={customer} />
                {index < customers.length - 1 && (
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
    </article>
  );
}

export default CustomerTable;
