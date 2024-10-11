import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/ApiWeather";

export function useWeather(location) {
  const { isLoading, data: weather } = useQuery({
    queryKey: ["weather", location], // Trigger new fetch when location changes
    queryFn: () => getWeather(location), // Fetch weather data for current location
  });

  return { isLoading, weather };
}
