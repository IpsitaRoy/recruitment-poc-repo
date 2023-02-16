import React, { createContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SigninSignup from "./pages/signinandsignup/SigninSignup";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";
import { Provider } from "react-redux";
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const GlobalContext = createContext();
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [status, setStatus] = useState(localStorage.getItem('status'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Provider store={store}>
        <GlobalContext.Provider value={{
          currentPath: [currentPath, setCurrentPath],
          status: [status, setStatus],
          isLoggedIn: [isLoggedIn, setIsLoggedIn]
        }}>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SigninSignup />} />
            <Route path="/profile" element={isLoggedIn ? <Profile /> : <SigninSignup />} />
          </Routes>
        </GlobalContext.Provider>
      </Provider>
    </>
  );
}

export default App;
