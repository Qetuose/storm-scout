import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeWeather as changeWeatherApi } from "../../services/ApiWeather";

export function useChangeWeather() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: changeWeather } = useMutation({
    mutationFn: (city) => changeWeatherApi(city),
    onSuccess: (_, city) => {
      // Invalidate only the weather data for the specific city
      queryClient.invalidateQueries({ queryKey: ["weather", city] });
    },
  });

  return { isLoading, changeWeather };
}
