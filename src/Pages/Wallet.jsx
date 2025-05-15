import WalletCard from "./../Components/Wallet/WalletCard";
import TransactionTable from "./../Components/Wallet/TransactionTable";
import RechargeSection from "./../Components/Wallet/RechargeSection";
import { NavLink } from "react-router";

export default function Wallet() {
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
          <NavLink to="/home/wallet/addbankaccount">
          <button className="flex overflow-hidden cursor-pointer bg-red-100 py-2 px-3 rounded-lg gap-2 items-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e95660b64d80ec70fafcd1a47dbccf9a97e8de4?placeholderIfAbsent=true&apiKey=33cf6ee4ee4e4cdd8b24ad2c5832d456"
              alt=""
              className="object-contain shrink-0 w-6 aspect-square"
            />
            <span>إضافة حساب بنكي</span>
          </button></NavLink>
        </div>

        {/* محتوى الصفحة */}
        <div className="w-full flex flex-col gap-6 max-md:gap-5  p-2 sm:p-3">
          {/* بطاقات المحفظة */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            <WalletCard title="محفظة" balance={676} type="wallet" />
            <WalletCard
              title="الدفع عند الاستلام"
              balance={0.0}
              type="wallet"
            />
          </div>

          {/* قسم إعادة الشحن */}
          <RechargeSection />

          {/* جدول العمليات */}
          <div className="mt-2">
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
