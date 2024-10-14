import { useState } from "react";
import Container from "./Container";
import ForecastTab from "./ForecastTab";
import Button from "./Button";
import "../index.css";

function Forecasts({ weather }) {
  const [amount, setAmount] = useState(72);

  const pos =
    amount === 72
      ? "translate-x-[-115%] translate-y-[-10%]"
      : "translate-x-[0%] translate-y-[-10%]";

  function getElements(arr) {
    return arr.slice(0, amount);
  }

  function getMostFrequentElements(arr) {
    const frequencyMap = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(frequencyMap).reduce((a, b) =>
      frequencyMap[a] > frequencyMap[b] ? a : b,
    );
  }

  function getAverage(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    //prettier-ignore
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = dayNames[date.getDay()];

    return `${day} ${month}, ${dayOfWeek}`;
  }

  function splitDataIntoDays(arr, hoursPerDay = 24) {
    const days = [];
    for (let i = 0; i < arr.length; i += hoursPerDay) {
      days.push(arr.slice(i, i + hoursPerDay));
    }
    return days;
  }

  function formatForecastData() {
    const daysCount = amount / 24;

    const temperaturePerDay = splitDataIntoDays(weather.hourly.temperature_2m);
    const weatherCodePerDay = splitDataIntoDays(weather.hourly.weather_code);

    return Array.from({ length: daysCount }, (_, dayIndex) => {
      const dayTemp = temperaturePerDay[dayIndex];
      const dayCode = weatherCodePerDay[dayIndex];

      return {
        day: dayIndex + 1,
        code: getMostFrequentElements(dayCode),
        tempNight: Math.floor(getAverage(dayTemp.slice(0, 12))),
        tempDay: Math.floor(getAverage(dayTemp.slice(12, 24))),
        date: formatDate(weather.hourly.time[dayIndex * 24]),
      };
    });
  }

  const forecastData = formatForecastData();
  console.log(forecastData);

  return (
    <Container gap={5}>
      <div className="flex items-center justify-between">
        <h2 className="flex self-center text-3xl text-whi">Forecasts</h2>
        <div className="flex items-center justify-between gap-4 rounded-lg bg-darkest p-1">
          <Button
            onClick={() => setAmount((prev) => (prev === 72 ? 168 : 72))}
            type="toggle"
          >
            <span className={amount === 72 ? "z-10 text-darkest" : ""}>
              3 days
            </span>
            <span className={amount === 168 ? "z-10 text-darkest" : ""}>
              7 days
            </span>
            <span
              className={`absolute right-0 top-0 ${pos} h-7 w-[3rem] rounded-lg bg-white transition-all duration-300`}
            />
          </Button>
        </div>
      </div>
      <div className="no-scrollbar flex h-[15rem] flex-col gap-2 overflow-auto">
        {forecastData.map((data) => (
          <ForecastTab data={data} key={data.day} />
        ))}
      </div>
    </Container>
  );
}

export default Forecasts;
