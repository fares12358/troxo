/* eslint-disable react/prop-types */
import { IconWrapper } from "./IconWrapper";

export const MenuItem = ({
  text,
  icon,
  textColor,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center flex-row-reverse gap-2 ${className}`}
    >
      <span className={`text-sm font-bold ${textColor}`}>{text}</span>
      <IconWrapper svgContent={icon} className="w-5 h-5" />
    </button>
  );
};
