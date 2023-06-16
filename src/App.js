import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  
import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/home' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />

        <Route path='/about' element={<h1>About us page</h1>} />

      </Routes>
    </Router>
  );
}

export default App;
