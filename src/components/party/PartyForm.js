import React, { useState, useEffect } from 'react';
import PartyManager from '../modules/PartyManager';
import './PartyForm.css'
import Checkbox from '../buddy/BuddyCheckbox';
import BuddyManager from '../modules/BuddyManager';

const PartyForm = props => {
  const [party, setParty] = useState({ 
  name: "", 
  date: "", 
  theme: "", 
  tea: "", 
  partyBuddy: "" });
  
  const [isLoading, setIsLoading] = useState(false);
  const [buddies, setBuddies] = useState([])
  const [buddy1, setBuddy1] = useState(false)
  const [buddy2, setBuddy2] = useState(false)
  const [buddy3, setBuddy3] = useState(false)
  const [buddy4, setBuddy4] = useState(false)

  const handleFieldChange = evt => {
    const stateToChange = { ...party };
    stateToChange[evt.target.id] = evt.target.value;
    setParty(stateToChange);
  };

  const constructNewParty = evt => {
    evt.preventDefault();
    if (party.name === "" || party.date === "" || party.theme === "" || party.tea === "" || party.partyBuddy === "") {
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

  useEffect(() => {
    BuddyManager.getAll().then(buddies => {
      let buddiesArr = buddies
      setBuddies(buddiesArr)
      console.log(buddiesArr);
      
    })
  }, [])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
          <label htmlFor="name">Party Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="name"
            />
          
          <label htmlFor="date">Date</label>
            <input
              type="date"
              required
              onChange={handleFieldChange}
              id="date"
              placeholder="date"
            />
            
            
            
            <label for="buddy">Buddy</label> <br />
            <label>Kirby</label>
            <input value={buddies[0]} type='checkbox' checked={buddy1}
              onChange={(() => { setBuddy1(!buddy1)})} /> 
            <label>Teddy Roosevelt</label>
            <input value={buddies[1]} type='checkbox' checked={buddy2} 
              onChange={(() => { setBuddy2(!buddy2)})} /> 
            <label>Babe</label>
            <input value={buddies[2]} type='checkbox' checked={buddy3} 
              onChange={(() => { setBuddy3(!buddy3)})} />
            <label>Sir William Percy James Frogginsworth III</label>
            <input value={buddies[3]} type='checkbox' checked={buddy4} 
              onChange={(() => { setBuddy4(!buddy4)})} /> 
            {/* {buddies.map(buddy => (
              <div key={buddy.id} className='checkboxes'>
                <label>{buddy.name}</label>
                <input 
                  type='checkbox' 
                  key={buddy.id} 
                  id={`buddy-${buddy.id}`
                  value={buddy}
                }></input>
              </div>
            ))} */}
       
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
            

            <label htmlFor="tea">Tea  </label>
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
              onClick={() => {
                constructNewParty()
                }}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default PartyForm