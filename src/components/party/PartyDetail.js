import React, { useState, useEffect } from 'react';
import PartyManager from '../../modules/PartyManager';
import './PartyDetail.css'

const PartyDetail = props => {
  const [party, setParty] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed
        });
        setIsLoading(false);
      });
  }, [props.animalId]);
  
  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;