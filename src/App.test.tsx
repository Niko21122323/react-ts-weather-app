import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

describe("testing App.tsx", () => {
  describe("UI render tests", () => {
    it("checks if App renders corectly", () => {
      const { getByTestId } = render(<App />);
      expect(getByTestId("App")).toBeInTheDocument();
    });

    it("check if Input component is rendered", () => {
      const { getByPlaceholderText } = render(<App />);
      expect(getByPlaceholderText("Search a city...")).toBeVisible();
    });
  });

  it("Check if the MainData and OtherData components are rendered", async () => {
    render(<App />);
    const input = screen.getByTestId("input");

    fireEvent.change(input, { target: { value: "tokyo" } });
    fireEvent.keyDown(input, { key: "Enter" });

    await waitFor(() => {
      const mainData = screen.getByTestId("main-data");
      const otherData = screen.getByTestId("other-data");

      expect(mainData).toBeVisible();
      expect(otherData).toBeVisible();
    });
  });
});
