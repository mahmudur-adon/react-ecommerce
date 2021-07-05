import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDeafault();
        this.setState({email: '', password: ''})
    };

    handleChange = event => {
        const {value,name}=event.target;
        this.setState({ [name]: value})
    }

    render(){
        return (
          <div className="sign-in">
            <h2>I Already Have An Account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                label="Email"
                handleChange={this.handleChange}
                required
              />
              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                label="Password"
                handleChange={this.handleChange}
                required
              />
              <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  {"        "} Sign in with Google {"  "}
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;