import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './countrypage.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CountryContext } from '../Context/Countrycontextprovider'

export default function CountryPage() {
    // getting the value of selected element from the homepage or buttonclick
    const { selected } = useContext(CountryContext);


    const { name, population, region, subregion, capital, tld, currencies, languages, flags, borders } = selected

    // let getcurrency = '';
    // let getlang = '';

    // if(currencies && languages){
       const getcurrency = currencies[Object.keys(currencies)[0]]?.name
       const getlang = languages[Object.keys(languages)[0]]
    // }
    
    
    // console.log(name, population,region,subregion, capital,tld,languages)

    // console.log(selected)
  return (
    <div className='countrypage-container'>
        <Link to={'/'}>
        <div className="backbtn"><KeyboardBackspaceIcon /> Back</div>
        </Link>
        { JSON.stringify(selected) === '{}' ? 'Nothing to show..go to home'
        : 
            <div className="details">
                <div className="flagg">
                    <img src={flags.png} alt={`flag of ${name.common}`} />
                </div>
                <div className="text-details">
                    <div className="name">
                        <h1>{name.common}</h1>
                    </div>
                    <div className="lefttext">
                        <ul>
                            <li><b>Native Name:</b> {name.common}</li>
                            <li><b>Population:</b> {population}</li>
                            <li><b>Region:</b> {region}</li>
                            <li><b>Sub Region:</b> {subregion}</li>
                            <li><b>Capital:</b> {capital}</li>
                        </ul>
                    </div>
                    <div className="righttext">
                        <ul>
                            <li><b>Top Level Domain:</b> {tld}</li>
                            <li><b>Currencies:</b> {getcurrency}</li>
                            <li><b>Languages:</b> {getlang}</li>
                        </ul>
                    </div>
                    <div className="border-country">
                        <h4>Border Countries: {borders && borders.map(m => <button key={m} className='brdrbtn'>{m}</button> )}</h4>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
