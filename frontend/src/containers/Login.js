import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import axios from "axios";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };
    // goolge login
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get("auth/o/google-oauth2/?redirect_uri=http://localhost:8000");
            window.location.replace(res.data.authorization_url);
        } catch (err) {}
    };
    // is the user authenticated
    // then redirect them to home page
    if (isAuthenticated) {
        return <Redirect to='/' />;
    }

    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your account</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary'>Login</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue with Google
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
