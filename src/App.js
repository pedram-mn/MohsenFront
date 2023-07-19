import "./styles.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import Profile from "./components/Profile.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupContext from "./context/SignupContext";

export default function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    return (
        <SignupContext.Provider value={{
                      firstName: firstName,
                      setFirstName: setFirstName,

                      lastName: lastName,
                      setLastName: setLastName,

                      username: username,
                      setUsername: setUsername,

                      password: password,
                      setPassword: setPassword,

                      email: email,
                      setEmail: setEmail,

                      address: address,
                      setAddress: setAddress
                  }} >
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>                  
                    <Route path="/login" element={<Login/>}/>                  
                    <Route path="/register" element={<Signup/>}/>                  
                    <Route path="/profile" element={<Profile/>}/>                  
                </Routes>
            </BrowserRouter>
        </SignupContext.Provider>
    );
}
