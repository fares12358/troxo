/* eslint-disable react/prop-types */

export const Button = ({
  children,
  variant = "",
  className = "",
  icon,
  ...props
}) => {
  const baseClasses =
    "flex overflow-hidden flex-col justify-center items-center py-1 rounded-md text-base font-medium tracking-tight leading-none text-center";
  const variantClasses = {
    secondary: "bg-red-100 text-pink-950",
    primary: "border border-solid border-pink-950",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <div className="flex justify-center  overflow-hidden gap-1 items-start px-5 py-2.5">
        {icon && (
          <img src={icon} alt="" className="object-contain w-6 aspect-square" />
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;
