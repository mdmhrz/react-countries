import React, {use, useState} from 'react';
import Country from '../Country/country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const countries = use(countriesPromise);
    // console.log(countries)
    
    const handleVisitedCountries = (country) => {
        // console.log('country visited clicked to be added', country);
        // console.log(visitedCountries)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        console.log('Flags is added ', flag);
        
    }
    
    return (
        <div>
            <h1>Travelling Countries : {countries.length} </h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
            {
                countries.map(country => <Country
                    key={country.cca3}
                    handleVisitedFlags = {handleVisitedFlags}
                    handleVisitedCountries = {handleVisitedCountries}
                    country={country}></Country>)

            }
            </div>
 
        </div>
    );
};

export default Countries;