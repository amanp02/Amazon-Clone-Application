import React from "react";
import{BrowserRouter as Router ,Switch,Route }from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
<div className="app">
     <Switch>
     <Route Path="/checkout">
      <h1>checkout</h1>
     </Route>
     <Router path="/login">
      <h1>login page</h1>
     </Router>
     <Route path="/">
      <h1>HOME PAGE</h1>
     </Route>
     </Switch>
    </div>
    </Router>
    
  );
}

export default App;
