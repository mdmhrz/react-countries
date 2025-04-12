import { Suspense } from 'react';
import './App.css'
import Countries from './components/countires/countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all')
.then(res => res.json());



function App() {
  return(
    <>

      <Suspense fallback={<p>Nadir vai going</p>}>
        <Countries countriesPromise={countriesPromise} ></Countries>
      </Suspense>
    
    </>
  )
  
}

export default App
