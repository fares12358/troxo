import { FilterButton, AddProductButton } from "../ActionButtons";

const classificationsData = [
  {
    name: "أحذية رياضية",
    mainCategory: "أحذية رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "عدة رياضية",
    mainCategory: "عدة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "قبعة رياضية",
    mainCategory: "قبعة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "أحذية رياضية",
    mainCategory: "أحذية رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "عدة رياضية",
    mainCategory: "عدة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "قبعة رياضية",
    mainCategory: "قبعة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "أحذية رياضية",
    mainCategory: "أحذية رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "عدة رياضية",
    mainCategory: "عدة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "قبعة رياضية",
    mainCategory: "قبعة رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
  {
    name: "أحذية رياضية",
    mainCategory: "أحذية رياضية",
    icone1: "/Icones/Delete.svg",
    icone2: "/Icones/Edit.svg",
  },
];

const ClassificationList = () => {
  return (
    <section className="flex flex-col px-7 py-5 mt-7 w-full bg-white rounded-2xl max-md:px-5">
      {/* Header Section */}
      <div className="flex flex-wrap  justify-between items-center w-full gap-4 mb-6">
        <div className="flex  items-center gap-4">
          <h2 className="text-2xl  font-bold text-gray-800">التصنيفات</h2>
          <div className="flex items-center gap-2 flex-row-reverse px-4 py-2 border border-gray-300 rounded-full">
            <img
              src="/Icones/search.svg"
              alt="ابحث عن تصنيف"
              className="object-contain w-3.5 aspect-square"
            />
            <input
              type="text"
              placeholder="...ابحث عن تصنيف"
              className="text-sm text-right text-gray-500 bg-transparent outline-none w-40"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <FilterButton />
          </div>
          <AddProductButton />
        </div>
      </div>

      {/* Products Table - Horizontal Layout */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-100 text-gray-700 font-semibold">
              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/MainCategory.svg"
                    alt="classification icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>اسم التصنيف</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px]">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/Icones/MainCategory.svg"
                    alt="Main classification icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span>التصنيف الرئيسي</span>
                </div>
              </th>

              <th className="p-3 min-w-[100px] text-center ">حذف</th>

              <th className="p-3 min-w-[100px] text-center">تعديل</th>
            </tr>
          </thead>
          <tbody>
            {classificationsData.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 font-medium text-center ">{product.name}</td>
                <td className="p-3 text-center">{product.mainCategory}</td>
                <td className="p-3 text-center">
                  <button className="px-3 py-1">
                    <img
                      src={product.icone1}
                      alt="Delete icon"
                      className="w-5 h-5 object-contain"
                    />
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button className="px-3 py-1">
                    <img
                      src={product.icone2}
                      alt="Edit icon"
                      className="w-5 h-5 object-contain"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap gap-5 justify-between items-start mt-4 ml-3.5 max-w-full w-[518px]">
        <div className="flex gap-6 text-sm leading-none text-black">
          <div className="my-auto basis-auto">عدد الصفوف في كل صفحة:</div>
          <select className="px-3 py-1 ml-2 border border-gray-300 rounded">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded  text-gray-700 ">
            <img
              src="/Icones/ArrowRight.svg"
              alt="arrow right"
              className="w-4"
            />
          </button>
          <button className="px-3 py-1 rounded bg-red-100 text-red-700 font-medium">
            1
          </button>
          <button className="px-3 py-1 rounded  text-gray-700 ">
            <img src="/Icones/ArrowLeft.svg" alt="arrow left" className="w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClassificationList;
