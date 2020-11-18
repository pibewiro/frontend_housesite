import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Template from "../Components/Template";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Contact from "../Components/Home/Contact";
import About from "../Components/Home/About";
import Location from "../Components/Location";

export default function index() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Template exact path="/about" component={Home} />
          <Template exact path="/contact-us" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/homes/:location" component={Location} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
