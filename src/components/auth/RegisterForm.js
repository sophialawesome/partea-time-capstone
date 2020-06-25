import React, { Component } from 'react';
import UserManager from "../modules/user/UserManager";

export default class RegisterForm extends Component {
   
 
    constructor(props) {
        //calls super to get access of all the Component attributes and methods
        super(props);

        this.state = {
            username: "",
            password: ""  

        }
        // const [user, setNewUser] = useState({ 
        //     username: "", 
        //     password:""
        //   });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //updates state value

        this.setState({
            //sets state value dynamically
            [event.target.name]: event.target.value

        });
    }

    handleSubmit(event) {
        UserManager.post("https://localhost:5002/users", {
           user: {
               username: this.state.username,
               password: this.state.password
           }
        },
           //third argument that gives the API permission to set the cookie within the client
           {withCredentials: true}
        ).then(response => {
            console.log("registration res", response);
        })
        .catch(error => {
            console.log("registration error", error);
        })
        event.preventDefault();
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleChange} required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange} required
                />
               

                <button type="submit">Register</button>
            </form>
        </div>);
    }
}
