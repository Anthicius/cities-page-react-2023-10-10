import React, { useState } from 'react';
import CityItem from './CityItem';
import CityData from './CityData'; 
import CityAddition from './CityAddition';

const CitiesPage = () => {

  const [cities, setCities] = useState(CityData)

  const addCityToData = (newCity) => {
    setCities([...cities, newCity])
  }

  const cityAmount = CityData.length;
  return (
    <div>
      <CityAddition addCityToData={addCityToData} />
      {cities.map((city, index) => (
        <CityItem index = {index} cityAmount={cityAmount} city={city} />
      ))}
    </div>
  );
}

export default CitiesPage;
