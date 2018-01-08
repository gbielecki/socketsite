import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:''
        }
    }

    handleClick(event) {
        const s = new SyncanoClient('falling-wildflower-6623');
        s.post('register/register', {firstName:this.state.first_name, lastName:this.state.last_name, email:this.state.email, password: this.state.password})
            .then(function(response){
                console.log(response);
                if(response.data.code == 200) {
                    console.log("Registration Successfull");
                }
                else {
                    console.log("Username does not exists");
                }
            });
    }

    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Register" />
                        <TextField hintTest="enter your First Name" floatingLabelText="First Name" onChage ={(event,newValue)=>
                        this.setState({first_name:newValue})}
                        />
                        <br/>
                        <TextField hintTest="enter your Last Name" floatingLabelText="Last Name" onChage ={(event,newValue)=>
                        this.setState({last_name:newValue})}
                        />
                        <br/>
                        <TextField hintTest="enter your email" floatingLabelText="Email" onChage ={(event,newValue)=>
                        this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField hintTest="enter your password" floatingLabelText="Password" onChage ={(event,newValue)=>
                        this.setState({password:newValue})}
                        />
                        <br/>
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
  export default Register;
