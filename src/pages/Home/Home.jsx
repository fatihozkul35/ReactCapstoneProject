import React, { useEffect } from "react";
import { homeStyles } from "./homeStyles";
import Main from "../../components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { getblogsFromFirebase } from "../../redux/thunk/blogsThunk";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getblogsFromFirebase(dispatch);
  }, [dispatch]);
  const { loading } = useSelector((state) => state.loading);

  return <div style={homeStyles}>{loading ? <Loading /> : <Main />}</div>;
};

export default Home;
