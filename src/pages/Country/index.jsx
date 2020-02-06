import React, { useEffect, useState, Fragment } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { CountryContainer, BackButton } from "./styles";

function Country({ match }) {
  // useEffect(() => {
  //   loadCountrie();
  // }, []);
  const [country, setCountry] = useState({});

  useEffect(() => {
    async function loadCountry() {
      const code = match.params.code.toLowerCase();

      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${code}`
      );
      const data = await response.json();

      setCountry(data[0]);
      console.log(data[0]);
    }
    loadCountry();
  }, []);

  return (
    <Fragment>
      <nav>
        <BackButton>
          <span>
            <FaArrowLeft />
          </span>
          Back
        </BackButton>
      </nav>

      <CountryContainer>
        <div className="container-img">
          <img src={country.flag} alt={`flag of ${country.name}`} />
        </div>
        <section className="data-container">
          <h1>{country.name}</h1>
          <div>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Native Name:<span>{/*country.altSpellings[1]*/}</span>
            </p>
            <p>
              Region: <span>{country.regions}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
          <div>
            <p>
              Top Level Domain: <span>{country.topLevelDomain}</span>
            </p>
            <p>
              Currencies: <span>{/*country.currencies[0].name*/}</span>
            </p>
            <p>
              Languages: <span>{/*country.languages[0].name*/}</span>
            </p>
          </div>
          <div>
            <p>Border Countries: </p>
          </div>
        </section>
      </CountryContainer>
    </Fragment>
  );
}

export default Country;
