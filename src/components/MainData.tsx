import { WeatherData } from "../App";

const MainData = ({ data }: { data: WeatherData | null }) => {
  return (
    <section
      data-testid="main-data"
      className="flex gap-5 items-center flex-col mb-10 mt-10"
    >
      <p
        data-testid="cityName"
        className="text-6xl text-slate-950 font-medium text-center"
      >
        {data?.name}
      </p>
      {data?.weather ? (
        <p
          data-testid="aaa"
          className="text-xl text-slate-950 py-2 px-7 rounded-xl"
        >
          {data?.weather[0].description}
        </p>
      ) : null}
      {data?.main ? (
        <h1
          data-testid="cityTemp"
          className="text-9xl text-slate-950 font-bold"
        >
          {data?.main.temp.toFixed(0)} °C
        </h1>
      ) : null}
    </section>
  );
};
export default MainData;
