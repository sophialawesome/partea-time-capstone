import React, { useState } from "react"
import UserManager from "../modules/user/UserManager"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = () => {
    //e.preventDefault();
    props.setUser(credentials.id)
      props.history.push("/");
  }
  
  const setUserId = (event) => {
    event.preventDefault();
    UserManager.get(credentials.username)
    .then(userInfo => {credentials.id = userInfo[0].id
    handleLogin();
  })
   
   
  }

  return (
    <form onSubmit={setUserId}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="Username"
            required="" autoFocus="" />
          <label htmlFor="inputUsername">Username</label>

          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
        New user? Register <a href="./Register.js">here</a>!
      </fieldset>
    </form>
  );
};

export default Login;