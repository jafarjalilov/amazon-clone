import React, { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Payment from "./Payment";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51Hd9bbLEObjIgdKJXr5zVTMhX8MD1yMfg3HQolRjhmjq6eOUNuF2x9yAfBuYqtHzWAYRATBHRP26h9o5gJJsOrmi00p5V1Z4hK"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("USER IS >>>>", authUser);
        // user just logged in or the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
