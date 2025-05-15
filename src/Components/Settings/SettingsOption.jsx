import IconeW from "./IconeW";

const SettingsOption = ({ icon, text, variant = "default" }) => {
  // تعريف الأنماط
  const styles = {
    bg: {
      default: "bg-red-100", // اللون الأساسي
      danger: "", // لون مختلف لتسجيل الخروج (أحمر فاتح)
    },
    text: {
      default: "text-slate-900",
      danger: "", // يمكنك إضافة bold إذا أردت
    },
  };

  return (
    <div className="flex gap-5 items-center hover:bg-gray-50 p-2 rounded-lg transition-colors">
      <div className={`text-base ${styles.text[variant]}`}>{text}</div>
      <IconeW className={`${styles.bg[variant]} transition-colors`}>
        <img src={icon} alt={text} className="w-5 h-5" />
      </IconeW>
    </div>
  );
};

export default SettingsOption;
