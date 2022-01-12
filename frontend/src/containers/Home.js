import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const auth = useSelector((state) => state.auth);
    return (
        <div className='container'>
            <div className='p-5 mt-5 mb-4 bg-light rounded-3'>
                <div className='container-fluid py-5'>
                    <h1 className='display-5 fw-bold'>Welcome to Auth System</h1>
                    <p className='col-md-8 fs-4'>
                        This is a authentication system built using Ddjango Rest Framework and
                        React.
                    </p>

                    {!auth.isAuthenticated && (
                        <>
                            <p>Click the login Button</p>
                            <Link className='btn btn-primary btn-lg' to='/login' role='button'>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
