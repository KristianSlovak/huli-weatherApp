import React from "react";
import { formatToLocalTime } from "../hooks/weatherData";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCitiesContext } from "../hooks/useCitiesContext";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  const { user } = useAuthContext();
  const { dispatch } = useCitiesContext();

  // const handleClick = async () => {
  //   if (!user) {
  //     return;
  //   }

  //   const response = await fetch("/api/cities/", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${user.token}` },
  //   });
  //   const json = await response.json();

  //   if (response.ok) {
  //     dispatch({ type: "ADD_CITY", payload: json });
  //   }
  // };

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3 gap-3">
        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
        <button className="text-white">
          <UilPlusCircle></UilPlusCircle>
        </button>
      </div>
    </div>
  );
}

export default TimeAndLocation;
