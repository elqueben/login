import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { SignUp } from './SignUp' 

function App() {
  return (
    <>
    <AuthProvider>
      <SignUp />
    </AuthProvider>
    </>
  );
}

export default App;
