import React from 'react';

const CardCountrie = (props) => {
    const {flag, name, population, region, capital} = props.countrie;
    return ( 
        <div className="card-countrie">
            <div><img src={flag} alt=""/></div>
            <h3>{name}</h3>
            <p>{population}</p>
            <p>{region}</p>
            <p>{capital}</p>
        </div>
     );
}
 
export default CardCountrie;