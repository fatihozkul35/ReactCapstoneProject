import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import { homeStyles } from "./homeStyles";
import Main from "../../components/Main/Main";
import { useSelector } from "react-redux";
const Home = () => {
  return (
    <div style={homeStyles}>
      {/* <Navbar /> */}
      <Main />
    </div>
  );
};

export default Home;
