import React from "react";
import Card from "../UI/Card";
import classes from "../UI/Card.module.css";
import "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username </label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years) </label>
        <input id="age" type="number" />
        <button type="submit">Add User </button>
      </form>
    </card>
  );
};

export default AddUser;
