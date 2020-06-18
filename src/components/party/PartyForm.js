import React, { useState } from 'react';
import PartyManager from '../modules/PartyManager';
import './PartyForm.css'

const PartyForm = props => {
  const [party, setParty] = useState({ name: "", date: "", theme: "", tea: ""  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...party};
    stateToChange[evt.target.id] = evt.target.value;
    setParty(stateToChange);
  };

  const constructNewParty = evt => {
    evt.preventDefault();
    if (party.name === "" || party.date === "" || party.theme === "" || party.tea === "") {
      window.alert("Please input the name of your tea party :)");
    } else {
      setIsLoading(true);
      // Create the party and redirect user to party list
      PartyManager.post(party)
        .then(() => props.history.push("/parties"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="name"
            />
            <label htmlFor="name">Party Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="date"
            />
            <label htmlFor="date">Date</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewParty}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default PartyForm