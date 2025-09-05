
import { CDN_URL } from "../common/common";

const RestaurantCard = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 cursor-pointer">
      <img
        src={CDN_URL + props.resData.info.cloudinaryImageId}
        alt="res-logo"
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold text-gray-800 truncate">
        {props.resData.info.name}
      </h3>
      <h4 className="text-sm text-gray-600 truncate">
        {props.resData.info.cuisines.join(", ")}
      </h4>
      <div className="mt-2 text-sm text-gray-700 space-y-1">
        <h4 className="font-medium">{props.resData.info.avgRating} ⭐</h4>
        <h4>{props.resData.info.costForTwo}</h4>
        <h4 className="text-gray-500">
          {props.resData.info.sla.deliveryTime} min delivery
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
