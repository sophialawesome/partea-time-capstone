import React, { useState } from 'react';
import PartyManager from '../modules/PartyManager';
import './PartyForm.css'
import Checkbox from '../buddy/BuddyCheckbox';

const PartyForm = props => {
  const [party, setParty] = useState({ name: "", date: "", theme: "", tea: "", partyBuddy: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...party };
    stateToChange[evt.target.id] = evt.target.value;
    setParty(stateToChange);
  };

  const constructNewParty = evt => {
    evt.preventDefault();
    if (party.name === "" || party.date === "" || party.theme === "" || party.tea === "") {
      window.alert("Please input the name of your tea party :)");
    } else {
      setIsLoading(true);
      //Create the party and redirect user to party list
      const assignedBuddy = {
        ...party, partyBuddy: party.buddyId
      }
      PartyManager.post(party, assignedBuddy)
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
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="date"
            />
            <label htmlFor="date">Date</label>

            <label for="buddy">Buddy</label>

            {/* <select required
              onChange={handleFieldChange}
              name="buddy" id="buddy">
              <option defaultValue>Select Buddy</option>
              <option value="Kirby">Kirby</option>
              <option value="TeddyTalk">TeddyTalk</option>
            </select> */}

            <Checkbox

            />

    

            {/* {/* 
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
              <option value="WinterWonderland">Winter Wonderland</option>
              <option value="TropicalParadise">Tropical Paradise</option>
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
              onClick={constructNewParty}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default PartyForm