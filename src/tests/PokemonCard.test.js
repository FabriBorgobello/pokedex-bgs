import { screen } from "@testing-library/react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import render from "./utils/RouterWrapper";

test("renders home without crashing", async () => {
  render(<PokemonCard id={20} name={"myPoke"} />);

  expect(screen.getByText(/#2/i)).toBeInTheDocument();
  expect(screen.getByText(/myPoke/i)).toBeInTheDocument();
  expect(screen.getByRole("img", { name: /myPoke/i })).toBeInTheDocument();
});
