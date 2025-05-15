const statusStyles = {
  preparing: "text-sky-300",
  ready: "text-green-300",
  returned: "text-rose-400",
};

export const StatusBadge = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case "قيد التحضير":
        return statusStyles.preparing;
      case "جاهز للاستلام":
        return statusStyles.ready;
      case "مرتجع":
        return statusStyles.returned;
      case "ملغاة":
        return statusStyles.returned;
      default:
        return statusStyles.preparing;
    }
  };

  return (
    <span className={`text-xs font-bold ${getStatusClass()}`} role="status">
      {status}
    </span>
  );
};
