import React, { useState, useEffect } from 'react';
import ThemeCard from './ThemeCard';
import ThemeManager from "../modules/ThemeManager";


const ThemeList = props => {
  const [themes, setThemes] = useState([]);

  const getThemes = () => {
    return ThemeManager.getAll().then(themesFromAPI => {
      setThemes(themesFromAPI)
    });
  };

  useEffect(() => {
    getThemes();
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

export default ThemeList;