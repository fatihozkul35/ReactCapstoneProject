import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Profile from "../pages/Profile/Profile";
import NewBlog from "../pages/NewBlog/NewBlog";
import CardItemDetails from "../components/CardItemDetails/CardItemDetails";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";
const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<PrivateRouter />}></Route> */}

        {/* <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route> */}

        {/* <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<PrivateRouter />}>
          <Route path="" element={<CardItemDetails />} />
        </Route>
        <Route path="/update" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/newblog" element={<NewBlog />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
