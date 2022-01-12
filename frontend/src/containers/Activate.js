import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ match, verify }) => {
    const [verified, setVerified] = useState(false);

    const verify_account = (e) => {
        // e.preventDefault();
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setVerified(true);
    };
    // is the user authenticated
    // then redirect them to home page
    if (verified) {
        return <Redirect to='/' />;
    }

    return (
        <div className='container'>
            <div
                className='d-flex flex-column justify-content-center align-item-center'
                style={{ marginTop: "200px" }}
            >
                <h1>Verify Your Account</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: "50px" }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
