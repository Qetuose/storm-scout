//Example: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YOUR_API_KEY

import { API_KEY, API_URL } from "../utils/constants";

export async function getWeather() {
  const response = await fetch(`${API_URL}//London,UK?key=${API_KEY}`);

  if (!response.ok) throw new Error("Failed getting WEATHER");

  const data = await response.json();

  return data;
}
