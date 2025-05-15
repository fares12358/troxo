function BankAccountDetails() {
  return (
    <section className="w-full p-6 bg-white rounded-lg mt-6 border-2 border-solid border-zinc-200">
      {/* العنوان الرئيسي */}
      <h3 className="text-lg font-bold text-slate-900 mb-6">حسابات بنكية</h3>

      {/* محتوى البطاقة */}
      <div className="flex max-md:flex-col justify-between gap-4 md:gap-6">
        {/* صف اسم المستفيد */}
        <div className="flex flex-col gap-2 w-full md:w-[30%] lg:w-[25%]">
          <label className="text-sm font-medium text-red-400">
            اسم المستفيد
          </label>
          <div className="flex items-center max-lg:flex-col max-md:flex-row gap-2 p-3 md:p-4 bg-red-100 rounded-lg ">
            <img
              src="/Icones/Profile.svg"
              alt="client icon"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-sm font-semibold text-gray-800 truncate">
              مشاري الدقياس
            </span>
          </div>
        </div>

        {/* صف رقم IBAN */}
        <div className="flex flex-col gap-2 w-full md:w-[40%] lg:w-[45%]">
          <label className="text-sm font-medium text-red-400">IBAN رقم</label>
          <div className="p-3 md:p-4 bg-red-100 rounded-lg hover:bg-red-50 transition-colors overflow-x-auto">
            <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
              AL3520211109000000000124567
            </span>
          </div>
        </div>

        {/* صف اسم البنك */}
        <div className="flex flex-col gap-2 w-full md:w-[30%] lg:w-[30%]">
          <label className="text-sm font-medium text-red-400">اسم البنك</label>
          <div className="flex items-center max-lg:flex-col max-md:flex-row gap-2 p-3 md:p-4 bg-red-100 rounded-lg ">
            <img
              src="/Icones/BankIcone.svg"
              alt="Bank logo"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-sm font-semibold text-gray-800 truncate">
              البنك الوطني السعودي
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BankAccountDetails;
