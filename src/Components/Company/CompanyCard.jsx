import { NavLink } from "react-router";

function CompanyCard() {
  return (
    <article className="w-full bg-white rounded-2xl border border-solid border-pink-950/20 overflow-hidden">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row gap-4 md:gap-5 justify-between items-start md:items-center px-4 md:px-6 py-4 w-full bg-stone-50 shadow-[0px_2px_25px_rgba(0,0,0,0.13)]">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
          <img
            src="/images/SMSACompany.png"
            alt="SMSA logo"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="text-center sm:text-start">
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              SMSA
            </h2>
            <p className="mt-1 md:mt-3 text-sm text-neutral-500">
              ملاحظات إضافية
            </p>
          </div>
        </div>
        <NavLink to="/admin/company">
          <button
            className="flex gap-2 cursor-pointer items-center px-3 py-2 text-base font-semibold bg-red-100 rounded-md text-pink-950 hover:bg-red-200 transition-colors"
            aria-label="اقرأ المزيد عن SMSA"
          >
            <span>اخفاء التفاصيل</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </NavLink>
      </header>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        {/* تصميم متجاوب لجميع الشاشات */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {/* عمود الإحصاءات */}
          <div className="">
            <h3 className="text-lg text-center font-semibold text-black mb-4 md:mb-6">
              إحصائية
            </h3>
            <div className="flex flex-col gap-18 md:gap-8">
              {[
                "إجمالي الشحنات",
                "متوسط الوزن",
                "مبالغ الشحن",
                "أعلى الدول المرسلة",
                "الشحنات المرتجعة",
                "الشحنات المحلية",
                "أكثر العملاء تكرارًا",
                "متوسط وقت الشحن",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-base text-pink-950 h-8 flex items-center justify-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* عمود القيم */}
          <div className="">
            <h3 className="text-lg text-center font-semibold text-black mb-4 md:mb-6">
              قيمة
            </h3>
            <div className="flex flex-col gap-18 md:gap-8">
              <div className="text-lg font-semibold text-stone-900 h-8 flex items-center justify-center">
                1500 شحنة
              </div>
              <div className="text-lg font-semibold text-stone-900 h-8 flex items-center justify-center">
                2.5 كجم
              </div>
              <div className="text-lg font-semibold text-stone-900 h-8 flex items-center justify-center">
                $4500
              </div>
              <div className="text-lg font-semibold text-stone-900 h-8 flex items-center justify-center">
                المملكة العربية السعودية
              </div>
              <div className="h-8 flex items-center justify-center gap-2">
                <span className="text-lg font-semibold text-stone-900">10</span>
                <span className="text-sm text-black">الشحنات</span>
              </div>
              <div className="h-8 flex items-center justify-center gap-2">
                <span className="text-lg font-semibold text-stone-900">
                  1200
                </span>
                <span className="text-sm text-black">الشحنات</span>
              </div>
              <div className="text-lg font-semibold text-stone-900 h-8 flex items-center justify-center">
                العميل XYZ
              </div>
              <div className="text-base font-semibold text-zinc-500 h-8 flex items-center justify-center">
                3 أيام
              </div>
            </div>
          </div>

          {/* عمود الوصف */}
          <div>
            <h3 className="text-lg text-center font-semibold text-black mb-4 md:mb-6">
              وصف/تفاصيل
            </h3>
            <div className="flex flex-col gap-18 md:gap-8">
              {[
                "إجمالي عدد الشحنات خلال الفترة",
                "متوسط وزن الشحنة",
                "إجمالي رسوم الشحن المدفوعة",
                "الدولة التي تم إرسال أكبر عدد من الشحنات منها",
                "عدد الشحنات المرتجعة",
                "إجمالي عدد الشحنات المحلية",
                "العميل الذي لديه أكبر عدد من الشحنات",
                "متوسط الوقت الذي تستغرقه الشحنات للوصول",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-base text-center text-pink-950 h-8 flex items-center justify-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CompanyCard;
