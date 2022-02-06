// import logo from "./logo.svg";
// import "./App.css";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import "./auth.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
