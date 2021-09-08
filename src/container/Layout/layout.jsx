import React from "react";
import About from "../../components/about/about";
import Forms from "../../components/form/form";
import Starfield from "../../components/starfield/starfield";
import Head from "../Head/head";
import classes from "./layout.module.css";
import { Switch, Route } from "react-router";

export default function Layout(props) {
  return (
    <>
      <Head />
      <Switch>
        <Route path="/" exact>
          <About className={classes.about} />
        </Route>
        <Route path="/send-a-star" exact>
          <Forms />
        </Route>
        <Route path="/starfield" exact>
          <Starfield />
        </Route>
      </Switch>
    </>
  );
}
