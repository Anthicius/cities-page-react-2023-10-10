import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

const CityAddition = ({addCityToData}) => {

    const [name, setName] = useState("");
    const [population, setPopulation] = useState();
    const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [touristAttractions, setTouristAttractions] = useState([]);
    const [isCapital, setIsCapital] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCity = {
            name,
            population,
            location: {
                continent,
                country,
            },
            touristAttractions: touristAttractions,
            isCapital
        }

        console.log(typeof(touristAttractions))
        addCityToData(newCity);

        setName("");
        setPopulation("");
        setContinent("");
        setCountry("");
        setTouristAttractions([]);
        setIsCapital(false);
    }

  return (
    <div>
      <h2>Add a city</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City Name:
          <input 
          type="text" 
          value={name}
          onChange={(e)=> setName(e.target.value)}  
          required
          />
        </label>
        <label>
          Population:
          <input 
          type="number" 
          value={population}
          onChange={(e)=> setPopulation(e.target.value)}  
          required
          />
        </label>
        <label>
        Continent:
          <input 
          type="text" 
          value={continent}
          onChange={(e)=> setContinent(e.target.value)}  
          required
          />
        </label>
        <label>
        Country:
          <input 
          type="text" 
          value={country}
          onChange={(e)=> setCountry(e.target.value)}  
          required
          />
        </label>
        <label>
        Tourist attractions:
          <input 
          type="text" 
          value={touristAttractions}
          onChange={(e)=> setTouristAttractions([...touristAttractions, e.target.value])} 
          required
          />
        </label>
        <label>
          Is Capital?:
          <input
            type="checkbox" 
            checked={isCapital} 
            onChange={(e) => setIsCapital(!isCapital)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CityAddition;
