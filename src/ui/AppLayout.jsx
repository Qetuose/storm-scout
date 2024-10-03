import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useCurrentPosition } from "../features/weather/useCurrentPosition";
import { useWeather } from "../features/weather/useWeather";
import { useReverseGeo } from "../features/weather/useReverseGeo";

function AppLayout() {
  const { currentPosition } = useCurrentPosition();
  console.log(currentPosition);
  const { weather } = useWeather();
  const { reverseGeo } = useReverseGeo(currentPosition);
  console.log(reverseGeo);

  return (
    <div className="m-4 grid h-[calc(100dvh-2rem)] grid-rows-[auto_1fr] rounded-3xl bg-darkest p-4">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
