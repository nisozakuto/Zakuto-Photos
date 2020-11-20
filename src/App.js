import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";

export default class componentName extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />
        <section></section>
        <Footer />
      </main>
    );
  }
}
