import './App.css';

import { Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/countries' element={<CountriesList />} />
        <Route path='/countries/:code' element={<CountryDetails />} />

        <Route path='*' element={<Navigate to='/countries' />} />
      </Routes>
    </div>
  );
}

export default App;
