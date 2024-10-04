import { REVERSE_GEO_API_KEY, REVERSE_GEO_API_URL } from "../utils/constants";

function getCurrentPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchCurrentPosition() {
  const positionObject = await getCurrentPosition();
  const position = {
    latitude: positionObject.coords.latitude,
    longitude: positionObject.coords.longitude,
  };

  return position;
}

//https://api.geoapify.com/v1/geocode/reverse?lat=51.21709661403662&lon=6.7782883744862374&apiKey=ef4117597aa144e69f19c3fd358e6cd1

export async function fetchReversedPosition(latitude, longitude) {
  const response = await fetch(
    `${REVERSE_GEO_API_URL}lat=${latitude}&lon=${longitude}&apiKey=${REVERSE_GEO_API_KEY}`,
  );
  const data = await response.json();

  const { country, city } = data.features.at(0).properties;

  return { country, city };
}
