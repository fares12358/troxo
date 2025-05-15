/* eslint-disable react/prop-types */

export default function StatCardStore({
  title,
  value,
  currency,
  change,
  icon,
  isPositive = true,
}) {
  return (
    <article className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-between items-start p-5 w-full font-semibold bg-white border border-red-400 rounded shadow-md">
      <div className="flex flex-col items-start ">
        <h3 className="text-lg text-gray-800">{title}</h3>
        <p className="mt-3 flex  items-center gap-1 text-2xl text-black">
          {" "}
          {currency && (
            <img
              src="/images/CurrencyIcone.svg"
              alt="Currency"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          )}
          {value}
        </p>
        <div
          className={`flex items-center gap-1 mt-3 text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          <img
            src={
              isPositive
                ? "https://cdn.builder.io/api/v1/image/assets/TEMP/e5b4e4d7ab059603a4e9e90dc2b874db8495225d?placeholderIfAbsent=true&apiKey=e1766207373343d5b51643e9485c07fc"
                : "https://cdn.builder.io/api/v1/image/assets/TEMP/e9b03aff6578b1e08a2fa113776890cdda9b487a?placeholderIfAbsent=true&apiKey=e1766207373343d5b51643e9485c07fc"
            }
            alt=""
            className="object-contain w-4 h-4"
          />
          <span>{change}</span>
        </div>
      </div>
      {icon && (
        <img
          src={icon}
          alt="Icon"
          className="object-contain w-8 h-8 mt-4 md:mt-0 self-end"
        />
      )}
    </article>
  );
}
