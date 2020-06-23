import React, { useState, useEffect } from "react"
import PartyManager from "../modules/PartyManager"
import "./PartyForm.css"

const PartyEditForm = props => {
  const [party, setParty] = useState({ name: "", date: "", theme: "", tea: "" });
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
      buddy: party.buddy,
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

            <select required
              onChange={handleFieldChange}
              name="buddy" id="buddy">
              <option defaultValue>Select Buddy</option>
              <option value="Kirby">Kirby</option>
              <option value="TeddyTalk">TeddyTalk</option>
            </select>
            <label htmlFor="buddy">Buddy</label>

          {/*                         
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="theme"
              placeholder="theme"
            /> */}
             <label htmlFor="theme">Theme</label>

            <select required
              onChange={handleFieldChange}
              name="theme" id="theme">
              <option defaultValue>Select Theme</option>
              <option value="Birthday">Birthday</option>
              <option value="Amphibian">Amphibian</option>
              <option value="Winter Wonderland">Winter Wonderland</option>
              <option value="Tropical Paradise">Tropical Paradise</option>
            </select>

            {/* <input
              type="text"
              required
              onChange={handleFieldChange}
              id="tea"
              placeholder="tea"
            /> */}
            <label htmlFor="tea">Tea</label>

            <select required
              onChange={handleFieldChange}
              name="tea" id="tea">
              <option defaultValue>Select Tea</option>
              <option value="Birthday Cake">Birthday Cake</option>
              <option value="Peachy">Peachy</option>
              <option value="Chai">Chai</option>
              <option value="Coconutty">Coconutty</option>
              <option value="English Rose">English Rose</option>
            </select>
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