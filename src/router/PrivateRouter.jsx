import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { auth } = useSelector((state) => state.auth);
  // const auth = true; //! Simdilik true, auth ile degistirilebilir!

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
