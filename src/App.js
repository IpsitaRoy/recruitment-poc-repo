import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Signin from "./pages/signinpage/Signin";
import SigninSignup from "./pages/signinandsignup/SigninSignup";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const GlobalContext = createContext();
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  return (
    <>
      <Provider store={store}>
        <GlobalContext.Provider value={{
          currentPath: [currentPath, setCurrentPath]
        }}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SigninSignup />} />
          </Routes>
        </GlobalContext.Provider>
      </Provider>
    </>
  );
}

export default App;
