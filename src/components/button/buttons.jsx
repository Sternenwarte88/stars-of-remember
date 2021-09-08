// The buttons for the application
import React from "react";

export default function Button(props) {
  return (
    <>
      <button onClick={props.clicked}>{props.name}</button>
    </>
  );
}
