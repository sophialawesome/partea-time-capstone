import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ParteaTime from "./components/ParteaTime";


ReactDOM.render(
  <Router>
    <ParteaTime />
  </Router>,
  document.getElementById('root')
);

