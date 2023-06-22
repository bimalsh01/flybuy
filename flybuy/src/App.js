import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/about' element={<h1>About us page</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
