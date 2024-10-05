import { formatTemp } from "../../utils/helpers";

function weatherTab({ weather, unit }) {
  const { temp, time, code } = weather;
  const formatedTime = time.slice(12).slice(0, 4);

  return (
    <div className="overflow-hidden rounded-md bg-darkest p-1">
      <p>{formatedTime}</p>
      <p>{code}</p>
      <p>{formatTemp(temp, unit)}</p>
    </div>
  );
}

export default weatherTab;
