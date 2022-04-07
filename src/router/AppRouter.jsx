import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        {/* <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route> */}

        {/* <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route> */}

        {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default AppRouter;
