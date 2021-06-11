import React from 'react';
import {useParams, Redirect} from 'react-router-dom';
import dogFilters from './helper';
import { v4 as uuidv4 } from 'uuid';
import './DogDetails.css';

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    const dog = dogFilters(name, dogs);

    console.log(dog);

    const dogInfo = dog === undefined ? <Redirect path='/dogs'/> : <div>
        <h3>Name: {dog.name}</h3>
        <h3>Age: {dog.age}</h3>
        {dog.facts.map(fact => <p key={uuidv4()}>{fact}</p>)}
        <img className="dog-detail-img" src={dog.src} alt={dog.name} />
    </div>

    return (
        <div>
            {dogInfo}
        </div>
    )
}

export default DogDetails;