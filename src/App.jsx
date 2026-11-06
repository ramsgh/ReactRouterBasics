import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Products from './Products.jsx';
import CarProducts from './CarProducts.jsx';
import BikeProducts from './BikeProducts.jsx';
import Contact from './Contact.jsx';
import Info from './InfoFun.jsx';
import SearchBar from './searchBar.jsx'
import JobPortal from '../careers.jsx';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{' '}
        <Link to="/contact">Contact</Link> | <Link to="/customer/Abc">User Greet</Link>| <Link to="/careers">Job Portal</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <SearchBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer/:firstname" element={<Info />} />
        <Route path="/careers" element={<JobPortal />} />
      </Routes>
    </>
  );
}