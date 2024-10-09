export async function getWeather(city) {
  let coords = { lat: "", lng: "" };
  if (!city) {
    //Get user's coords
    const position = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject),
    );
    coords = { lat: position.coords.latitude, lng: position.coords.longitude };

    //Reverse coords to a valid location
    const responseRevese = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${coords.lat}&lon=${coords.lng}&format=json&apiKey=ef4117597aa144e69f19c3fd358e6cd1`,
    );
    const dataRevese = await responseRevese.json();

    const location = {
      city: dataRevese.results.at(0).city
        ? dataRevese.results.at(0).city
        : dataRevese.results.at(0).county,
      country: dataRevese.results.at(0).country,
    };

    //Get the weather forecast
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_80m`,
    );
    const weatherData = await weatherResponse.json();

    const data = { ...weatherData, location };
    return data;
  }
}

export async function changeWeather(city) {
  console.log(city);
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
  );

  const geoData = await geoResponse.json();

  if (!geoData.results) throw new Error("Location not found");
  const { latitude, longitude } = geoData.results.at(0);

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_80m`,
  );
  const weatherData = await weatherResponse.json();

  const responseRevese = await fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=ef4117597aa144e69f19c3fd358e6cd1`,
  );
  const dataRevese = await responseRevese.json();
  const location = {
    city: dataRevese.results.at(0).city
      ? dataRevese.results.at(0).city
      : dataRevese.results.at(0).county,
    country: dataRevese.results.at(0).country,
  };

  console.log(location);
  const data = { ...weatherData, location };
  return data;
}
