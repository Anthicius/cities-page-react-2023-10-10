import React from 'react';

const CityItem = (props) => {
  
  const isCapital = props.city.isCapital ? 'capital' : '';
  const touristAttractions = props.city.touristAttractions.length;
  const cityOddOrEven = props.cityAmount % 2 ===0 ? true : false;

  const cityStyle = {
    width: cityOddOrEven && props.index === 9 ? '100%' : '50%',
    border: '2px solid black', 
  };

  
  return (
    <div>
      <h2>{props.city.name}</h2>
      <p>Population: {props.city.population}</p>
      <p>Continent: {props.city.location.continent}</p>
      <p>Country: {props.city.location.country}</p>
      <p>{touristAttractions > 1 ? `Main Tourist attractions of ${props.city.name} are ${props.city.touristAttractions.join(', ')}` : `Main Tourist attraction of ${props.city.name} is ${props.city.touristAttractions.join(', ') }`}</p>
      <p style={cityStyle} className={isCapital}>{props.city.isCapital ? `City ${props.city.name} is the capital of ${props.city.location.country} ` : `City ${props.city.name} is not the capital of ${props.city.location.country} `}</p>
    </div>
  );
};

export default CityItem;
