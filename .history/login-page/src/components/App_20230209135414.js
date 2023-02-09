import { Routes, Route } from "react-router-dom"
import { AuthProvider } from '../contexts/AuthContext';
import { userAuthContextProvider } from "../contexts/AuthContext";
import { LogIn } from "./LogIn";
import { SignUp } from './SignUp' 

function App() {
  return (
    <userAuthContextProvider>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </userAuthContextProvider>
  );
}

export default App;
