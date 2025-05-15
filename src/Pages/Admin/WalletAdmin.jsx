import WalletCard from "./../../Components/Wallet/WalletCard";
import TransactionTable from "./../../Components/Wallet/TransactionTable";
import StatCard from "./../../Components/StatCard";
import { useState } from "react";
import PrintReportWallet from "../../Components/Modal/PrintReportWallet";

export default function WalletAdmin() {
  const arabicDate = new Date().toLocaleDateString("ar-SA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const [showPrintModal, setShowPrintModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // لمنع إعادة تحميل الصفحة
    // هنا ضع منطق إضافة المتجر (API call أو أي شيء آخر)

    // بعد نجاح الإضافة، عرض modal النجاح
    setShowPrintModal(true);
  };
  return (
    <div className="w-full max-sm:px-4 max-md:px-5 px-6 max-lg:px-8" dir="rtl">
      <div className="flex flex-col items-start mt-3 sm:mt-4 w-full max-w-screen-2xl mx-auto">
        {/* العنوان وشريط التنقل */}
        <div className="w-full mb-4">
          <div className=" mb-6 flex flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                إحصائيات اليوم
              </h2>
              <p className="text-sm text-gray-500 mt-1">{arabicDate}</p>
            </div>

            <button
              className="flex items-center cursor-pointer gap-2 px-4 py-3 text-base font-medium rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-xs"
              aria-label="طباعة التقرير"
              onClick={onSubmit}
            >
              <span>طباعة التقرير</span>
              <img
                src="/Icones/PrintReport.svg"
                alt="Print Report"
                className="w-5 h-5"
                aria-hidden="true"
              />
            </button>
            {showPrintModal && (
              <PrintReportWallet onClose={() => setShowPrintModal(false)} />
            )}
          </div>
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

          <div className="mt-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <StatCard
                title="عدد معاملات مدى"
                value="155"
                change="+5%"
                period="مقارنة باليوم السابق"
                icon="/Icones/Mada.svg"
                borderColor="border-indigo-500"
                textColor="text-indigo-500"
                currency="معاملة"
              />

              <StatCard
                title="عدد معاملات فيزا"
                value="254"
                change="5.39%"
                period="فترة التغيير"
                icon="/Icones/Visa.svg"
                borderColor="border-rose-400"
                textColor="text-rose-400"
                currency="معاملة"
              />

              <StatCard
                title="أقصى مبلغ تم تحصيله"
                value="32,218"
                change="+5%"
                period="مقارنة باليوم السابق"
                icon="/Icones/PriceMost.svg"
                borderColor="border-slate-400"
                textColor="text-slate-400"
                currency="ر.س"
              />
            </div>
          </div>
          {/* جدول العمليات */}
          <div className="mt-2">
            <TransactionTable />
          </div>
        </div>
      </div>
    </div>
  );
}
