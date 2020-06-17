import React, { useState } from "react"


const Register= props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
    props.history.register(user);
  }

  return (
    <form onSubmit={handleRegister}>
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
        <button type="register">Create new account</button>
      </fieldset>
    </form>
  );
};

export default Register;