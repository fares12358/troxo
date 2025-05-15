/* eslint-disable react/prop-types */
const ShipmentTableRow = ({
  customerName,
  product,
  quantity,
  price,
  highlighted,
  onClick,
}) => {
  return (
    <div
      className={`grid grid-cols-12 gap-2 px-4 py-3 items-center ${
        highlighted ? "bg-gray-50" : ""
      } cursor-pointer`}
      onClick={onClick}
    >
      {" "}
      <div className="col-span-3 flex items-center">
        <span className="text-gray-800">{customerName}</span>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <span className="text-gray-700">{product}</span>
      </div>
      <div className="col-span-2 flex items-center justify-center ">
        <span className="text-gray-700">{quantity}</span>
      </div>
      <div className="col-span-2 flex items-center justify-center ">
        <span className="text-gray-700 font-medium">{price}</span>
      </div>
      <div className="col-span-3 flex items-center justify-center gap-2">
        <button className="p-1 text-gray-500 hover:text-gray-700">
          <img src="/Icones/Edit.svg" alt="Edit icone" className="w-6" />
        </button>
        <button className="p-1 text-gray-500 hover:text-gray-700">
          <img src="/Icones/Delete.svg" alt="delete icone" className="w-6" />
        </button>
      </div>
    </div>
  );
};

export default ShipmentTableRow;
