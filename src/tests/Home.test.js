import { screen } from "@testing-library/react";
import App from "../App";
import render from "./utils/RouterWrapper";

test("renders home without crashing", async () => {
  render(<App />);

  const greeting = screen.getByRole("heading", {
    name: /hi! welcome to this pokedex created using react/i,
  });
  const searchBar = screen.getByRole("textbox", { name: /pokemon-search/i });
  const searchButton = screen.getByRole("button", { name: /search/i });

  expect(searchBar).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(greeting).toBeInTheDocument();
});
