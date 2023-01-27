import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';
import CarList from './components/CarList';
import DeleteCar from './components/DeleteCar';
import NotFound from './components/404/NotFound';
import CarDetails from './components/CarDetails';
import AddCar from './components/AddCar';
import RentCar from './components/RentCar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CarList />} />
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
