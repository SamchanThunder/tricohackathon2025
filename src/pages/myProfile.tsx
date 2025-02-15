import React, { useState, useEffect } from 'react';
import { auth, db } from '../scripts/firebase';
import { ref, get } from "firebase/database";
import '../stylesheets/profile.css';

interface Experience {
    title: string;
    date: string;
    description: string;
    imgUrl: string;
}

function MyProfile() {
    const [aboutme, setAboutme] = useState('');
    const [job, setJob] = useState('');
    const [interests, setInterests] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [pfp, setPfp] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [timeline, setTimeline] = useState<Experience[]>([]);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            retrieveUserData(user.uid);
        }
    }, []);

    function retrieveUserData(uid: string) {
        const userRef = ref(db, 'users/' + uid);
        get(userRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    setAboutme(userData.aboutme);
                    setJob(userData.job);
                    setInterests(userData.interests);
                    setName(userData.name);
                    setPfp(userData.pfp);
                    setRole(userData.role);
                    setEmail(userData.email);

                    if (userData.timeline && Array.isArray(userData.timeline.experiences)) {
                        setTimeline(userData.timeline.experiences);
                    }else {
                        console.error("Timeline experiences is not an array");
                        setTimeline([]);
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function copy() {
        navigator.clipboard.writeText(email);
        alert("Copied email: " + email);
        return false;
    }

    return (
        <div className="fullContainer">
            <div className="profileContainer">
                <div className="leftSide">
                    <div className="backgroundImage" style={{ backgroundImage: `url(${pfp})` }}>
                        <div className="name">{name}</div>
                        <div className="job">{job}</div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="infoSection role">
                        <h2 className="sectionTitle">Role</h2>
                        <p className="roleText" style={{ fontSize: "40px" }}>{role}</p>
                    </div>
                    <button className="getEmail" onClick={copy}>{email}</button>
                    <div className="infoSection interests">
                        <h2 className="sectionTitle">Interests</h2>
                        <ul className="interestsList">
                            {interests.map((interest, index) => (
                                <li key={index} className="interestItem" style={{ border: "solid 2px #a13737" }}>{interest}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="sectionTitle">My Story</h2>
            <div className="storySec">
                {aboutme}
            </div>
            <div className="timelineSection">
                <h2 className="sectionTitle">Timeline</h2>
                <div className="scrollableExperience">
                    {timeline.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <h3>{exp.title}</h3>
                            <p>{exp.date}</p>
                            <img src={exp.imgUrl} className="expImg"/>
                            <div className="descDisp">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
