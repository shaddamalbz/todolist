import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage";
import DetailActivity from "./Pages/DetailActivity";

// Components
import Header from "./Parts/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/activity/:id" component={DetailActivity} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
