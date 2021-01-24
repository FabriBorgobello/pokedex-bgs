import { screen } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar";
import render from "./utils/RouterWrapper";

test("clicking on Pokemon and detail and navigate to next Pokemon", async () => {
  render(<NavBar />);
  const link = screen.getByRole("link", { name: /pokedex/i });
  const linkedIn = screen.getByRole("link", { name: /github/i });

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(linkedIn).toBeInTheDocument();
});
