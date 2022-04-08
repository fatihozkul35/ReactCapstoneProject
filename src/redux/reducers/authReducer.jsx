import { AUTH_LOGIN, AUTH_LOGOUT } from "../types/authTypes";

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN:
      return { auth: true };
    case AUTH_LOGOUT:
      return { auth: false };
    default:
      return state;
  }
};

export default authReducer;
