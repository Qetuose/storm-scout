import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/ApiWeather";

export function useWeather(location) {
  const { isLoading, data: weather } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => getWeather(location),
  });

  return { isLoading, weather };
}
