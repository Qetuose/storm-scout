import { useCallback, useEffect, useState } from "react";
import Tabs from ".//Tabs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function WeatherTab({ weather }) {
  const [weatherTabs, setWeatherTabs] = useState([]);
  const [sliderStart, setSliderStart] = useState(0);
  const [sliderEnd, setSliderEnd] = useState(7);

  const populateTabs = useCallback(() => {
    setWeatherTabs([]);
    for (let i = sliderStart; i <= sliderEnd; i++) {
      setWeatherTabs((tab) => [
        ...tab,
        {
          time: weather.hourly.time.slice(0, 24)[i],
          temp: weather.hourly.temperature_2m.slice(0, 24)[i],
          code: weather.hourly.weather_code.slice(0, 24)[i],
        },
      ]);
    }
  }, [
    sliderStart,
    sliderEnd,
    weather.hourly.time,
    weather.hourly.temperature_2m,
    weather.hourly.weather_code,
  ]);

  useEffect(() => {
    populateTabs();
  }, [populateTabs]);

  function handleButtonLeft() {
    setSliderStart((start) => start - 8);
    setSliderEnd((end) => end - 8);
  }
  function handleButtonRight() {
    setSliderStart((start) => start + 8);
    setSliderEnd((end) => end + 8);
  }

  return (
    <div className="flex items-center justify-between px-6 text-whi">
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark"
        disabled={sliderStart - 8 <= -1}
        onClick={handleButtonLeft}
      >
        <HiOutlineChevronLeft />
      </button>
      {weatherTabs.map((weather, i) => (
        <Tabs key={i} weather={weather} />
      ))}
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full bg-dark"
        disabled={sliderEnd + 8 >= 24}
        onClick={handleButtonRight}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  );
}

export default WeatherTab;
