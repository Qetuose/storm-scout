import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/ApiWeather";

export function useWeather() {
  const { isLoading, data: weather } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });

  return { isLoading, weather };
}
