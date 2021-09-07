import React from "react";
import Button from "../../components/button/buttons";

export default function Head() {
  return (
    <>
      <h1>Stars of Remembrance</h1>
      <div>
        <Button name="About" />
        <Button name="Starfield" />
        <Button name="Send a Star" />
      </div>
    </>
  );
}
