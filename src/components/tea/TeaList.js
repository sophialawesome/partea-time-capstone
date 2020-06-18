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

//   const deleteTea = id => {
//     TeaManager.delete(id)
//         .then(() => TeaManager.getAll().then(setTeas));
// };

// return (
//     <section className="section-content">
//         <button type="button"
//             className="btn"
//             onClick={() => {props.history.push("/parties/new") }}>
//             Create Party
//         </button>
//         <div className="container-cards">
//         {/* {parties.map(party =>
//             <PartyCard
//                 key={party.id}
//                 party={party}
//                 deleteParty={deleteParty} />
//         )} */}
//     </div>
//     </section>

// );
};

export default TeaList;