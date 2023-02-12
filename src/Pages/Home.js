import React, { useContext } from 'react'
import Searchbar from '../Components/Searchbar'
import SingleCountry from '../Components/SingleCountry';
import { CountryContext } from '../Context/Countrycontextprovider';


export default function Home() {
  const { allcountries, loading } = useContext(CountryContext)

  return (
    <>
    <Searchbar />
    <div className="all-country-container">
        {loading ? 
            'data loading........' 
            : 
            allcountries.length === 0 ? 'no data to show' : allcountries.map(m => <SingleCountry key={m.name.official} item={m} />)
        } 
    </div>
    </>
  )
}
