import React from 'react';
import {Link} from 'react-router-dom';
import "./DogList.css";

const DogList = ({dogs}) => {
    console.log(dogs);
    
    return (
        <div className="dog-list">
            {dogs.map(dog => (<Link key={dog.name} to={`/dogs/${dog.name}`}><img src={dog.src} alt={dog.name} /></Link>))};
        </div>
    )
}

export default DogList;