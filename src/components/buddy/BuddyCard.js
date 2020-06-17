import React from "react";
import { Link } from "react-router-dom";

const BuddyCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-buddyname">
            {props.buddy.name}
          </span>
        </h3>
        <p>Type:{props.buddy.animalType}</p>
        <button type="button" onClick={() => props.deleteBuddy(props.buddy.id)}>Remove Buddy</button>
        <Link to={`/buddies/${props.buddy.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BuddyCard;