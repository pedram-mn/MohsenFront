import React, { useState, useNavigate, useContext } from 'react';
import {NavLink} from "react-router-dom"
import LoginApi from "./../api/LoginApi"
import SignupContext from "./../context/SignupContext"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [failed, setFailed] = useState(false)

    const navigate = useNavigate
    const info = useContext(SignupContext)

    const handleLogin = async () => {

        setLoading(true)
        const res = await LoginApi(username, password)
        console.log(res)

        if (res.status === 200) {
            info.setFirstName(res.data.firstName)
            info.setLastName(res.data.lastName)
            info.setEmail(res.data.email)
            info.username(res.data.username)
            info.setPassword(res.data.password)
            info.setAddress(res.data.address)

            navigate("/profile")
        } else if (res.status === 500) {
            setFailed(true)
        }

        setLoading(false)
    };

    return (
        <div className="mt-5 d-flex flex-column container w-50 h-50 justify-content-center align-items-center">
            <h2 className="text-center mb-5">Login</h2>
            <form className="justify-content-center align-items-center">
                <div className="my-2 form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                      className="form-control mt-2"
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="my-2 form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        className="form-control mt-2"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {
                    failed && <small className={"text-danger mt-1"}>Authentication failed!</small>
                }
                <div className="d-flex justify-content-center align-items-center">
                    <button disabled={loading} type="button" className="btn btn-primary mt-3" onClick={handleLogin}>
                        Login
                    </button>
                </div>
                
            </form>
            <NavLink to={"/register"} className="mt-2 text-dark"><small>Not a member yet?</small></NavLink>
        </div>
    );
};

export default Login;
