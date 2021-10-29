import React from "react";
import { BrowserRouter as Router,Route,Switch}from "react-router-dom"

import ConsultaCep from "./Pages/ConsultaCep";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
    
      <div className="App">
        <Switch>
          <Route path="/" exact component={ConsultaCep}></Route>
          <Route path="/home" component={Home}></Route>
          
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
