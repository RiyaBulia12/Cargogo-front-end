import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Favorite from './components/Favorite';
import DeleteCar from './components/DeleteCar';
import NotFound from './components/404/NotFound';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import RentCar from './components/RentCar';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/login';
import CarDetails from './components/CarDetails';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {isHomePage ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/rent" element={<RentCar />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/delete" element={<DeleteCar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
