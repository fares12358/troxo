const IconeW = ({ children, className = "" }) => {
  return (
    <div
      className={`flex justify-center items-center h-[38px] rounded-[30px] w-[38px] ${className}`}
      role="presentation"
    >
      {children}
    </div>
  );
};

export default IconeW;
