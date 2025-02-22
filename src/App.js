import { useState } from 'react';
import Filters from './components/Filters';
import PhoneList from './components/PhoneList';
import FeaturedSection from './components/FeaturedSection';
import { phones } from './data/phones';
import './App.css';

function App() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000,
    minCamera: 0,
    minStorage: 0,
    minBattery: 0
  });

  const filteredPhones = phones.filter(phone => 
    phone.price >= filters.minPrice &&
    phone.price <= filters.maxPrice &&
    phone.camera >= filters.minCamera &&
    phone.storage >= filters.minStorage &&
    phone.battery >= filters.minBattery
  );

 const featuredPhones = phones.slice(0, 5); // Show the first 5 phones as featured

  return (
    <div className="App">
      <h1>Latest Smartphones</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <FeaturedSection phones={featuredPhones} />
      <PhoneList phones={filteredPhones} />
    </div>
  );
}

export default App;