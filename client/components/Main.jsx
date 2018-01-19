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
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render() {
        return (
<main>
            {/* <Route exact path="/" component={Login} loginCallback={this.loginCallback } /> */}
            <Route exact path="/" render={((props) => (<Login {...props} logged={this.props.logged} loginCallback={this.props.loginCallback} />))} /> 
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} loginCallback={this.loginCallback} />
            <Route path="/sockets" component={TodoApp} />
            
          </main>
        )
    }
}