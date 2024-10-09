import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/ApiWeather";

export function useWeather(city) {
  const { isLoading, data: weather } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(city),
  });

  return { isLoading, weather };
}
