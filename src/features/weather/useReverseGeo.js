import { useQuery } from "@tanstack/react-query";
import { fetchReversedPosition } from "../../services/apiGeoLocation";

export function useReverseGeo(position) {
  const { isLoading, data: reverseGeo } = useQuery({
    queryKey: ["reverseGeo"],
    queryFn: () => fetchReversedPosition(position.latitude, position.longitude),
  });

  return { isLoading, reverseGeo };
}
