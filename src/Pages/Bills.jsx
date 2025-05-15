
import InvoicesTable from './../Components/Bills/InvoicesTable';
export default function Bills() {
  return (
    <div className="w-full  px-4 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-3 md:mt-4 w-full max-w-screen-2xl mx-auto">
        {/* العنوان وشريط التنقل */}
        <div className="w-full mb-6">
          <h1 className="text-xl md:text-2xl font-black text-gray-800 uppercase">
            فواتيري
          </h1>

          <nav aria-label="Breadcrumb" className="mt-2">
            <ol className="flex items-center space-x-1 rtl:space-x-reverse text-xs md:text-sm text-neutral-500">
              <li className="">الرئيسية</li>
              <li aria-hidden="true" className="">
                &gt;
              </li>
              <li className="">فواتيري</li>
            </ol>
          </nav>
        </div>

        {/* جدول الفواتير */}
        <div className="w-full mt-2 md:mt-4">
          <InvoicesTable />
        </div>
      </div>
    </div>
  );
}
