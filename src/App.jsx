import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';
import DeleteCar from './components/DeleteCar';
import NotFound from './components/404/NotFound';
import CarDetails from './components/CarDetails';
import AddCar from './components/AddCar';
import RentCar from './components/RentCar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<CarDetails />} />
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
