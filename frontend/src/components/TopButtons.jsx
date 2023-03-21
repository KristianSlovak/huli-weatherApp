import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useCitiesContext } from "../hooks/useCitiesContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function TopButtons({ setQuery, city }) {
  const { dispatch } = useCitiesContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/cities/" + city._id, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.token}` },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_CITY", payload: json });
    }
  };
  return (
    <div className="flex items-center justify-around my-6">
      <div className="flex flex-row gap-2">
        <button
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
        <div className="flex flex-row items-center gap-1">
          <button onClick={handleClick}>
            <UilTrashAlt className="text-white w-5 h-5" />
          </button>
          <p className="text-white">|</p>
        </div>
      </div>
    </div>
  );
}
