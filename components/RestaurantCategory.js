import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleItem = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div
        className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer hover:bg-gray-200"
        onClick={handleItem}
      >
        <span className="font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform ${
            showItem ? "rotate-180" : "rotate-0"
          }`}
        >
          ⬇️
        </span>
      </div>

      {showItem && (
        <div className="px-4 py-3 bg-white">
          <ItemList item={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
