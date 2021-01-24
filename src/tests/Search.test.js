import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import render from "./utils/RouterWrapper";

test("searching a specific Pokemon with the search bar", async () => {
  render(<App />);
  const searchBar = screen.getByRole("textbox", { name: /pokemon-search/i });

  userEvent.type(searchBar, "alakazam");
  const card = await screen.findByTestId("card-65");
  expect(card).toBeInTheDocument();
});
