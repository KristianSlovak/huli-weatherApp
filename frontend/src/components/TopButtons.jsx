import { UilTrashAlt } from "@iconscout/react-unicons";
import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCitiesContext } from "../hooks/useCitiesContext";

export default function TopButtons({ city, setQuery }) {
  const { dispatch } = useCitiesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch(
      process.env.REACT_APP_PROXY + "/api/cities/" + city._id,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CITY", payload: json });
    }
  };
  return (
    <div className="flex items-center gap-1">
      <button
        className="text-white text-base md:text-lg font-medium"
        onClick={() => setQuery({ q: city.cityName })}
      >
        {city.cityName}
      </button>
      <button onClick={handleClick}>
        <UilTrashAlt className="text-white w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
}
