import React, { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './navbar.css'
import { CountryContext } from '../Context/Countrycontextprovider';

export default function Navbar() {
  const { darkmode, setdarkmode } = useContext(CountryContext)
  return (
    <nav>
        <h1>Where in the world?</h1>
        <div className="mode-controller" onClick={()=> setdarkmode(prev => !prev)}>
            <p>{darkmode ?  <LightModeIcon /> : <DarkModeIcon />}</p>
            <p><b>{darkmode ?  'Light' : 'Dark'} Mode</b></p>
        </div>
    </nav>
  )
}
