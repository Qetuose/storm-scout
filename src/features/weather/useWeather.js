import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../../services/ApiWeather";

export function useWeather(geoLocation) {
  const { isLoading, data: weather } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather(geoLocation),
  });

  return { isLoading, weather };
}
