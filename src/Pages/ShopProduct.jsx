
import { ProductList } from './../Components/Product/ProductList';
export default function ShopProduct() {
  return (
    <div className="w-full px-4 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-6 md:mt-8 lg:mt-10">
        <div className="w-full md:mr-4">
          <h1 className="text-xl font-black text-gray-800 uppercase max-lg:mr-[12%] sm:text-2xl">
            منتجات
          </h1>
          <nav aria-label="breadcrumb" className="mt-2">
            <ol className="flex flex-wrap max-lg:mr-[12%]  items-center gap-x-2 text-sm text-neutral-500 sm:text-base">
              <li className="flex items-center ">
                <span className="hover:text-gray-700">الرئيسية</span>
                <li aria-hidden="true">&gt;</li>
              </li>
              <li className="flex items-center">
                <span className="hover:text-gray-700">المتاجر</span>
                <li aria-hidden="true">&gt;</li>
              </li>
              <li aria-current="page" className="text-gray-800 font-medium">
                المنتج
              </li>
            </ol>
          </nav>
        </div>

        <div className=" w-full mt-4  max-lg:w-[80%] max-sm:w-full max-md:w-[90%] max-md:mr-[10%] max-lg:mr-[20%] max-sm:mr-0 ">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
