import TopButtons from "../components/TopButtons";
import AppBar from "../components/AppBar";
import Inputs from "../components/Inputs";
import TimeAndLocation from "../components/TimeAndLocation";
import TemperatureAndDetails from "../components/TemperatureAndDetails";
import Forecast from "../components/Forecast";
import getFormattedWeatherData from "../hooks/weatherData";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Main() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  const [query, setQuery] = useState({ q: cities[0].title });
  const [units, setUnits] = useState({ units: "metric" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const treshold = units.units === "metric" ? 20 : 60;
    if (weather.temp <= treshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div>
      <AppBar />
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700
      to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} cities={cities} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forecast title="Hourly Forcast" items={weather.hourly} />
            <Forecast title="Daily Forcast" items={weather.daily} />
          </div>
        )}
        <ToastContainer autoClose={4000} theme="colored" newestOnTop={true} />
      </div>
    </div>
  );
}

export default Main;
