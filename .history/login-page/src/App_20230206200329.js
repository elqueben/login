import App from './App'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Login } from './components/Login' 
import { Welcome } from './components/Welcome';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
        <li>
          <Link to='/Welcome'>Welcome</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path='/Login' element={<Login />} />
        <Route path='/Welcome' element={<Welcome />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
