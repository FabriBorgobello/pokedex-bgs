import "./styles/App.scss";
import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { PokemonContextProvider } from "./context/PokemonContext";
import Home from "./pages/Home/Home";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
// MemoryRouter?
function App() {
  return (
    <PokemonContextProvider>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemon/:id" component={PokemonDetail} />
      </BrowserRouter>
    </PokemonContextProvider>
  );
}

export default App;
