import { useState } from 'react';
import './App.css';
import Filter, { StoreFilterData } from './components/filter';
import Header from './components/header';

function App() {
  const [filterData, setFilterData] = useState<StoreFilterData>();

  const onFilterChange = (filter: StoreFilterData) => {
    setFilterData(filter);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
      </div>
    </>
  );
}

export default App;
