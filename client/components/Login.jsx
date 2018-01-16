import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {LeftNav, MenuItem, AppBar} from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';
// import Syncano from 'syncano-client'
import {Redirect} from 'react-router';



class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginForm: {
                username: '',
                password: ''
            },
            redirectToNewPage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.handleMenuClick =this.handleMenuClick.bind(this);
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
        const { history } = this.props;

        s.post('rest-auth/login', {username: username, password: password})
        .then(user=> {
            console.log(user);
            s.setToken(user.token)
            console.log(history);
            this.setState({ redirectToNewPage: true })
            console.log(this.state);
        })
        .catch(() => console.log('Invalid username or password.'))
    }

    handleErrors (errors) {
        console.log(this.state);
        console.log(errors);
    }

    handleMenuClick(e) {
        e.preventDefault();
        // Show/Hide the LeftMenu
        this.refs.leftNav.toggle();
      }

    render () {
        const { loginForm, redirectToNewPage } = this.state;
        if (redirectToNewPage) {
            return (
            <Redirect to="/sockets"/>
            )
        }
        else
        {
            // const menuItems = [
                // { route: 'get-started', text: 'Get Started' },
                // { route: 'customization', text: 'Customization' },
                // { route: 'components', text: 'Components' },
                // {                // { type: MenuItem.Types.SUBHEADER, text: 'Resources' },

                //    type: MenuItem.Types.LINK,
                //    payload: 'https://github.com/callemall/material-ui',
                //    text: 'GitHub'
                // },
                // {
                //    text: 'Disabled',
                //    disabled: true
                // },
                // {
                //    type: MenuItem.Types.LINK,
                //    payload: 'https://www.google.com',
                //    text: 'Disabled Link',
                //    disabled: true
                // },
            //   ];
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <ValidatorForm ref="form" onSubmit={(event) => this.handleSubmit(event)} onError={errors => this.handleErrors(errors)} >
                        {/* <AppBar title="Login"  onLeftIconButtonClick={this.handleMenuClick} />
                        <LeftNav ref="leftNav" docked={false}  menuItems={menuItems} >
                            <MenuItem onTouchTap={this.closeLeftNav} value={'/'} primaryText="Home"/>
                        </LeftNav> */}
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
                        {/* <Link to="/sockets">TODO Sockets list</Link> */}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
    }
}

const style = {
    margin: 15,
};

export default Login;