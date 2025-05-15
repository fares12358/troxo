import ClassificationList from "../Components/Classification/ClassificationList";
export default function Classification() {
  return (
    <div className="w-full px-4 md:px-6" dir="rtl">
      <div className="flex flex-col items-start mt-10 max-md:mt-10 max-md:max-w-full">
        <h1 className="text-2xl font-black leading-tight text-gray-800 uppercase">
          متاجر
        </h1>
        <nav aria-label="Breadcrumb" className="mt-2 text-sm text-neutral-500">
          <ol className="flex gap-1">
            <li>الرئيسية</li>
            <li aria-hidden="true">&gt;</li>
            <li>التصنيفات</li>
            <li aria-hidden="true">&gt;</li>
            <li aria-current="page">التصنيفات</li>
          </ol>
        </nav>
        <ClassificationList />
      </div>
    </div>
  );
}
