import { useParams, Link } from "react-router-dom";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Container from "./Container";

function Overview({ weather }) {
  console.log(weather);
  const { type } = useParams();
  const chartData = [];
  let dataKey;
  let unit;

  switch (type) {
    case "humidity":
      dataKey = "relative_humidity_2m";
      unit = "%";
      break;
    case "uv":
      dataKey = "uv_index";
      unit = "";
      break;
    case "rain":
      dataKey = "rain";
      unit = "mm";
      break;
    case "wind_speed_80m":
      dataKey = "wind_speed_80m";
      unit = "km/h";
      break;
    default:
      dataKey = "relative_humidity_2m";
      unit = "%";
      break;
  }

  for (let i = 0; i <= weather.hourly.time.length - 1; i++) {
    const date = new Date(weather.hourly.time[i]);
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      hour12: true,
    });
    const obj = {
      time: formattedDate,
      value: weather.hourly[dataKey][i],
    };
    chartData.push(obj);
  }

  const avg = Math.round(
    weather.hourly[dataKey].reduce((acc, cur) => acc + cur, 0) /
      weather.hourly[dataKey].length,
  );

  const middleIndex = Math.floor(chartData.length / 2);

  const avgValue = {
    time: chartData[middleIndex].time,
    value: avg,
  };

  const updatedData = [
    ...chartData.slice(0, middleIndex),
    avgValue,
    ...chartData.slice(middleIndex),
  ];

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="flex self-center text-3xl text-whi">Overview</h2>
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-darkest p-2 text-whi">
          <Link to="/dashboard/humidity">
            <button
              className={
                type === "humidity" ? "rounded-lg bg-whi p-1 text-darkest" : ""
              }
            >
              Humidity
            </button>
          </Link>
          <Link to="/dashboard/uv">
            <button
              className={
                type === "uv" ? "rounded-lg bg-whi p-1 text-darkest" : ""
              }
            >
              UV index
            </button>
          </Link>
          <Link to="/dashboard/rain">
            <button
              className={
                type === "rain" ? "rounded-lg bg-whi p-1 text-darkest" : ""
              }
            >
              Rainfall
            </button>
          </Link>
          <Link to="/dashboard/wind_speed_80m">
            <button
              className={
                type === "wind_speed_80m"
                  ? "rounded-lg bg-whi p-1 text-darkest"
                  : ""
              }
            >
              Wind speed
            </button>
          </Link>
        </div>
      </div>

      <ResponsiveContainer height={200} width="100%">
        <LineChart data={updatedData}>
          <XAxis dataKey="time" stroke="#f5f5f7" />
          <YAxis dataKey="value" unit={unit} stroke="#f5f5f7" />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="value"
            dot={false}
            stroke="#404258"
            strokeWidth="3px"
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Overview;
