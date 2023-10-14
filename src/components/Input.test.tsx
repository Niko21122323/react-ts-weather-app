import { screen, render, fireEvent } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import { WeatherData } from "../App";
import userEvent from "@testing-library/user-event";
import Input from "./Input";
import axios from "axios";

const location: string = "tokyo";
let setLocation: (location: string) => void;
let setData: (data: WeatherData) => void;

describe("Testing Input.tsx", () => {
  describe("UI and attribute render test", () => {
    it("Checks if the input field is visible", () => {
      const { getByRole } = render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );
      const inputField = getByRole("textbox");
      expect(inputField).toBeVisible();
    });

    it("should have class", () => {
      render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );

      const checkClass = screen.getByRole("textbox");
      expect(checkClass).toHaveAttribute("class");
    });

    // Has attrubute value
    it("should have value", () => {
      render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );

      const checkClass = screen.getByRole("textbox");
      expect(checkClass).toHaveAttribute("value");
    });

    // Has attribute placeholder
    it("should have placeholder", () => {
      render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );

      const checkClass = screen.getByRole("textbox");
      expect(checkClass).toHaveAttribute("placeholder");
    });
  });

  describe("functional testing", () => {
    it("Check if the input field returns data", () => {
      render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );
      fireEvent.change(screen.getByTestId("input"), {
        targer: { value: "tokyo" },
      });

      const inputValue = screen.getByTestId("input");
      expect(inputValue).toHaveValue("tokyo");
    });

    it("show name", () => {
      render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );

      const inputBox = screen.getByRole("textbox");
      userEvent.type(inputBox, "tokyo");
      expect(inputBox).toHaveValue("tokyo");
    });

    it("mocking the api request", async () => {
      const axiosMock = vi.spyOn(axios, "get");
      axiosMock.mockResolvedValueOnce({
        data: {
          name: "tokyo",
          main: {
            temp: 20,
            temp_max: 20,
            temp_min: 20,
            pressure: 20,
          },
          weather: [{ description: "Cloudy" }],
          wind: {
            speed: 20,
          },
        },
      });

      const setData = vi.fn();
      const setLocation = vi.fn();

      const { getByTestId } = render(
        <Input
          location={location}
          setLocation={setLocation}
          setData={setData}
        />
      );

      const inputElement = getByTestId("input");

      fireEvent.change(inputElement, { key: "Enter" });
      fireEvent.keyDown(inputElement, { key: "Enter" });

      await axiosMock.mock.results[0].value;

      expect(axiosMock).toHaveBeenCalled();
      expect(setLocation).toHaveBeenCalledWith("");
    });
  });
});
