// Form to send a star to the database
import React from "react";
import classes from "./form.module.css";
import Button from "../button/buttons";

export default function Forms() {
  const buttonHandler = (event) => {
    event.preventDefault();
    console.log("sending star to database");
  };

  return (
    <>
      <form className={classes.form}>
        <label htmlFor="name">What's his/her name?</label>
        <input id="name" type="text" />
        <label htmlFor="dob">When is he/she born?</label>
        <input id="dob" type="date" />
        <label htmlFor="dod">When is he/she gone?</label>
        <input id="dod" type="date" />
        <Button
          clicked={(event) => {
            buttonHandler(event);
          }}
          name="Go little Star"
        />
      </form>
    </>
  );
}
