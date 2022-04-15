import React from "react";
import { homeStyles } from "./homeStyles";
import Main from "../../components/Main/Main";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <div style={homeStyles}>
      <Main />
    </div>
  );
};

export default Home;
