import React from 'react';
import {NavLink} from "react-router-dom"

const Home = () => {

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <NavLink to={"/login"} className="mx-2 mt-5">
                <button type="button" className="btn btn-primary mt-5">
                    Login
                </button>
            </NavLink>
            <NavLink to={"/register"} className="mxt-2 mt-5">
                <button type="button" className="btn btn-primary mt-5">
                    Register
                </button>
            </NavLink>
        </div>
    );
};

export default Home;
