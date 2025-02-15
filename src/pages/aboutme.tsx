import { auth, db } from '../scripts/firebase';
import { useState } from 'react';
import { ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

function AboutMe(){
    var user = auth.currentUser;
    const navigate = useNavigate();
    const [info, setInfo] = useState('');

    async function submitInfo(){
        if(user){
            update(ref(db, 'users/' + user.uid), {
                aboutme: info,
            }) 
            navigate("/Timeline");
        }else{
            alert("Not logged in");
        }
    }
    return(
        <div className="aboutMeContainer">
            <div className="listTheInterests" style={{fontSize: "40px"}}>What is your story?</div>
            <textarea className="aboutMeInput" value={info} onChange={(e) => setInfo(e.target.value)} placeholder="Type here..."></textarea>
            <button className="submitAboutMe" onClick={submitInfo}>Submit</button>
        </div>
    )
}

export default AboutMe