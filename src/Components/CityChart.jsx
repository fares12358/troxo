export default function CityChart() {
  return (
    <aside className="w-full  lg:ml-5 max-md:mt-4">
      <div className="flex flex-col p-4 bg-gray-50 rounded-lg border-2 border-solid border-zinc-200 shadow-sm">
        {/* العنوان */}
        <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-slate-700">
          <img
            src="/images/CityIcone.svg"
            alt="City Icon"
            className="w-8 h-8"
          />
          <h3>مدينة مشهورة</h3>
        </div>

        {/* الإحصائيات */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">جاكرتا</p>
              <p className="text-2xl sm:text-3xl font-bold text-rose-400">
                43%
              </p>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 text-xs text-white bg-red-400 rounded">
              <img
                src="/images/ArrowUp.svg"
                alt="Arrow Up"
                className="w-3.5 h-3.5"
              />
              <span>شهر</span>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold text-red-400">
              إجمالي المدن
            </h4>
            <div className="text-slate-700">
              <p className="text-2xl sm:text-3xl font-bold">111</p>
              <p className="text-xs">+5% مقارنة بالشهر الماضي</p>
            </div>
          </div>
        </div>

        {/* الرسوم البيانية */}
        <div className="flex justify-center gap-2.5 mt-8 items-end">
          {/* العمود الأول */}
          <div className="w-[55px] bg-red-400 h-[100px] sm:h-[110px] md:h-[120px] lg:h-[142px]" />

          {/* العمود الثاني */}
          <div className="w-[55px] bg-rose-400 h-[200px] sm:h-[220px] md:h-[250px] lg:h-[347px]" />

          {/* العمود الثالث */}
          <div className="w-[55px] bg-red-400 h-[120px] sm:h-[130px] md:h-[150px] lg:h-[165px]" />

          {/* العمود الرابع */}
          <div className="w-[55px] bg-red-400 h-[150px] sm:h-[160px] md:h-[180px] lg:h-[217px]" />
        </div>
      </div>
    </aside>
  );
}
