import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React, { Component } from "react";
import Login from "./component/Login";
import Home from "./component/Home";
import About from "./component/About";
import SignUp from "./component/SignUp";
import { Route, Redirect } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <section></section>
        <Footer />
      </main>
    );
  }
}
