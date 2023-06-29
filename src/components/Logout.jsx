import React from "react";
import "./logout.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectuser } from "../features/UserSlice";

const Logout = () => {
  const user = useSelector(selectuser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <form className="logout">
      <h1>
        Welcome <span className="user_btn">{user.name}</span>
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </form>
  );
};

export default Logout;
