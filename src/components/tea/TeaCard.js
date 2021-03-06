import React from "react";
import { Link } from "react-router-dom";

const TeaCard = props => {
  return (
    <div className="card">
      <div className="card-content">
       <span> {props.tea.name} </span>
       <button type="button"
          onClick={() => props.history.push(`/teas/${props.tea.id}/edit`)}>
          Edit
        </button>
       <button type="button" onClick={() => props.deleteTea(props.tea.id)}>Remove Tea</button>
        <Link to={`/teas/${props.tea.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default TeaCard;