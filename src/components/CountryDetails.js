import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { code } = useParams();

  const [data, updateData] = useState(null);

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${code}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        updateData(json);
      })
      .catch(err => console.log(err));
  }, [code]);

  if (data) {
    return <div>
      <h1>{data.name.common}</h1>
      <p>capital: {data.capital}</p>
      <img src={`https://countryflagsapi.com/png/${code}`} alt="flag" />
    </div>
  }
  else {
    return <div>
      <p>loading... if this takes too long something might be broken</p>
    </div>
  }
}

export default CountryDetails;