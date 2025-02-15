import { auth, db } from '../scripts/firebase';
import { useState } from 'react';
import { ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

function AddPfp(){
    return(
        <div className="pfpContainer">
            <div className="pfpTitle">Change your profile picture!</div>
            <img src="src/assets/profile.jpg" className="pfpImage"></img>
            <button className="addButton">+</button>
            <button className="submitPfp">Submit</button>
        </div>
    )
}

export default AddPfp