import WalletContent from "./../Components/Wallet/WalletContent";

export default function BankAccount() {
  return (
    <div className="w-full max-sm:px-4 max-md:px-5 px-6 max-lg:px-8" dir="rtl">
      <div className="flex flex-col items-start mt-3 sm:mt-4 w-full max-w-screen-2xl mx-auto">
        {/* العنوان وشريط التنقل */}
        <div className="w-full flex  items-center justify-between mb-4 sm:mb-6">
          <div className="flex flex-col items-start">
            <h1 className="text-xl sm:text-2xl font-black text-gray-800 uppercase">
              المحفظة
            </h1>
            <nav
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-500"
              aria-label="مسار التنقل"
            >
              <ol className="flex items-center  ">
                <li className="hover:text-gray-700 transition-colors">
                  الرئيسية
                </li>
                <li aria-hidden="true" className="text-gray-400">
                  &gt;
                </li>
                <li className="text-pink-950 font-medium">المحفظة</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="w-full max-md:max-w-full">
          <WalletContent />
        </div>
      </div>
    </div>
  );
}
