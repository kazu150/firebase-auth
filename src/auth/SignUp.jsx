import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';

const SignUp = ({history}) => {
    const { signup } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        signup(email.value, password.value, history);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Password" />
                </label>
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
}

export default withRouter(SignUp);