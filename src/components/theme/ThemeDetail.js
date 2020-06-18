import React, { useState, useEffect } from 'react';
import ThemeManager from '../modules/ThemeManager';
import './ThemeDetail.css'

const ThemeDetail = props => {
  const [theme, setTheme] = useState({type: ""});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   ThemeManager.get(props.themeId)
      .then(theme => {
        setTheme({
          type: theme.type,
        });
        setIsLoading(false);
      });
  }, [props.themeId]);
  
//   const handleDelete = () => {
//     setIsLoading(true);
//     TeaManager.delete(props.teaId).then(() =>
//       props.history.push("/teas")
//     );
//   };

  return (
    <div className="card">
      <div className="card-content">
        <picture>
        </picture>
        <h3> Type: <span style={{ color: 'darkslategrey' }}>{theme.type}</span></h3>
        {/* <button type="button" disabled={isLoading} onClick={handleDelete}>
        </button> */}
      </div>
    </div>
  );
}

export default ThemeDetail;