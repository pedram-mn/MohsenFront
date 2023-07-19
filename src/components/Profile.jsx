import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupContext from "./../context/SignupContext"

const Profile = () => {
    
    const info = useContext(SignupContext)
 
    return (
        <div className="container mt-5">

            <div className="mt-4 d-flex">

                <div className="container">

                    <div className="form-group my-2">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="firstName"
                            value={info.firstName}
                            readOnly
                        />
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="lastName"
                            value={info.lastName}
                            readOnly
                        />
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control mt-2"
                            id="email"
                            value={info.email}
                            readOnly
                        />
                    </div>
                </div>
                <div className="container">

                    <div className="form-group my-2">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="username"
                            value={info.username}
                            readOnly
                        />
                    </div>

                    <div className="form-group my-2">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            className="form-control mt-2"
                            id="password"
                            value={info.password}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div className="form-group container my-2">
                <label htmlFor="address">Address:</label>
                <textarea
                    className="form-control mt-2"
                    id="address"
                    rows="2"
                    value={info.address}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Profile;
