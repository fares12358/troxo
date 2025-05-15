/* eslint-disable react/prop-types */

const IconWrapper = ({ icon, svg }) => {
  return (
    <div className="relative w-11 h-11 max-sm:w-9 max-sm:h-9">
      <div
        className="flex justify-center items-center w-11 h-11 bg-red-100 rounded-[30px] max-sm:w-9 max-sm:h-9"
        role="img"
        aria-label={`${icon} icon`}
      >
        <div>
          <img src={svg} alt={icon} />
        </div>
      </div>
    </div>
  );
};

export default IconWrapper;
