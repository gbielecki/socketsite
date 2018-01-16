import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  import Login from './Login.jsx';
import Register from './Register.jsx';
import TodoApp from './TodoApp.jsx';


export default class Main extends React.Component {
    render() {
        return (
<main>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/sockets" component={TodoApp} />
            
          </main>
        )
    }
}