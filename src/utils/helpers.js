export function convertTofahrenheit(temp) {
  // °F = °C×(9/5)+32
  const tempF = Math.ceil(Number(temp * (9 / 5) + 32));
  return tempF;
}

export function getWeatherIcon(wmoCode, animated = false) {
  const icons = new Map([
    [[0], animated ? "sunny" : ""],
    [[1, 2], animated ? "partlycloudy" : ""],
    [[3], animated ? "cloudy" : ""],
    [[45, 48], animated ? "fog" : ""],
    [[51, 56, 61, 66, 80], animated ? "rainy" : ""],
    [[53, 55, 63, 65, 57, 67, 81, 82], animated ? "pouring" : ""],
    [[71, 73, 75, 77, 85, 86], animated ? "snowy" : ""],
    [[95], animated ? "lightning" : ""],
    [[96, 99], animated ? "lightning-rainy" : ""],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

export function formatTemp(temp, curUnit) {
  let formatedTemp;
  if (curUnit === "C" && Number(temp) > 0) formatedTemp = `+${temp + curUnit}`;
  if (curUnit === "F" && convertTofahrenheit(temp) > 0)
    formatedTemp = `+${convertTofahrenheit(temp) + curUnit}`;

  return formatedTemp;
}
