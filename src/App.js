import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { CountryContext } from './Context/Countrycontextprovider';
import Home from './Pages/Home';
import CountryPage from './Pages/CountryPage';


function App() {
  const { darkmode } = useContext(CountryContext)
  
  return (
        <main className={darkmode ? 'dark' : 'light'}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/country/' element={<CountryPage />}></Route>
          </Routes>
          
        </main>
  );
}

export default App;
