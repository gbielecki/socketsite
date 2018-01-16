import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { browserHistory} from 'react-router';
// import Login from './Login.jsx';
// import Register from './Register.jsx';
// import TodoApp from './TodoApp.jsx';
// import NavBarClass from './NavBar.jsx';
import App from './App.jsx';


export default class AppAndRoute extends React.Component {
    render() {
        return (
          <div>
            <Router history={ browserHistory }>
              <div className="container">
                <App />
              </div>
            </Router>
          </div>
        );
    }
}


