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

  const deleteTheme = id => {
    ThemeManager.delete(id)
        .then(() => ThemeManager.getAll().then(setThemes));
};

return (
  <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {props.history.push("/themes/new") }}>
          Select Theme
      </button>
      <div className="container-cards">
      {themes.map(theme => 
          <ThemeCard
              key={theme.id}
              theme={theme}
              deleteTheme={deleteTheme} {...props}
          />
             
      )}
    </div>
  </section>

);
};

export default ThemeList;