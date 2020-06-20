import React, { useState, useEffect } from 'react';
import TeaManager from '../modules/TeaManager';
import './TeaDetail.css'

const TeaDetail = props => {
  const [tea, setTea] = useState({ name: "", type: "", flavorDescription: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   TeaManager.get(props.teaId)
      .then(tea => {
        setTea({
          name: tea.name,
          type: tea.type,
          flavorDescription: tea.flavorDescription,
        });
        setIsLoading(false);
      });
  }, [props.teaId]);
  
  const handleDelete = () => {
    setIsLoading(true);
    TeaManager.delete(props.teaId).then(() =>
      props.history.push("/teas")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3> Name: <span style={{ color: 'darkslategrey' }}>{tea.name}</span></h3>
        <p>  Type: {tea.type}</p>
        <p>  Flavor Description: {tea.flavorDescription}</p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
        </button>
      </div>
    </div>
  );
}

export default TeaDetail;