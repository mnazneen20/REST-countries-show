import React, { useContext } from 'react';
import { CountryContext } from '../Context/Countrycontextprovider';
import './searchbar.css'

export default function Searchbar() {
// this selectval is a state that maintains the changes occured in the select dropdown menu
  const [selectval, setselectval] = React.useState('')

// getting the setpath context to update the fetch according to user inputs
  const { setpath } = useContext(CountryContext)
  
// handling the input feild
  function handlecountryinput(e){
    // stting dropdown value to default or none
    setselectval('')
    const input = e.target.value;
    // check if input is empty, country state set to all countrys as default
    // else setting the path according to user input value
    if(input.length === 0){
      setpath('https://restcountries.com/v3.1/all')
    } else {
      setpath(`https://restcountries.com/v3.1/name/${input}`)
    }
  }

// handling the dropdown menu
  function handleregioninput(e){
    setselectval(e.target.value)
    setpath(`https://restcountries.com/v3.1/region/${e.target.value}`)
  }

  return (
    <div className='search-container'>
        <div>
            <input type="text" placeholder='🔍 Search for a country...' onChange={(e) => handlecountryinput(e)} />
        </div>
        <div>
        <select id="favColor" name="favColor" value={selectval} onChange={(e) => handleregioninput(e)}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
        </div>
    </div>
  )
}
