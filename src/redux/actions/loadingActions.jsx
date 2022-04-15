import { LOADING_FALSE, LOADING_TRUE } from "../types/loadingTypes";

export const setLoadingTrue = () => {
  return { type: LOADING_TRUE };
};
export const setLoadingFalse = () => {
  return { type: LOADING_FALSE };
};
