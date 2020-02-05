import React, { useState, useEffect } from 'react';

import CardCountrie from '../../components/CardCountrie'

const Home = () => {
    const [ allCountries, setAllCountries ] = useState([])



    async function loadCountries(){
        const url="https://restcountries.eu/rest/v2/all"
        const response = await fetch(url)
        const data = await response.json()
        setAllCountries(data)
    }
    loadCountries()
    return (
        allCountries.map(countrie => {
            return (<CardCountrie countrie={countrie}/>) 
        })
    );
}
 
export default Home;