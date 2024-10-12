import Container from "./Container";

function Forecasts() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <h2 className="flex self-center text-3xl text-whi">Forecasts</h2>
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-darkest p-2 text-whi">
          <button className="vh">3 days</button>
          <button>7 days</button>
        </div>
      </div>
    </Container>
  );
}

export default Forecasts;
