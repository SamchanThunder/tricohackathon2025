import { auth, db } from '../scripts/firebase';
import { ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

function UserRole(){
    var user = auth.currentUser;
    const navigate = useNavigate();

    async function mentorSubmit(){
        if(user){
            await update(ref(db, 'users/' + user.uid), {
                role: "Mentor"
            }) 
            navigate("/Jobs");
        }else{
            alert("Not logged in");
        }
    }
    async function menteeSubmit(){
        if(user){
            update(ref(db, 'users/' + user.uid), {
                role: "Mentee"
            }) 
            navigate("/Jobs");
        }else{
            alert("Not logged in");
        }
    }
    return(
        <div id="ButtonContainer">
            <div className="role-option">
                <img src="src/assets/mentor.png" alt="Mentor icon" />
                <button onClick={mentorSubmit}>
                    Mentor
                </button>
                <p><b>Become a mentor and share your knowledge</b></p>
            </div>
            <div className="role-option">
                <img src="src/assets/mentee.png" alt="Mentee icon" style={{position: 'relative', left: '15px'}}  />
                <button onClick={menteeSubmit}>
                    Mentee
                </button>
                <p><b>Become a mentee and learn from others</b></p>
            </div>
        </div>
    )
}

export default UserRole