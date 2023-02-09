import { Routes, Route } from "react-router-dom"
import { AuthProvider } from '../contexts/AuthContext';
import { SignUp } from './SignUp' 

function App() {
  return (
    <Routes>
      <SignUp />
    </Routes>
  );
}

export default App;
