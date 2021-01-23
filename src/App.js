import "./styles/App.scss";
import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokeListProvider } from "./context/PokeList";
import { PokeProvider } from "./context/Poke";
import Home from "./pages/Home/Home";
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { SearchProvider } from "./context/Search";

// MemoryRouter?
function App() {
  return (
    <BrowserRouter>
      <PokeListProvider>
        <PokeProvider>
          <SearchProvider>
            <NavBar />
            <div className="Content" style={{ minHeight: "calc(100vh - 70px)", paddingTop: "50px" }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pokemon/:id" component={PokemonDetail} />
              </Switch>
            </div>
            <Footer />
          </SearchProvider>
        </PokeProvider>
      </PokeListProvider>
    </BrowserRouter>
  );
}

export default App;
