import React from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import Login from "./components/Login";
import "./App.css";
import { useSelector } from "react-redux";
import { selectuser } from "./features/UserSlice";
import Logout from "./components/Logout";

const App = () => {
  const user = useSelector(selectuser);

  return (
    <>
      <div className="app">
        {/* <HamburgerMenu /> */}
        {user ? <Logout/> : <Login />}
      </div>
    </>
  );
};

export default App;
