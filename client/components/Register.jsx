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
        s.post('registration/registration', {firstName:this.state.first_name, lastName:this.state.last_name, email:this.state.email, password: this.state.password})
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
                        <TextField hintText="enter your First Name" floatingLabelText="First Name" onChange ={(event,newValue)=>
                        this.setState({first_name:newValue})} />
                        <br/>
                        <TextField hintText="enter your Last Name" floatingLabelText="Last Name" onChange ={(event,newValue)=>
                        this.setState({last_name:newValue})} />
                        <br/>
                        <TextField hintText="enter your email" floatingLabelText="Email" onChange ={(event,newValue)=>
                        this.setState({email:newValue})}  />
                        <br/>
                        <TextField hintText="enter your password" floatingLabelText="Password" onChange ={(event,newValue)=>
                        this.setState({password:newValue})} />
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
