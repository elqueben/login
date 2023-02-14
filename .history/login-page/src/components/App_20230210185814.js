import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from "../contexts/AuthContext";
import { LogIn } from "./LogIn";
import { SignUp } from './SignUp' 

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
      <Route path="/home"
        element ></Route>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;