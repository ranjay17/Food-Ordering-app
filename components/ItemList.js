import React from "react";
import { CDN_URL } from "../common/common";
import {useDispatch} from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch()
  const handleAddItems = (food) =>{
    dispatch(addItem(food))
  }
  return (
    <div className="space-y-4">
      {item.map((food) => {
        const { id, name, price, imageId, description } = food.card.info;
        return (
          <div
            key={id}
            className="flex justify-between items-start gap-4 border-b border-gray-200 pb-4"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{name}</h3>
              <span className="text-sm text-gray-600 font-medium">
                ₹{price / 100 || food.card.info.defaultPrice / 100}
              </span>
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
            </div>
            <div>
              <img
                src={CDN_URL + imageId}
                alt={name}
                className="w-24 h-20 object-cover rounded-lg shadow"
              />
              <button
                onClick={()=>handleAddItems(food)}
                className="bg-white text-green-600 font-semibold text-sm border-gray-300 rounded-lg shadow-md px-4 py-2"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
