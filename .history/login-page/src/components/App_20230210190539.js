import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from "../contexts/AuthContext";
import { Home } from "./Home";
import { LogIn } from "./LogIn";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignUp } from './SignUp' 

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>


    
      <Route path="/home"
        element={<ProtectedRoute />}>
          <Home />
          /></Route>



      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;