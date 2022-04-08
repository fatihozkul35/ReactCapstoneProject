import { AUTH_LOGIN, AUTH_LOGOUT } from "../types/authTypes";

export const authLogin = (payload) => {
  return { type: AUTH_LOGIN, payload: payload };
};
export const authLogout = () => {
  return { type: AUTH_LOGOUT };
};
