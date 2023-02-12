import './singlecountry.css'
import React, { useContext } from 'react'
import { CountryContext } from '../Context/Countrycontextprovider'
import { Link } from 'react-router-dom';

export default function SingleCountry(props) {
  const { setselected } = useContext(CountryContext);
  
  function handlemouseclick() {
    setselected(props.item)
  }
  return (
    <Link to={`/country/`}>
    <div className='country-card' onClick={handlemouseclick}>
        <img src={props.item.flags.png} alt={`flag of ${props.item.name.common}`} className="flag" />
        <div className="cardtext">
            <h3>{props.item.name.common}</h3>
            <p><b>Population:</b> {props.item.population}</p>
            <p><b>Region:</b> {props.item.region}</p>
            <p><b>Capital:</b> {props.item.capital}</p>
        </div>
    </div>
    </Link>
  )
}
