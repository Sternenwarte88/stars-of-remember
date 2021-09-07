import React from "react";
import About from "../../components/about/about";
import Forms from "../../components/form/form";
import Starfield from "../../components/starfield/starfield";
import Head from "../Head/head";

export default function Layout(props) {
  return (
    <>
      <Head />
      <About />
      <Forms />
      <Starfield />
    </>
  );
}
