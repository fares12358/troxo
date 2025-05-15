export default function OrderDetails() {
  // بيانات الطلب
  const orders = [
    {
      id: 1,
      customer: "مشاري الذبياني",
      store: "جولدن جول",
      product: "عدة الرياضيين",
      company: "/Icones/Company.png",
      price: "154",
      shipping: "147",
    },
    {
      id: 2,
      customer: "مشاري الذبياني",
      store: "جولدن جول",
      product: "عدة الرياضيين",
      company: "/Icones/Company.png",
      price: "254",
      shipping: "250",
    },
    {
      id: 3,
      customer: "مشاري الذبياني",
      store: "جولدن جول",
      product: "عدة الرياضيين",
      company: "/Icones/Company.png",
      price: "100",
      shipping: "100",
    },
  ];

  // حساب الإجمالي
  const total = orders.reduce(
    (sum, order) => sum + parseInt(order.price) + parseInt(order.shipping),
    0
  );

  return (
    <section className="w-full px-4 lg:px-8 py-4 lg:py-6 mt-4 lg:mt-8 bg-white rounded-lg lg:rounded-xl border-2 border-solid border-zinc-200 overflow-x-auto">
      {/* العنوان والتاريخ */}
      <div className="flex flex-col gap-2  lg:items-start  mb-4 lg:mb-6">
        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
          تفاصيل الشحنة
        </h3>
        <time className="text-xs lg:text-sm text-gray-400">25 مايو 2023</time>
      </div>

      {/* الجدول المعدل */}
      <div className="w-full">
        <table className="w-full border-collapse">
          {/* رأس الجدول المعدل */}
          <thead>
            <tr className="border-b-2 border-zinc-200 text-neutral-500">
              <th className="text-center py-3 px-2 lg:px-4">
                <div className="flex flex-col items-center justify-center gap-1 min-w-[120px]">
                  <div className="flex items-center gap-2">
                    {/* أيقونات الترتيب */}
                    <div className="flex flex-col items-center">
                      <img
                        src="/Icones/Sortup.svg"
                        alt="Sort ascending"
                        className="w-[18px] h-[10px] md:w-[22px] md:h-[12px] lg:w-[12px] lg:h-[12px]"
                      />
                      <img
                        src="/Icones/Sortdown.svg"
                        alt="Sort descending"
                        className="w-[12px] h-[10px] md:w-[16px] md:h-[12px] lg:w-[12px] lg:h-[12px] mt-[2px]"
                      />
                    </div>

                    {/* نص العميل مع الأيقونة */}
                    <div className="flex max-md:flex-col items-center gap-1 md:gap-2">
                      <img
                        src="/Icones/Profile.svg"
                        alt="client icon"
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                      <span className="text-xs md:text-sm lg:text-base whitespace-nowrap">
                        اسم العميل
                      </span>
                    </div>
                  </div>
                </div>
              </th>
              <th className="text-center py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg font-bold">
                <div className="flex max-md:flex-col items-center justify-center gap-1">
                  <img
                    src="/Icones/StoresIcone.svg"
                    alt="store icon"
                    className="w-4 h-4"
                  />
                  <span>اسم المتجر</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg font-bold">
                <div className="flex max-md:flex-col items-center justify-center gap-1">
                  <img
                    src="/Icones/box.svg"
                    alt="product icon"
                    className="w-4 h-4"
                  />
                  <span>المنتج</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg font-bold">
                <div className="flex max-md:flex-col items-center justify-center gap-1">
                  <img
                    src="/Icones/shipment.svg"
                    alt="quantity icon"
                    className="w-4 h-4"
                  />
                  <span>الشركة الشحن</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg font-bold">
                <div className="flex max-md:flex-col items-center justify-center gap-1">
                  <img
                    src="/Icones/price.svg"
                    alt="price icon"
                    className="w-4 h-4"
                  />
                  <span>السعر</span>
                </div>
              </th>
              <th className="text-center py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg font-bold">
                <div className="flex max-md:flex-col items-center justify-center gap-1">
                  <img
                    src="/Icones/shipment.svg"
                    alt="shipment icon"
                    className="w-4 h-4"
                  />
                  <span>تكلفة الشحن</span>
                </div>
              </th>
            </tr>
          </thead>

          {/* جسم الجدول المعدل */}
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index !== orders.length - 1 ? "border-b border-zinc-200" : ""
                }`}
              >
                <td className="py-3 px-2 text-center lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800">
                  {order.customer}
                </td>
                <td className="py-3 px-2 text-center lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800">
                  {order.store}
                </td>
                <td className="py-3 px-2 text-center lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800">
                  {order.product}
                </td>
                <td className="py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800 text-center">
                  <div className="flex items-center justify-center">
                    <img
                      src={order.company}
                      alt="company icon"
                      className="w-8 h-8"
                    />
                  </div>
                </td>
                <td className="py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800">
                  <div className="flex items-center justify-center">
                    <span>{order.price}</span>
                    <img
                      src="/images/CurrencyIcone.svg"
                      alt="ريال"
                      className="w-3 lg:w-4 ml-1"
                    />
                  </div>
                </td>
                <td className="py-3 px-2 lg:px-4 text-sm lg:text-base xl:text-lg text-gray-800">
                  <div className="flex items-center justify-center">
                    <span>{order.shipping}</span>
                    <img
                      src="/images/CurrencyIcone.svg"
                      alt="ريال"
                      className="w-3 lg:w-4 ml-1"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* الإجمالي */}
      <div className="flex items-center justify-between lg:justify-end gap-4 lg:gap-6 mt-6 lg:mt-8">
        <h4 className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-800">
          الإجمالي
        </h4>
        <div className="flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-red-300 rounded-lg lg:rounded-xl">
          <span className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
            {total}
          </span>
          <img
            src="/images/CurrencyIcone.svg"
            alt="ريال"
            className="w-5 lg:w-6 xl:w-7"
          />
        </div>
      </div>
    </section>
  );
}
