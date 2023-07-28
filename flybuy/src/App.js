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

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/cart' element={<Cart/>} />



        <Route path='/about' element={<h1>About us page</h1>} />

        <Route path='/product/details/:id' element={<ProductDetails/>} />


        {/* Admin Route --------------------- */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/admin/edit/:id' element={<AdminEditProduct/>} />


      </Routes>
    </Router>
  );
}

export default App;
