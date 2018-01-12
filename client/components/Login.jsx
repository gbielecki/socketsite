import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';
// import Syncano from 'syncano-client'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginForm: {
                username: '',
                password: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    handleChange(event) {
        const { loginForm } = this.state;
        loginForm[event.target.name] = event.target.value;
        this.setState({ loginForm });
    }

    handleSubmit(event) {
        const { loginForm } = this.state;
        const s = new SyncanoClient('falling-wildflower-6623');
        const username = loginForm.username; const password=  loginForm.password;

        s.post('rest-auth/login', {username: username, password: password})
        .then(user=> {
            console.log(`Hello ${user.token}`)
            console.log(user);
            document.cookie = `token=${user.token}`;
        })
        .catch(() => console.log('Invalid username or password.'))
    }

    handleErrors (errors) {
        console.log(this.state);
        console.log(errors);
    }

    render () {
        const { loginForm } = this.state;
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <ValidatorForm ref="form" onSubmit={(event) => this.handleSubmit(event)} onError={errors => this.handleErrors(errors)} >
                        <AppBar title="Login" />
                        <TextValidator hintText="Enter yout Username" floatingLabelText="Username" name="username" onChange ={this.handleChange}
                         validators={['required']} errorMessages={['this field is required']}  value={loginForm.username} />
                        <br />
                        <TextValidator type="password" hintText="Enter yout Password" name="password" floatingLabelText="Password" onChange ={this.handleChange}
                         validators={['required']} errorMessages={['this field is required']} value={loginForm.password}/>
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} type="submit" /* onClick={(event) => this.handleClick(event)}*/ /> 
                        </ValidatorForm>
                        Don't have an account? <Link to="/register">Sign up</Link>
                        <br /><br />
                        <Link to="/sockets">TODO Sockets list</Link>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default Login;