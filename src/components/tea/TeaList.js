import React, { useState, useEffect } from 'react';
import TeaCard from './TeaCard';
import TeaManager from "../modules/TeaManager";



const TeaList = props => {
  const [teas, setTeas] = useState([]);

  const getTeas = () => {
    return TeaManager.getAll().then(teasFromAPI => {
      setTeas(teasFromAPI)
    });
  };

  useEffect(() => {
    getTeas();
  }, []);

  const deleteTea = id => {
    TeaManager.delete(id)
        .then(() => TeaManager.getAll().then(setTeas));
};

return (
    <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/teas/new") }}>
            Select Tea
        </button>
        <div className="container-cards">
        {teas.map(tea =>
            <TeaCard
                key={tea.id}
                tea={tea}
                deleteTea={deleteTea} {...props}
            />
               
        )}
      </div>
    </section>

);
};

export default TeaList;