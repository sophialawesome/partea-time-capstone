import React, { useState, useEffect } from 'react';
import PartyManager from '../modules/PartyManager';
import './PartyDetail.css'

const PartyDetail = props => {
  const [party, setParty] = useState({ name: "", date: "", theme: "", tea: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   PartyManager.get(props.partyId)
      .then(party => {
        setParty({
          name: party.name,
          date: party.date,
          theme: party.theme,
          tea: party.tea
        });
        setIsLoading(false);
      });
  }, [props.partyId]);
  
  const handleDelete = () => {
    setIsLoading(true);
    PartyManager.delete(props.partyId).then(() =>
      props.history.push("/parties")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3> Name: <span style={{ color: 'darkslategrey' }}>{party.name}</span></h3>
        <p> Date: {party.date}</p>
        <p> Buddy: {party.buddy}</p>
        <p> Theme: {party.theme}</p>
        <p> Tea: {party.tea} </p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        </button>
      </div>
    </div>
  );
}

export default PartyDetail;