import { useState } from "react";

function QuantityBox() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex justify-between gap-10 items-center p-2 bg-white rounded-lg border border-neutral-400">
      <button
        className="flex justify-center items-center w-7 h-7 bg-red-50 rounded-lg"
        onClick={() => setQuantity(Math.max(0, quantity - 1))}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="text-lg md:text-xl font-bold">{quantity}</span>
      <button
        className="flex justify-center items-center w-7 h-7 bg-red-50 rounded-lg"
        onClick={() => setQuantity(quantity + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantityBox;
