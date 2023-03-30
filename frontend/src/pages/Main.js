import TopButtons from "../components/TopButtons";
import AppBar from "../components/AppBar";
import Inputs from "../components/Inputs";
import TimeAndLocation from "../components/TimeAndLocation";
import TemperatureAndDetails from "../components/TemperatureAndDetails";
import Forecast from "../components/Forecast";
import getFormattedWeatherData from "../hooks/useWeatherData";
import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCitiesContext } from "../hooks/useCitiesContext";

function Main() {
  const { user } = useAuthContext();
  const { cities, dispatch } = useCitiesContext();
  const [query, setQuery] = useState({ q: "London" });
  const [units, setUnits] = useState({ units: "metric" });
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(
        process.env.REACT_APP_PROXY + "/api/cities",
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CITIES", payload: json });
      }
    };

    if (user) {
      fetchCities();
    }
  }, [user, dispatch]);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [user, query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const treshold = units.units === "metric" ? 20 : 60;
    if (weather.temp <= treshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
    <div>
      <AppBar setQuery={setQuery} />
      <div
        className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700
      to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
      >
        <div className="flex justify-between my-6">
          {cities &&
            cities.map((city) => (
              <div className="flex w-full justify-around items-center">
                <TopButtons key={city._id} city={city} setQuery={setQuery} />
                <p className=" text-white">|</p>
              </div>
            ))}
        </div>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather ? (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="Hourly Forcast" items={weather.hourly} />
            <Forecast title="Daily Forcast" items={weather.daily} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Main;
