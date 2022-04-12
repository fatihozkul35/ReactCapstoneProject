import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
let store;

// if (process.env.NODE_ENV === "development") {
//   store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(thunk),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   );
// } else {
//   store = createStore(rootReducer, applyMiddleware(thunk));
// }
store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
