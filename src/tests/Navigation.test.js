import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import render from "./utils/RouterWrapper";

test("clicking on Pokemon and detail and navigate to next Pokemon", async () => {
  render(<App />);

  const card = await screen.findByTestId("card-383");
  userEvent.click(card);

  const nextButton = await screen.findByRole("link", { name: /#384/i });
  userEvent.click(nextButton);
  const secondPokemon = await screen.findByText(/Rayquaza/i);

  expect(secondPokemon).toBeInTheDocument();
});
