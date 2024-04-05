/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AppUserProfileEdit({ appUser }) {
  // states for title and text inputs
  const [nameInput, setNameInput] = useState(appUser ? appUser.name : "");
  const [numInput, setNumInput] = useState(appUser ? appUser.name : "");
  const [yearInput, setYearInput] = useState(appUser ? appUser.year : "");
  return (
    <div>
      <h1>Edit Your Profile!</h1>
      <div>
        <input
          type="text"
          id="Name"
          placeholder="enter your name"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          id="Phone Number"
          placeholder="enter your phone number"
          value={numInput}
          onChange={(event) => setNumInput(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          id="Year"
          placeholder="enter your year"
          value={yearInput}
          onChange={(event) => setYearInput(event.target.value)}
        />
      </div>
    </div>
  );
}
