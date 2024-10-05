import Container from "../ui/Container";
import CurrentStats from "../ui/CurrentStats";
import WeatherTab from "../features/weather/weatherTab";
import { useWeather } from "../features/weather/useWeather";
import { useUnit } from "../contexts/UnitContext";

function Dashboard() {
  const { weather, isLoading } = useWeather();
  const { unit } = useUnit();
  if (isLoading) return <p>Loading...</p>;

  let curHourlyObject = [];
  for (let i = 0; i <= 23; i++) {
    curHourlyObject.push({
      time: weather.hourly.time.slice(0, 24)[i],
      temp: weather.hourly.temperature_2m.slice(0, 24)[i],
      code: weather.hourly.weather_code.slice(0, 24)[i],
    });
  }

  return (
    <Container>
      <CurrentStats />
      <div className="flex">
        {curHourlyObject.map((weather) => (
          <WeatherTab key={weather.time} weather={weather} unit={unit} />
        ))}
      </div>
    </Container>
  );
}

export default Dashboard;
