import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleClick(event) {
        const s = new SyncanoClient('falling-wildflower-6623');
        s.post('login/login', {username:this.state.username, password: this.state.password})
            .then(function(response){
                console.log(response);
                if(response.data.code == 200) {
                    console.log("Login Successfull");
                }
                else if(response.data.code == 204){
                    console.log("Username password do not match");
                }
                else {
                    console.log("Username does not exists");
                }
            });
    }

    render () {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login" />
                        <TextField hintText="Enter yout Username" floatingLabelText="Username" onChange = {(event,newValue) =>
                        this.setState({username:newValue})} />
                        <br />
                        <TextField hintText="Enter yout Password" floatingLabelText="Password" onChange = {(event,newValue) =>
                        this.setState({password:newValue})} />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
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