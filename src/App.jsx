import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Helmet from "helmet";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Switch>
          <Route path="/gallery">
            <Helmet>
              <meta name="description" content="gallery pada page ini" />
            </Helmet>

            <h1>gallery</h1>
          </Route>

          <Route path="/contact">
            <Helmet>
              <meta name="description" content="silakan hubungi kami" />
            </Helmet>
            <h1>contact</h1>
          </Route>

          <Route path="/about">
            <h1>about</h1>
          </Route>

          <Route path="/home">
            <Helmet>
              <meta name="description" content="semua ada disini" />
            </Helmet>
            <h1>home</h1>
          </Route>

          <Route path="/" exact>
            <Helmet>
              <meta name="description" content="semua ada disini" />
            </Helmet>
            <h1>home</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
