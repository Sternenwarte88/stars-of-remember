// Head module with title and navigation

import React from "react";
import Button from "../../components/button/buttons";
import { useHistory } from "react-router-dom";
import classes from "./head.module.css";

export default function Head() {
  let history = useHistory();

  const aboutHandler = () => {
    history.push("/");
  };
  const starfieldHandler = () => {
    history.push("/starfield");
    console.log("clicked");
  };
  const sendAStarHandler = () => {
    history.push("/send-a-star");
  };

  return (
    <>
      <h1 className={classes.h1}>Stars of Remembrance</h1>
      <div className={classes.buttons}>
        <Button name="About" clicked={aboutHandler} />
        <Button name="Starfield" clicked={starfieldHandler} />
        <Button name="Send a Star" clicked={sendAStarHandler} />
      </div>
      <hr />
    </>
  );
}
