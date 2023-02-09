import { Routes, Route } from "react-router-dom"
import { AuthProvider } from '../contexts/AuthContext';
import use
import { LogIn } from "./LogIn";
import { SignUp } from './SignUp' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
