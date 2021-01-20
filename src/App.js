import "./styles/App.scss";
import React from "react";
import { MemoryRouter, Route, Link } from "react-router-dom";

const Home = () => (
  <>
    <h1>Home</h1>
    <ul>
      <li key="1">
        <Link to="/first-page">First Page</Link>
      </li>
      <li key="2">
        <Link to="/second-page">Second Page</Link>
      </li>
    </ul>
  </>
);

const FirstPage = () => (
  <>
    <h1>First Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

const SecondPage = () => (
  <>
    <h1>Second Page</h1>
    <Link to="/">Go back Home</Link>
  </>
);

function App() {
  return (
    <MemoryRouter>
      <Route exact path="/" component={Home} />
      <Route path="/first-page" component={FirstPage} />
      <Route path="/second-page" component={SecondPage} />
    </MemoryRouter>
  );
}

export default App;
