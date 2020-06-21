import React from "react";
import { Link } from "react-router-dom";

const ThemeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
       <span> {props.theme.name} </span>
       <button type="button"
          onClick={() => props.history.push(`/themes/${props.theme.id}/edit`)}>
          Edit
        </button>
       <button type="button" onClick={() => props.deleteTheme(props.theme.id)}>Remove Theme</button>
        <Link to={`/themes/${props.theme.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ThemeCard;