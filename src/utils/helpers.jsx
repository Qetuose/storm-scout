export function convertToCelcius(tempF) {
  // °C = (°F - 32) × 5/9
  const tempC = Math.ceil(Number((tempF - 32) * (5 / 9)));
  return tempC;
}
