import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../App";
import MainData from "./MainData";

let data: WeatherData | null;

describe("Testing MainData.tsx", () => {
  describe("UI render test", () => {
    it("Checks if the city names is rendered", () => {
      render(<MainData data={data} />);
      const cityName = screen.getByTestId("cityName");
      expect(cityName).toBeVisible();
    });
  });

  it("Should render the data", () => {
    const data: WeatherData = {
      main: {
        pressure: 1013,
        temp: 20,
        temp_max: 25,
        temp_min: 15,
      },
      name: "London",
      weather: [
        {
          description: "overcast clouds",
        },
      ],
      wind: {
        speed: 10,
      },
    };

    const { getByTestId } = render(<MainData data={data} />);
    expect(getByTestId("cityName")).toBeInTheDocument();
    expect(getByTestId("cityName")).toBeVisible();
  });
});
