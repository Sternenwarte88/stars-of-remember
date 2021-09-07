import React from "react";

export default function Forms() {
  return (
    <>
      <form>
        <label for="name">What's his/her name?</label>
        <input id="name" type="text" />
        <label for="dob">When is he/she born?</label>
        <input id="dob" type="date" />
        <label for="dod">When is he/she gone?</label>
        <input id="dod" type="date" />
        <button type="button">Go little Star</button>
      </form>
    </>
  );
}
