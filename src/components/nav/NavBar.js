import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {

    const handleLogout = () => {
        props.clearUser();
        props.history.push('/');
    }

    return (
        <header>
            <h1 className="site-title">
                Partea Time
        <br />
                <small>Let's have a partea!</small>
            </h1>
            <nav>
                <ul className="container">
                    <li>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    {props.hasUser
                        ?
                        <li>
                            <Link className="nav-link" to="/parties">
                                Parties
                        </Link>
                        </li>
                        : null
                    }
                    {props.hasUser
                        ?
                        <li>
                            <Link className="nav-link" to="/buddies">
                                Buddies
                        </Link>
                        </li>
                        : null
                    }
                    {props.hasUser
                        ?
                        <li>
                            <Link className="nav-link" to="/teas">
                                Teas
                        </Link>
                        </li>
                        : null
                    }
                    {props.hasUser
                        ?
                        <li>
                            <Link className="nav-link" to="/themes">
                                Themes
                        </Link>
                        </li>
                        : null
                    }

                    {props.hasUser
                        ? <li>
                            <span className="nav-link" onClick={handleLogout}> Logout </span>
                        </li>
                        : <li>
                            <Link className="nav-link" to="/login"> Login </Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default withRouter(NavBar);