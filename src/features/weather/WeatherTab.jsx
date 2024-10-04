function weatherTab({ weather }) {
  const { datetime, temp } = weather;
  const formatedTime = datetime.slice(0, 2);
  const formatedTime2 = formatedTime.startsWith("0")
    ? formatedTime.slice(1)
    : formatedTime;

  return (
    <div className="rounded-md bg-darkest p-1">
      <p>{formatedTime2}</p>
      <p>{Math.ceil(temp)}</p>
    </div>
  );
}

export default weatherTab;
