import OrderDetails from "../Components/OrderDetails";
import PaymentSection from "../Components/PaymentSection";

export default function ShipmentDetails() {
 
  return (
    <section className="w-full mb-4 px-4 md:px-6" dir="rtl">
      <div className="flex flex-col items-end  mt-6">
        {/* العنوان والمسار */}
        <div className="w-full px-4 lg:px-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-800 uppercase">
            الشحنات
          </h2>
          <nav
            aria-label="مسار الصفحة"
            className="mt-2 text-sm md:text-base lg:text-lg text-neutral-500"
          >
            <ol className="flex items-center space-x-2 rtl:space-x-reverse">
            <li className="flex items-center ">
                <span className="hover:text-gray-700">الرئيسية</span>
                <li aria-hidden="true">&gt;</li>
              </li>
              <li className="flex items-center ">
                <span className="hover:text-gray-700">الشحنات</span>
                <li aria-hidden="true">&gt;</li>
              </li>
              <li className="flex items-center ">
                <span className="hover:text-gray-700">اضافة شحنة</span>
                <li aria-hidden="true">&gt;</li>
              </li>
              <li className="flex items-center ">
                <span className="hover:text-gray-700">تاكيد الدفع</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="w-full mt-6 lg:mt-8 p-6 lg:p-8 xl:p-10 bg-white rounded-xl lg:rounded-2xl shadow-sm">
          {/* مكونات الطلب والدفع */}
          <div className="mt-8 lg:mt-10">
            <OrderDetails />
            <PaymentSection />
          </div>
        </div>
      </div>
    </section>
  );
}
