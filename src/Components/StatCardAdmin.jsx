/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const StatCardAdmin = ({
  title,
  value,
  change,
  period,
  iconSrc,
  currency,
  textColor = "text-indigo-500",
  borderColor,
}) => {
  // تحديد ما إذا كان التغيير إيجابيًا أو سلبيًا لتغيير لون السهم
  const isPositiveChange = change?.startsWith("+");
  const changeColor = "text-green-600";
  const arrowIcon = "/images/ArrowIncress.svg";

  return (
    <article
      className={`flex border ${borderColor} max-md:flex-col-reverse flex-row gap-4 justify-between p-5 w-full bg-white rounded-lg  shadow-sm hover:shadow-md transition-shadow duration-200`}
      role="region"
      aria-labelledby={`stat-card-${title.replace(/\s+/g, "-")}`}
    >
      <div className="flex-1 ">
        <h3
          id={`stat-card-${title.replace(/\s+/g, "-")}`}
          className={`text-sm md:text-base font-semibold ${textColor}`}
        >
          {title}
        </h3>
        <p className={`mt-2 text-2xl md:text-3xl font-bold ${textColor}`}>
          {value}
          {currency && (
            <img
              src={currency}
              alt="Currency"
              className="inline-block ml-2 object-contain shrink-0 my-auto aspect-square w-[35px]"
            />
          )}
        </p>

        {(change || period) && (
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs md:text-sm">
            {change && (
              <div
                className={`flex items-center gap-1 font-medium ${changeColor}`}
              >
                <img
                  src={arrowIcon}
                  alt={isPositiveChange ? "زيادة" : "نقصان"}
                  className="w-3 h-3"
                  aria-hidden="true"
                />
                <span>{change}</span>
              </div>
            )}
            {period && <p className="text-gray-500">{period}</p>}
          </div>
        )}
      </div>

      {iconSrc && (
        <img
          src={iconSrc}
          alt={`رمز ${title}`}
          className="w-10 h-10 object-contain "
        />
      )}
    </article>
  );
};

StatCardAdmin.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.string,
  period: PropTypes.string,
  iconSrc: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default StatCardAdmin;
