import Container from "../ui/Container";
import CurrentStats from "../features/weather/CurrentStats";
import WeatherTab from "../features/weather/WeatherTab";
import Map from "../ui/Map";
import { useWeather } from "../features/weather/useWeather";
import { useLocation } from "../contexts/LocationContext";
import Overview from "../ui/Overview";
import Forecasts from "../ui/Forecasts";

function Dashboard() {
  const { location } = useLocation(); // Get current location from context
  const { isLoading, weather } = useWeather(location); // Pass location to useWeather

  if (isLoading) return <p>Loading</p>;

  return (
    <>
      <Container>
        <CurrentStats weather={weather} />
        <WeatherTab weather={weather} />
      </Container>
      <Map />
      <Overview weather={weather} />
      <Forecasts weather={weather} />
    </>
  );
}

export default Dashboard;
