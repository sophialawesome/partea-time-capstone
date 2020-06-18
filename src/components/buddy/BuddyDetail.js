import React, { useState, useEffect } from 'react';
import BuddyManager from '../modules/BuddyManager';
import './BuddyDetail.css'

const BuddyDetail = props => {
  const [buddy, setBuddy] = useState({ name: "", animalType: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from BuddyManager and hang on to the data; put it into state
    BuddyManager.get(props.buddyId)
      .then(buddy => {
        setBuddy({
          name: buddy.name,
          animalType: buddy.animalType
        });
        setIsLoading(false);
      });
  }, [props.buddyId]);
  
  const handleDelete = () => {
    //invoke the delete function in BuddyManger and re-direct to the buddy list.
    setIsLoading(true);
    BuddyManager.delete(props.buddyId).then(() =>
      props.history.push("/buddies")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{buddy.name}</span></h3>
        <p>Animal Type: {buddy.animalType}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        </button>
      </div>
    </div>
  );
}

export default BuddyDetail;