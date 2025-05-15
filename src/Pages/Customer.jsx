
import CustomerTable from './../Components/Customer/CustomerTable';
export default function Customer() {
  return (
    <div className="w-full px-4 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-3 md:mt-4 w-full">
        {/* العنوان وشريط التنقل */}
        <div className="w-full mb-6">
          <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase">
            متاجر
          </h1>

          <nav aria-label="Breadcrumb" className="mt-2">
            <ol className="flex items-center space-x-1 rtl:space-x-reverse text-xs md:text-sm text-neutral-500">
              <li className="">الرئيسية</li>
              <li aria-hidden="true" className="">
                &gt;
              </li>
              <li className="">الشحنات</li>
              <li aria-hidden="true" className="px-1">
                &gt;
              </li>
              <li aria-current="page" className="font-medium text-gray-800">
                العملاء
              </li>
            </ol>
          </nav>
        </div>

        {/* جدول العملاء */}
        <div className="w-full mt-4 md:mt-6 overflow-x-auto">
          <div className="min-w-[600px] md:min-w-full">
            <CustomerTable />
          </div>
        </div>
      </div>
    </div>
  );
}
