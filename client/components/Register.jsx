import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            formData: {
                first_name:'',
                last_name:'',
                email:'',
                repeatPassword:'',
                password:''
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    componentWillMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.formData.password) {
                return false;
            }
            return true;
        });
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
    
    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit(event) {
        console.log('halo')
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

    handleErrors (errors) {
        console.log(errors);
    }

    render(){
        const { formData, repeatPassword, submitted } = this.state;
        return(
            <div>
                <MuiThemeProvider>
                    <div> 
                        <ValidatorForm ref="form" onSubmit={(event) => this.handleSubmit(event)} onError={errors => this.handleErrors(errors)} >
                        <AppBar title="Register" />
                        <TextValidator hintText="enter your First Name" value={formData.first_name} floatingLabelText="First Name"  name="first_name"
                        validators={['required']} errorMessages={['this field is required']} onChange ={this.handleChange}  value={formData.first_name}/>
                        <br/>
                        <TextValidator hintText="enter your Last Name" value={formData.last_name} floatingLabelText="Last Name"  name="last_name"
                        validators={['required']} errorMessages={['this field is required']} onChange ={this.handleChange} value={formData.last_name}/>
                        <br/>
                        <TextValidator hintText="enter your email" value={formData.email} floatingLabelText="Email" validators={['required', 'isEmail']} 
                            errorMessages={['this field is required', 'email is not valid']} name="email" onChange ={this.handleChange} />
                        <br/>
                        <TextValidator hintText="enter your password"  value={formData.password} floatingLabelText="Password" name="password" type="password"
                            validators={['required']} errorMessages={['this field is required']}  onChange ={this.handleChange} value={formData.password} />
                        <br/>
                        <TextValidator hintText="repeat your password" floatingLabelText="Repeat Password" name="repeatPassword" type="password"
                            validators={['isPasswordMatch', 'required']} errorMessages={['password mismatch', 'this field is required']}   onChange ={this.handleChange}
                            value={formData.repeatPassword} />
                        <br/>
                        <RaisedButton label="Submit" type="submit" primary={true} style={style} />
                        </ValidatorForm>
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
