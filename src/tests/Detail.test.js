import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import render from "./utils/RouterWrapper";

test("clicking on Pokemon and showing detail", async () => {
  render(<App />);
  const card = await screen.findByTestId("card-1");
  userEvent.click(card);
  const ability = await screen.findByText(/overgrow/i);

  expect(ability).toBeInTheDocument();
});
