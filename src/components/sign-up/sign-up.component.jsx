import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords dont match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
        } catch (error) {
            console.log('create user error', error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-up'>
            <h2 className='title'>I want to sign up</h2>
            <span>Sign up with your email and password</span>
            <form className='sign=up-form' onSubmit={this.handleSubmit}>
                <FormInput label='DisplayName' type="text" name="displayName" value={this.state.displayName} required handleChange={this.handleChange}/>
                <FormInput label='Email' type="email" name="email" value={this.state.email} required handleChange={this.handleChange}/>
                <FormInput label='Password' type="password" name="password" value={this.state.password} required handleChange={this.handleChange}/>
                <FormInput label='Confirm Password' type="password" name="confirmPassword" value={this.state.confirmPassword} required handleChange={this.handleChange}/>
                <div className='button'>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </div>
            </form>
        </div>
        )
    }

}

export default SignUp;