// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import Services from './pages/Services';

const App = () => {
return (
<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/products" element={<Products />} />
<Route path="/services" element={<Services />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
</Routes>
</Router>
);
};
export default App;