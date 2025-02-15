import React, { useState, useEffect} from "react";
import { auth, db } from '../scripts/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from "firebase/database";
import '../stylesheets/signupin.css';
import {  useNavigate  } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    async function handleSignUp(e: React.FormEvent) {
        e.preventDefault();

        if(password !== confirmPassword) {
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await set(ref(db, 'users/' + userCredential.user.uid), {
                username: username,
                name: name,
            });
            console.log("User signed up successfully");
            navigate("/ChooseRole");
        } catch (error) {
            alert((error as Error).message);
        }
    }

    return (
        <div id="signUpBox">
            <form onSubmit={handleSignUp}>
                <div id="signUp">
                    <div id="already">Already have an account? <a href="/signin"><br></br>Sign In</a></div>
                    Email
                    <input type="email" id="signUpInput" name="myInput" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    Username
                    <input id="signUpInput" name="myInput" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    Full Name
                    <input id="signUpInput" name="myInput" value={name} onChange={(e) => setName(e.target.value)}/>
                    Password
                    <input type="password" id="signUpInput" name="myInput" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    Confirm Password
                    <input type="password" id="signUpInput" name="myInput" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button type="submit" id="signUpButton">SIGN UP</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
