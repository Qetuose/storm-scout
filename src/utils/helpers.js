export function convertTofahrenheit(temp) {
  // °F = °C×(9/5)+32
  const tempF = Math.ceil(Number(temp * (9 / 5) + 32));
  return tempF;
}

export function getWeatherIcon(wmoCode, animated = false) {
  const icons = new Map([
    [[0], animated ? "sunny" : "800"],
    [[1, 2], animated ? "partlycloudy" : "801"],
    [[3], animated ? "cloudy" : "802"],
    [[45, 48], animated ? "fog" : "741"],
    [[51, 56, 61, 66, 80], animated ? "rainy" : "500"],
    [[53, 55, 63, 65, 57, 67, 81, 82], animated ? "pouring" : "502"],
    [[71, 73, 75, 77, 85, 86], animated ? "snowy" : "601"],
    [[95], animated ? "lightning" : "210"],
    [[96, 99], animated ? "lightning-rainy" : "201"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";

  return icons.get(arr);
}

export function formatTemp(temp, curUnit) {
  let formatedTemp;
  if (curUnit === "C" && Number(temp) > 0)
    formatedTemp = +temp >= 0 ? `+${temp + curUnit}` : `-${temp + curUnit}`;
  if (curUnit === "F" && convertTofahrenheit(temp) > 0)
    formatedTemp =
      convertTofahrenheit(temp) >= 0
        ? `+${convertTofahrenheit(temp) + curUnit}`
        : `-${convertTofahrenheit(temp) + curUnit}`;

  return formatedTemp;
}

export function formatTime(time) {
  let formatedTime = time.slice(11).slice(0, 2);
  if (Number(formatedTime) === 0) formatedTime = 12;
  if (Number(formatedTime <= 12)) formatedTime = formatedTime + "AM";
  else formatedTime = formatedTime - 12 + "PM";

  return formatedTime;
}
