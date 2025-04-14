import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country);
    // console.log(handleVisitedCountries);
    

    const [visited, setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            <p>Independent: {country.independent? "Free": "Not Free"}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>{visited? 'Visited': 'Not Visited'}</button>
            <button onClick={()=> handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;