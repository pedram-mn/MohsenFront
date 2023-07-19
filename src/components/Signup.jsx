import React, { useState, useEffect, useContext, useNavigate } from 'react';
import {NavLink} from "react-router-dom"
import * as yup from "yup"
import SignupContext from "./../context/SignupContext"
import SignupApi from "./../api/SignupApi"

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [notProvided, setNotProvided] = useState(false);
    const [emailErrors, setEmailErrors] = useState([]);

    const navigate = useNavigate
    const info = useContext(SignupContext)

    useEffect(() => {
        setNotProvided(
            firstName.length === 0 ||
            lastName.length === 0 || 
            username.length === 0 || 
            password.length === 0 || 
            email.length === 0 ||
            address.length === 0
        )
    }, [
      firstName,
      lastName, 
      username, 
      password, 
      email,
      address
    ])

    const validation = async () => {
        const emailSchema = yup.object().shape({
            email: yup.string().email("your email format is wrong!")
        })

        try {
            await emailSchema.validate({email}, {abortEarly: false})
            return true
        } catch (error) {
            setEmailErrors(error.errors)
            return false
        }
    }

    const handleRegister = async () => {
        setLoading(true)
        const valid = await validation()
        if (valid) {

            const data = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                email: email,
                address: address
            }

            const res = await SignupApi(data)
            console.log(res)
            
            info.setFirstName(res.data.firstName)
            info.setLastName(res.data.lastName)
            info.setEmail(res.data.email)
            info.username(res.data.username)
            info.setPassword(res.data.password)
            info.setAddress(res.data.address)
            
            navigate("/profile")
            
        }
        setLoading(false)
    }

    return (
        <div className="mt-5 d-flex flex-column container w-50 h-50 justify-content-center align-items-center">
            <h2 className="text-center mb-5">Register</h2>
            <form className="justify-content-center align-items-center">
                <div className="my-2 form-group">
                    <label htmlFor="firstName">Firstname:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="my-2 form-group">
                    <label htmlFor="lastName">Lastname:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
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
                <div className="my-2 form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {
                    emailErrors.map((error, index) =>
                        <small key={index} className={"text-danger mt-1"}>{error}</small>
                    )
                }
                <div className="my-2 form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        className="form-control mt-2"
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                
                <div className="d-flex justify-content-center align-items-center">
                    <button disabled={loading || notProvided} type="button" className="btn btn-primary mt-3" onClick={handleRegister}>
                        Register
                    </button>
                </div>
              
            </form>
            <NavLink to={"/login"} className="mt-2 text-dark"><small>Already have account?</small></NavLink>
        </div>
    );
};

export default Signup;
