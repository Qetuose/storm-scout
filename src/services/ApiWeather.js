export async function getWeather(city) {
  const geoapifyApiKey = "ef4117597aa144e69f19c3fd358e6cd1";

  // Helper function to get weather data
  async function fetchWeatherData(latitude, longitude) {
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,rain,weather_code,visibility,wind_speed_80m,wind_gusts_10m,uv_index,temperature_30hPa&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto`,
    );
    if (!weatherResponse.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return weatherResponse.json();
  }

  // Helper function to reverse geocode coordinates
  async function reverseGeocode(lat, lon) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${geoapifyApiKey}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }
    const data = await response.json();
    const result = data.results[0];
    return {
      city: result.city || result.county,
      country: result.country,
    };
  }

  // Helper function to geocode a city name to coordinates
  async function geocodeCity(city) {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch geocoding data");
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
      throw new Error("Location not found");
    }
    const { latitude, longitude } = data.results[0];
    return { latitude, longitude };
  }

  try {
    let coords = { lat: "", lng: "" };
    let location = {};

    if (!city) {
      // Get user's current coordinates if no city is provided
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
      );
      coords.lat = position.coords.latitude;
      coords.lng = position.coords.longitude;

      // Reverse geocode to get the city and country name
      location = await reverseGeocode(coords.lat, coords.lng);
    } else {
      // Get coordinates using the city name
      const { latitude, longitude } = await geocodeCity(city);
      coords = { lat: latitude, lng: longitude };

      // Perform reverse geocoding to get the country (even if we already have the city)
      location = await reverseGeocode(latitude, longitude);
    }

    // Fetch weather data for the determined coordinates
    const weatherData = await fetchWeatherData(coords.lat, coords.lng);

    // Return weather data along with location info (city and country)
    return { ...weatherData, location };
  } catch (error) {
    console.error(error.message);
    throw new Error("Error retrieving weather data");
  }
}
