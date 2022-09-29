import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountriesList() {
  const [countryArray, setCountryArray] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then(res => res.json())
      .then(json => {
        setCountryArray(json);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>list of countries</h1>
      {countryArray.map((single) => {
        return (
          <Link to={`/countries/${single.alpha3Code}`}><h3>{single.name.common}</h3></Link>
        );
      })}
    </div>
  );
}

export default CountriesList;