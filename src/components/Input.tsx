import React, { useState } from "react";
import { getGitUsers } from "./Service";
import { connect } from "react-redux";
import { addUsers } from "../store/userActions";
import UserList from "./UserList";
import UserInfo from "./UserInfo";

function Input({ addUsers }) {
  const [inputValue, setInputValue] = useState("");
  async function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  async function handleOnClick() {
    let testDate = "pasha";
    let userData = await getGitUsers(testDate);
    addUsers(userData);
  }
  return (
    <>
      <div>
        <input type="text" onChange={handleOnChange} />
        <button onClick={handleOnClick}>Search</button>
      </div>
      <UserList />
      <UserInfo />
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
