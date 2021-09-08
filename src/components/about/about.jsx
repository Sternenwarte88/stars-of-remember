/* 
This component contents all text for the landingpage
*/

import React from "react";
import classes from "./about.module.css";

export default function About() {
  return (
    <div className={classes.about}>
      <h1>The Stars of Remembrance</h1>
      <p className={classes.paragraph}>
        Loosing someone who we love is hard. There is no place, no chance, to
        get him back. Only memories will left back. That’s make it more
        important, to find a place, remember all those people, let flow down
        your tears and think on him. This is one place, where you can remember.
        One place, where you can write down, who you lost and let him free to be
        a star. <br />
        At the Starfield, your good old friend can fiend new ones, you can visit
        him everytime. It doesn’t matter if he was an human or pet. All those
        souls we are missing, can find place there. Just send him as a Star.{" "}
      </p>
    </div>
  );
}
