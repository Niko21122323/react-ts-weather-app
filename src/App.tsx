import { useState } from "react";
import Input from "./components/Input";
import MainData from "./components/MainData";
import OtherData from "./components/OtherData";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

function App() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>("");

  return (
    <main
      data-testid="App"
      className=" h-screen flex  w-full justify-center flex-col items-center"
    >
      <div className="w-full  p-16 h-full  flex flex-col justify-between bg-gradient-to-t from-cyan-500 max-w-4xl">
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />

        {data?.name !== undefined && <MainData data={data} />}
        {data?.name !== undefined && <OtherData data={data} />}
      </div>
    </main>
  );
}

export default App;
