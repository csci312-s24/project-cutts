import PropTypes from "prop-types";
import { useState } from "react";
import { Inter } from "next/font/google";
import UserShape from "./UserShape";

const inter = Inter({ subsets: ["latin"] });

export default function AppUserProfileEdit({ appUser, complete }) {
  // states for title and text inputs
  const [nameInput, setNameInput] = useState(appUser ? appUser.name : "");
  const [numInput, setNumInput] = useState(appUser ? appUser.num : "");
  const [yearInput, setYearInput] = useState(appUser ? appUser.year : "");

  const handleSaveClick = () => {
    const newUserInfo = {
      ...appUser,
      nameInput,
      numInput,
      yearInput,
    };
    complete(newUserInfo);
  };

  const handleCancelClick = () => complete();

  return (
    <div>
      <h1 className={inter.className}>Edit Your Profile</h1>
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
      <div>
        <button type="button" onClick={handleSaveClick}>
          Save
        </button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}

AppUserProfileEdit.propTypes = {
  appUser: UserShape,
  complete: PropTypes.func.isRequired,
};
