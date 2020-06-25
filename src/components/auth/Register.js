import React, { useState } from "react"
import UserManager from "../modules/user/UserManager";



const Register = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const createRegisteredUser = (e) => {
    e.preventDefault();

    if (credentials.username === "" || credentials.password === "") {
      window.alert("Remember to fill out the form!")
    }
    else {
      setIsLoading(true);
      UserManager.post(credentials)
        .then(props.setUser(credentials))
      props.history.push("/");
    }


  }

  return (
    <form onSubmit={handleFieldChange}>
      <fieldset>
        <h3>Create a new account here!</h3>
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
        <button type="submit" disabled={isLoading} onClick={createRegisteredUser}>Create new account</button>
      </fieldset>
    </form>
  );
};

export default Register;

