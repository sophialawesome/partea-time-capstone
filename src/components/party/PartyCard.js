import React from "react";
import { Link } from "react-router-dom";

const PartyCard = props => {
  return (
    <div className="card">
      <div className="card-content">
       <span> {props.party.name} </span>
       <button type="button" onClick={() => props.deleteParty(props.party.id)}>Remove Party</button>
        <Link to={`/parties/${props.party.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PartyCard;