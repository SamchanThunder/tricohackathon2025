import React from 'react';
import '../stylesheets/Header.css';
import logo from '../assets/logo.svg';
import leave from '../assets/leave.svg';
import searchIcon from '../assets/search.svg';
import signOutIcon from '../assets/signout.svg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../scripts/firebase';

export function Header() {
    const navigate = useNavigate();
    const user = auth.currentUser;

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <div className="nav-buttons">
                {user ? (
                    <>
                        <button onClick={() => navigate('/searchUsers')} className="icon-button">
                            <img src={searchIcon} alt="Search" />
                        </button>
                        <button onClick={() => navigate('/Settings')} className="icon-button">
                            <img src={signOutIcon} alt="Settings" />
                        </button>
                        <button onClick={() => navigate('/leave')} className="icon-button">
                            <img src={leave} alt="leave" />
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => navigate('/signup')} className="text-button">Sign Up</button>
                        <button onClick={() => navigate('/signin')} className="text-button">Sign In</button>
                    </>
                )}
            </div>
        </header>
    );
}
