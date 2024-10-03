import { useQuery } from "@tanstack/react-query";
import { fetchCurrentPosition } from "../../services/apiGeoLocation";

export function useCurrentPosition() {
  const { isLoading, data: currentPosition } = useQuery({
    queryKey: ["currentPosition"],
    queryFn: fetchCurrentPosition,
  });

  return { isLoading, currentPosition };
}
