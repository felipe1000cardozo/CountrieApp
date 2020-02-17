import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const BorderCountries = ({ border }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${border
          .join(";")
          .toLowerCase()}`
      );
      const data = await response.json();
      setBorderCountries(data);
      if (data.status !== 400) {
        setLoading(true);
      }
    }

    load();
  }, [border]);

  return loading ? (
    <>
      {borderCountries.map(country => {
        return (
          <>
            <Link to={`/country/${country.alpha2Code}`}>{country.name}</Link>
          </>
        );
      })}
    </>
  ) : (
    <>No borders.</>
  );
};

export default withRouter(BorderCountries);
