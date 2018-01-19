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
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';


const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, logged: true };
    case 'LOGOUT':
      return { ...state, logged: false };
    default:
      return state;
    }
};
    
const store = createStore(reducer, { logged: false });

export default class AppAndRoute extends React.Component {
    render() {
        return (
          <div>
          <Provider store={store}>
            <Router history={ browserHistory }>
              <div className="container">
                <App />
              </div>
            </Router>
           </Provider>
          </div>
        );
    }
}



