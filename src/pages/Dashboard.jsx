import Container from "../ui/Container";
import CurrentStats from "../ui/CurrentStats";
import WeatherTab from "../features/weather/WeatherTab";
import { useWeather } from "../features/weather/useWeather";
import Map from "../ui/Map";

function Dashboard() {
  const { weather, isLoading } = useWeather();

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
