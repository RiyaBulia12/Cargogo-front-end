import './App.css'
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';
import CarList from './components/CarList';
import DeleteCar from './components/DeleteCar';
import NotFound from './components/404/NotFound';
import CarDetails from './components/CarDetails';
import AddCar from './components/AddCar';
import RentCar from './components/RentCar';
function App() {
  return (
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Welcome to Cargogo!
        </h1>

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
  )
}

export default App
