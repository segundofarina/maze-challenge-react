import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const headerElement = screen.getByText(/Maze challenge/i);
  expect(headerElement).toBeInTheDocument();
});
