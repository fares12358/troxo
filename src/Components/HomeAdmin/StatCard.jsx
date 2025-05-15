import PropTypes from "prop-types";

const StatCard = ({
  title,
  amount,
  Picture,
  icon,
  className = "",

  unit = "",
  loading = false,
}) => {
  // ألوان وأنماط حسب الحالة

  // حالة التحميل
  if (loading) {
    return (
      <div
        className={`animate-pulse flex flex-col p-6 w-full bg-gray-100 rounded-lg ${className}`}
      >
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-8 h-8 bg-gray-200 rounded"></div>
          <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
          <div className="ml-auto w-6 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col p-6 w-full bg-red-50 rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-200 ${className}`}
      aria-labelledby={`statcard-${title.replace(/\s+/g, "-")}`}
    >
      <span
        id={`statcard-${title.replace(/\s+/g, "-")}`}
        className="text-xs font-medium text-gray-500"
      >
        {title}
      </span>

      <div className="flex items-center gap-2 mt-2">
        {Picture && (
          <img
            src={Picture}
            alt={title}
            className="w-7 h-7 object-contain"
            aria-hidden="true"
          />
        )}

        <div className="flex  items-center gap-1">
          <span className="text-base font-semibold  text-gray-800">
            {amount}
          </span>

          {unit && (
            <span className="text-xs font-medium text-gray-500">{unit}</span>
          )}
        </div>

        {icon && (
          <img
            src={icon}
            alt="currency icon"
            className="w-5 h-5 object-contain ml-auto opacity-80"
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Picture: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  currency: PropTypes.string,
  unit: PropTypes.string,
  trend: PropTypes.oneOf(["up", "down", "neutral"]),
  loading: PropTypes.bool,
};

StatCard.defaultProps = {
  trend: "neutral",
  loading: false,
};

export default StatCard;
