import { WEATHER_API_KEY, WEATHER_API_URL } from "../utils/constants";
//Example: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

export async function getWeather({ country, city }) {
  const response = await fetch(
    `${WEATHER_API_URL}//${country},${city}?key=${WEATHER_API_KEY}`,
  );

  if (!response.ok) throw new Error("Failed getting WEATHER");

  const data = await response.json();

  return data;
}
