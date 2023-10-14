import { ChangeEvent, KeyboardEvent } from "react";
import { WeatherData } from "../App";
import axios from "axios";

const Input = ({
  setData,
  location,
  setLocation,
}: {
  setData: (data: WeatherData) => void;
  location: string;
  setLocation: (location: string) => void;
}) => {
  const apiKey = "95fc4f99d8a217a6fd2512dbf4cb68cb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios.get<WeatherData>(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <section>
      <input
        data-testid="input"
        className="p-5 rounded-2xl border-none outline-none w-full drop-shadow-lg mb-5 bg-slate-950 text-stone-50"
        value={location}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setLocation(event.target.value)
        }
        onKeyDown={searchLocation}
        placeholder="Search a city..."
        type="text"
      />
    </section>
  );
};

export default Input;
