import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import store from "./redux/stores/store.jsx";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </div>
  );
}

export default App;
