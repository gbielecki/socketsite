import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  
import Login from './Login.jsx';
import Register from './Register.jsx';


export default class App extends React.Component {
    render() {
        return (
        <Router>
        <div className="container">
            <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>

          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
        </div>
          </Router>
            // <div className="container" style={{textAlign: 'center'}}>
            // <h1>Hello Worlds </h1>
            // </div>
        );
    }
}
