import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { GlobalState } from "./global/GlobalState";
import GlobalStyle from "./GlobalStyled";
import Router from "./routes/router";


const App = ()=> {
  return (
      <div>
        <GlobalStyle/>
        <GlobalState>
        <Router/>
        </GlobalState>
        <ToastContainer/>
      </div>
  );
}

export default App;
