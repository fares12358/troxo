import { FilterButton, ExcelButton, AddProductButton } from "../ActionButtons";

const productData = [];

const EmptyProduct = () => {
  return (
    <section
      className="flex flex-col w-full  bg-white rounded-2xl p-4 sm:p-6"
      dir="rtl"
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 w-full mb-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
            المنتجات
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="...ابحث عن المنتج"
              className="w-full py-2 pl-4 pr-10 text-sm text-right border border-gray-300 rounded-full focus:ring-2 focus:ring-red-300 focus:border-transparent sm:w-64"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex gap-2">
            <FilterButton />
            <ExcelButton />
          </div>
          <AddProductButton />
        </div>
      </div>

      {/* Info Message */}
      <p className="text-sm text-right text-pink-700 mb-6 sm:text-base">
        .تتيح لك تروكسو حفظ منتجاتك لتسهيل إدارة الشحنات. لضمان دقة حساب تكاليف
        الشحن، يرجى الحرص على دقة إدخال الأبعاد ووزن المنتج
      </p>

      {/* Responsive Table */}
      <div className="border  border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full  divide-y divide-gray-200">
            <thead className="bg-red-100">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-3 py-3  text-xs font-medium text-gray-700 text-center uppercase tracking-wider min-w-[150px]"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/box.svg"
                      alt="product name"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base ">اسم المنتج</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/length.svg"
                      alt="product length"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الطول</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/weight.svg"
                      alt="product weight"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الوزن</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/height.svg"
                      alt="product height"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base ">ارتفاع</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/width.svg"
                      alt="product width"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">عرض</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/price.svg"
                      alt="product price"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">السعر</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <div className="flex justify-center items-center gap-1">
                    <img
                      src="/Icones/Quantity.svg"
                      alt="product quantity"
                      className="object-contain w-4 h-4 aspect-square"
                    />
                    <span className="font-bold text-base">الكمية</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-xs font-medium text-gray-700 text-center uppercase tracking-wider"
                >
                  <span className="sr-only">إجراءات</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.length > 0 ? (
                productData.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    {/* خلايا الجدول العادية */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <img
                        src="/images/EmptyProduct.png"
                        alt="لا يوجد منتجات"
                        className="w-40 h-40 object-contain"
                      />
                      <div className="text-xl font-semibold text-pink-950">
                        أضف منتجًا للعرض
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center justify-between mt-6 space-y-4 sm:flex-row sm:space-y-0">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-gray-700">عدد الصفوف في كل صفحة:</p>
          <select className="text-sm bg-gray-300 p-2  focus:ring-red-500 focus:border-red-500">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <img src="/Icones/ArrowRight.svg" alt="السابق" />
          </button>
          <button className="px-3 py-1 bg-gray-100 text-black rounded-md text-sm font-medium">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            <img src="/Icones/ArrowLeft.svg" alt="تالي" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmptyProduct;
