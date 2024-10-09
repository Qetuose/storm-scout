import Container from "../ui/Container";
import CurrentStats from "../features/weather/CurrentStats";
import WeatherTab from "../features/weather/WeatherTab";
import { useWeather } from "../features/weather/useWeather";
import Map from "../ui/Map";
import { useLocation } from "../contexts/LocationContext";

function Dashboard() {
  const { location } = useLocation();
  const { weather, isLoading } = useWeather(location);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Container>
        <CurrentStats />
        <WeatherTab weather={weather} />
      </Container>
      <Map />
    </>
  );
}

export default Dashboard;
