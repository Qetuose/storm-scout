export async function getWeather() {
  const location = "London";

  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
  );
  const geoData = await geoResponse.json();
  if (!geoData.results) throw new Error("Location not found");

  const { latitude, longitude, timezone } = geoData.results.at(0);

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_80m`,
  );
  const weatherData = await weatherResponse.json();

  const data = { ...weatherData, ...geoData.results.at(0) };

  return data;
}
