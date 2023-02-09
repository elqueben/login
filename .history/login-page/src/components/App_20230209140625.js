import { Routes, Route } from "react-router-dom"
import { userAuthContextProvider } from "../contexts/AuthContext";
import { LogIn } from "./LogIn";
import { SignUp } from './SignUp' 

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
