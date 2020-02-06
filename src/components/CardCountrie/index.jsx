import React from 'react';

import { Card } from './style'

const CardCountrie = (props) => {
    const {flag, name, population, region, capital} = props.countrie;
    return ( 
        <Card>
            <div>
                <img src={flag} alt=""></img>
            </div>
            <div className="country-info">
                <h3>{name}</h3>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </Card>
     );
}
 
export default CardCountrie;