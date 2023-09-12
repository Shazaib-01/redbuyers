/** @format */

import './assets/global.css';
import Nav from './layouts/nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Browsehome from './pages/Browsehome';
import Footer from './layouts/nav/Footer';
import Login from './context/auth/Login';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browsehome />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
