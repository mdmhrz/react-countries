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

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
        // console.log('Flags is added ', flag);
        
    }
    
    return (
        <div>
            <h1>Travelling Countries : {countries.length} </h1>
            <h3>Traveled so far: {visitedCountries.length} </h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}> {country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
            {
                countries.map(country => <Country
                    key={country.cca3}
                    handleVisitedFlag = {handleVisitedFlag}
                    handleVisitedCountries = {handleVisitedCountries}
                    country={country}></Country>)

            }
            </div>
 
        </div>
    );
};

export default Countries;