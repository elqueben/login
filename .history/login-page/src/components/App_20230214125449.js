import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from "../contexts/AuthContext";
import { Home } from "./Home";
import { LogIn } from "./LogIn";
import { ProtectedRoute } from "./ProtectedRoute";
import { SignUp } from './SignUp'
import { ForgotPasssword } from './ForgotPassword'

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
    <Route path="/home"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
        }/>
      <Route path="/" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPassword" element{} />
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;