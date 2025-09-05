import { useParams } from "react-router-dom";
import useRestaurantMenu from "../common/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <p>Loading...</p>;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">{name}</h1>
      <p className="text-gray-600 font-medium mb-6">
        {cuisines.join(", ")} • {costForTwoMessage}
      </p>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <RestaurantCategory key={index} data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
