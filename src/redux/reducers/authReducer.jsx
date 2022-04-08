import { AUTH_LOGIN, AUTH_LOGOUT } from "../types/authTypes";

const initialState = {
  currentUser: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return { currentUser: payload };
    case AUTH_LOGOUT:
      return { currentUser: false };
    default:
      return state;
  }
};

export default authReducer;
