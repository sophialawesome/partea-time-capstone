import React, { useState, useEffect } from 'react';
import PartyCard from './PartyCard';
import PartyManager from "../modules/PartyManager";
import PartyForm from "./PartyForm";

const PartyList = props => {
  // The initial state is an empty array
  const [parties, setParties] = useState([]);

  const getParties = () => {
    // After the data comes back from the API, 
    //  use the setParties function to update state
    return PartyManager.getAll().then(partiesFromAPI => {
        console.log(partiesFromAPI)
      setParties(partiesFromAPI)
    });
  };

  // got the locations from the API on the component's first render
  useEffect(() => {
    getParties();
  }, []);

  const deleteParty = id => {
    PartyManager.delete(id)
        .then(() => PartyManager.getAll().then(setParties));
};

return (

    //add this button above your display of party cards
    <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/parties/new") }}>
            Create Party
        </button>
        <div className="container-cards">
         {parties.map(party =>
            <PartyCard
                key={party.id}
                party={party}
                deleteParty={deleteParty} />
        )} 
    </div>
    </section>

);
};

export default PartyList;