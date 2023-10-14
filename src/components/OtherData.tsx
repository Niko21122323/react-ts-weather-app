import { WeatherData } from "../App";

const OtherData = ({ data }: { data: WeatherData | null }) => {
  return (
    <section
      data-testid="other-data"
      className="grid grid-cols-2 grid-rows-2 gap-5 w-full"
    >
      <div className="bg-slate-950 py-8 text-center rounded-xl h-full">
        {data?.main ? (
          <p className="text-3xl mb-5 text-slate-100">
            {data?.main.temp_max} C
          </p>
        ) : null}
        <p className="text-1xl font-bold text-stone-50">Max temp</p>
      </div>
      <div className="bg-slate-950 p-5 py-8 items-center text-center justify-center rounded-xl">
        {data?.main ? (
          <p className="text-3xl mb-5 text-slate-100">
            {data?.main.temp_min} C
          </p>
        ) : null}
        <p className="text-1xl font-bold text-stone-50">Min temp</p>
      </div>
      <div className="bg-slate-950 p-5 py-8 items-center text-center justify-center rounded-xl">
        {data?.main ? (
          <p className="text-3xl mb-5 text-slate-100">{data?.main.pressure}%</p>
        ) : null}
        <p className="text-1xl font-bold text-stone-50">Pressure</p>
      </div>
      <div className="bg-slate-950 p-5 py-8 items-center text-center justify-center rounded-xl">
        {data?.wind ? (
          <p className="text-3xl mb-5 text-slate-100">{data?.wind.speed} kph</p>
        ) : null}
        <p className="text-1xl font-bold text-stone-50">Wind Speed</p>
      </div>
    </section>
  );
};
export default OtherData;
