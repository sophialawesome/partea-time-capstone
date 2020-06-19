import React, { useState, useEffect } from "react"
import PartyManager from "../modules/PartyManager"
import "./PartyForm.css"

const PartyEditForm = props => {
  const [party, setParty] = useState({ name: "",  date: "", theme: "", tea: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...party };
    stateToChange[evt.target.id] = evt.target.value;
    setParty(stateToChange);
  };

  const updateExistingParty = evt => {
    evt.preventDefault()
    setIsLoading(true);

    const editedParty = {
      id: props.match.params.partyId,
      name: party.name,
      date: party.date,
      theme: party.theme,
      tea: party.tea
    };

    PartyManager.update(editedParty)
      .then(() => props.history.push("/parties"))
  }

  useEffect(() => {
    PartyManager.get(props.match.params.partyId)
      .then(party => {
        setParty(party);
        setIsLoading(false);
      });
  }, []);

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
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="date"
            />
            <label htmlFor="date">Date</label>

            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="theme"
              placeholder="theme"
            />
             <label htmlFor="theme">Theme</label>

             <input
              type="text"
              required
              onChange={handleFieldChange}
              id="tea"
              placeholder="tea"
            />
             <label htmlFor="tea">Tea</label>
          </div>
          
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingParty}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default PartyEditForm