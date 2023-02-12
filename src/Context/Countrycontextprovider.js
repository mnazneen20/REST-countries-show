import React, { createContext } from 'react'
export const CountryContext = createContext(null);

export default function Countrycontextprovider(props) {

    const [darkmode, setdarkmode] = React.useState(false);
    const [loading, setloading] = React.useState(true)
    const [allcountries, setallcountries] = React.useState([]);
    const [path, setpath] = React.useState('https://restcountries.com/v3.1/all')
    const [selected, setselected] = React.useState({});

    React.useEffect(() => {
      // fetching the data for different inputs changing the paths and handling errors
        async function fetchdata(){
          // path is default set to all, to get list of all countries
            const response = await fetch(path);
            if (response.status >= 200 && response.status <= 299) {
              const jsonResponse = await response.json();
              // for getting proper response, setting the returned value to the country state
              setallcountries(jsonResponse);
              
              // after receiving data loading is set to false
              setloading(false);
            } else {
              // handling ErrorS
              // for no response from the api server, emptied the country state and showed no data found
              setallcountries([]);

              // after receiving data loading is set to false
              setloading(false);
              console.log('error occured')
              console.log(response.status, response.statusText);
            }
        }
      // executing the fetch operation
      fetchdata();

    }, [path])

    // function fetchonecountry(path){
    //   fetch(path)
    //   .then(res => res.json)
    //   .then(res => setselected(res[0]))
    // }

    // sending all the context values to all the other components
    const contetextvalue = { path, setpath, allcountries, setallcountries, darkmode, setdarkmode, loading, selected, setselected }
  return (
    <CountryContext.Provider value={contetextvalue}>{props.children}</CountryContext.Provider>
  )
}
