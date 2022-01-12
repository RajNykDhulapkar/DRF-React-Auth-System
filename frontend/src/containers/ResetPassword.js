import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth";

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
    });
    const { email } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };
    // is the user authenticated
    // then redirect them to home page
    if (requestSent) {
        window.alert("A mail has been sent to your email to confirm password reset");
        return <Redirect to='/' />;
    }

    return (
        <div className='container mt-5'>
            <h1>Request Password Reset</h1>

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

                <button className='btn btn-primary'>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
