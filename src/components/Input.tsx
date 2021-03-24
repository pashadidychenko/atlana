import React, { useState } from "react";
import { getGitUsers } from "./Service";
import { connect } from "react-redux";
import { addUsers } from "../store/userActions";
import UserList from "./UserList";
import "../assets/scss/App.scss";

function Input({ addUsers }) {
  const [inputValue, setInputValue] = useState("");

  async function handleOnChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
    let userData = await getGitUsers(e.target.value);
    addUsers(userData);
  }

  return (
    <div className="app">
      <h1>GitHub Searcher</h1>
      <div className="inputContainer">
        <input type="text" onChange={handleOnChange} value={inputValue} />
      </div>
      <UserList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
