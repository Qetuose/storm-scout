//Example: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

import { WEATHER_API_KEY, WEATHER_API_URL } from "../utils/constants";

export async function getWeather() {
  const response = await fetch(
    `${WEATHER_API_URL}//London,UK?key=${WEATHER_API_KEY}`,
  );

  if (!response.ok) throw new Error("Failed getting WEATHER");

  const data = await response.json();

  return data;
}
