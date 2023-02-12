import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Countrycontextprovider from './Context/Countrycontextprovider';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Countrycontextprovider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Countrycontextprovider>
);

