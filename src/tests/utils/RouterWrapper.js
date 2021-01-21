import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

export default function render(ui, { route = "/", ...renderOptions } = {}) {
  window.history.pushState({}, "Test page", route);

  function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
