import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import SigninSignup from "./pages/signinandsignup/SigninSignup";
import Header from "./components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SigninSignup />} />
      </Routes>
    </>
  );
}

export default App;
