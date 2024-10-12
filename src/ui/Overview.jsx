import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Container from "./Container";

const buttonActive = "";

function Overview({ weather }) {
  const chartData = [];

  // Loop through weather data and format it for the chart
  for (let i = 0; i <= weather.hourly.time.length - 1; i++) {
    const date = new Date(weather.hourly.time[i]);
    const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      hour12: true,
    });
    const obj = {
      time: formattedDate,
      humidity: weather.hourly.relative_humidity_2m[i],
    };
    chartData.push(obj);
  }

  // Calculate the average humidity
  const avg = Math.round(
    weather.hourly.relative_humidity_2m.reduce((acc, cur) => acc + cur, 0) /
      weather.hourly.relative_humidity_2m.length,
  );

  // Find the middle index to place the avg value
  const middleIndex = Math.floor(chartData.length / 2);

  // Create a new object for the avg value with the same time as the middle index
  const avgValue = {
    time: chartData[middleIndex].time,
    humidity: avg, // Use the same key for humidity to prevent splitting the line
  };

  // Insert avg value into the middle of the dataset
  const updatedData = [
    ...chartData.slice(0, middleIndex), // First half of data
    avgValue, // Average value in the middle
    ...chartData.slice(middleIndex), // Second half of data
  ];

  return (
    <Container>
      <div className="flex justify-between">
        <h2 className="flex self-center text-3xl text-whi">Overview</h2>
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-darkest p-2 text-whi">
          <button className="rounded-lg bg-whi p-1 text-darkest">
            Humidity
          </button>
          <button>UV index</button>
          <button>Rainfall</button>
          <button>Pressure</button>
        </div>
      </div>

      <ResponsiveContainer height={200} width="100%">
        <LineChart data={updatedData}>
          <XAxis dataKey="time" stroke="#f5f5f7" />
          <YAxis dataKey="humidity" unit="%" stroke="#f5f5f7" />
          <CartesianGrid strokeDasharray="3 3" />

          <Line
            type="monotone"
            dataKey="humidity"
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
