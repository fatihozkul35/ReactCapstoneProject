import { LOADING_TRUE, LOADING_FALSE } from "../types/loadingTypes";

const initialState = {
  loading: false,
};

const loadingReducer = (state = initialState, { type }) => {
  switch (type) {
    case LOADING_TRUE:
      return { loading: true };
    case LOADING_FALSE:
      return { loading: false };
    default:
      return state;
  }
};

export default loadingReducer;
