import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import { WeatherData } from "../App";
import OtherData from "./OtherData";

let data: WeatherData | null;

describe("Testing OtherData", () => {
  describe("UI render testing", () => {
    it("renders max temp", () => {
      const { getByText } = render(<OtherData data={data} />);
      const maxTemp = getByText(/max temp/i);
      expect(maxTemp).toBeVisible();
    });

    it("renders min temp", () => {
      render(<OtherData data={data} />);
      const minTemp = screen.getByText(/min temp/i);
      expect(minTemp).toBeVisible();
    });

    it("renders min temp", () => {
      render(<OtherData data={data} />);
      const pressure = screen.getByText(/pressure/i);
      expect(pressure).toBeVisible();
    });

    it("renders min temp", () => {
      render(<OtherData data={data} />);
      const windSpeed = screen.getByText(/wind speed/i);
      expect(windSpeed).toBeVisible();
    });
  });

  describe("functional testing", () => {
    it("should render the data", () => {
      const data: WeatherData = {
        main: {
          pressure: 1013,
          temp: 19,
          temp_max: 20,
          temp_min: 10,
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

      const { getByText } = render(<OtherData data={data} />);
      expect(getByText("1013%")).toBeInTheDocument();
      expect(getByText("20 C")).toBeInTheDocument();
      expect(getByText("10 C")).toBeInTheDocument();
      expect(getByText("10 kph")).toBeInTheDocument();
    });
  });
});
