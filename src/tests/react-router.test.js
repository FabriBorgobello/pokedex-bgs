import { screen } from "@testing-library/react";
import App from "../App";
import render from "./utils/RouterWrapper";

test("landing on a bad page", () => {
  render(<App />, { route: "/something-that-does-not-match" });

  expect(screen.getByRole("heading", { name: /oops!/i })).toBeInTheDocument();
});

test("passing a wrong ID for a pokemon", () => {
  render(<App />, { route: "/pokemon/99999" });

  expect(screen.getByRole("heading", { name: /oops!/i })).toBeInTheDocument();
});
