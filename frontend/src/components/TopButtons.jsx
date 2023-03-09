import React from "react";

export default function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "New York",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Berlin",
    },
    {
      id: 5,
      title: "Moscow",
    },
  ];

  return (
    <div className="flex tiems-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}
