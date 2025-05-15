/* eslint-disable react/prop-types */

const StatCard = ({
  title,
  value,
  change,
  period,
  icon,
  borderColor,
  textColor,
  showCurrency,
  borderOpacity = "",
}) => {
  return (
    <article className="w-full max-md:w-full max-md:mt-4">
      <div
        className={`flex gap-5 justify-between p-5 w-full bg-white rounded-md border ${borderColor} ${borderOpacity} border-solid shadow-md`}
      >
        <div className="flex flex-col items-start">
          {/* العنوان */}
          <h3 className={`text-lg font-bold leading-none ${textColor}`}>
            {title}
          </h3>

          {/* القيمة */}
          <p className={`mt-1 text-3xl font-bold ${textColor}`}>
            {value}
            {showCurrency && (
              <img
                src="/images/CurrencyIcone.svg"
                alt="Currency"
                className="inline-block ml-2 object-contain shrink-0 my-auto aspect-square w-[35px]"
              />
            )}
          </p>

          {/* التغيير والفترة */}
          <div className="flex gap-3.5 mt-3 text-sm leading-loose">
            <div className="flex gap-1 font-bold text-green-700 whitespace-nowrap">
              <img
                src="/images/ArrowIncress.svg"
                alt="Arrow Incress"
                className="object-contain shrink-0 my-auto w-3 aspect-square"
              />
              <span>{change}</span>
            </div>
            <p className="grow shrink text-gray-600">{period}</p>
          </div>
        </div>

        {/* الأيقونة */}
        <img
          src={icon}
          alt={title}
          className="object-contain shrink-0 self-start w-11 rounded-md aspect-square"
        />
      </div>
    </article>
  );
};

export default StatCard;
