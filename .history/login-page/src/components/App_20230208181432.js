import { Routes, Route } from 
import { AuthProvider } from '../contexts/AuthContext';
import { SignUp } from './SignUp' 

function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}

export default App;
