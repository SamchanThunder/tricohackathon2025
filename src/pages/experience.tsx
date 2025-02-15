import { auth, db } from '../scripts/firebase';
import { useState } from 'react';
import { get, ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

interface Experience {
    title: string;
    date: string;
    description: string;
}

function Experience(){
    var user = auth.currentUser;
    const navigate = useNavigate();

    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [edit, setEdit] = useState(false);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    function openEdit(){
        setEdit(true);
    };

    function closeEdit(){
        setEdit(false);
    };

    function addExperience(){
        const newExperience = {
            title: title,
            date: date,
            description: description,
        }
        setExperiences(prevExperiences => [...prevExperiences, newExperience]);
        setTitle('');
        setDate('');
        setDescription('');
        setEdit(false);
    }

    async function submitExperiences() {
        if (user) {
            try {
                const timelineRef = ref(db, 'users/' + user.uid + '/timeline');
                
                await update(timelineRef, {
                    experiences
                });
    
                navigate("/");
            } catch (error) {
                console.error("Error updating experiences:", error);
                alert("Error updating experiences. Please try again.");
            }
        } else {
            alert("Not logged in");
        }
    }
    
    
    
    
    return(
        <div>
            <div className="experienceContainer">
                <div className="tltext">Your Timeline</div>
                <button className="addExperience" onClick={openEdit}>Add to Timeline</button>
                <div className="scrollableExperience">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3>{exp.title}</h3>
                            <p>{exp.date}</p>
                            <div className="descDisp">{exp.description}</div>
                        </div>
                    ))}
                </div>
                <button className="submitTimeline" onClick={submitExperiences}>Submit</button>
            </div>
            {edit && (<div className="inputExperience">
                <button className="closeInput" onClick={closeEdit}>X</button>
                <div className="titleExperience">Title</div>
                <input className="inputTitle" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Type here..."></input>
                <div className="titleExperience">Date</div>
                <input className="dateExperience" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <div className="titleExperience">Description</div>
                <textarea className="experienceType" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Type here..."></textarea>
                <button className="submitNewExperience" onClick={addExperience}>Submit</button>
            </div>)}
        </div>
    )
}

export default Experience
