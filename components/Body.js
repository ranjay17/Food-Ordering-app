import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../common/common";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleTopRatedRestaurant = () => {
    const topRestaurant = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilterRestaurant(topRestaurant);
  };

  const handleSearchRestaurant = () => {
    const searchedRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(searchedRestaurant);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-6 py-4">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-6">
        <div className="flex gap-2 w-full md:w-1/2">
          <input
            type="text"
            value={searchText}
            placeholder="Search for restaurants..."
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearchRestaurant}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={handleTopRatedRestaurant}
          className="px-5 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
             <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
