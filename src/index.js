import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import themes from "./themes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.default}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
