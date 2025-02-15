import React from 'react';
import '../stylesheets/profile.css';

function ProfileTemplate2(){
    const aboutme = "Finding my calling wasn't easy. During college, I bounced between majors, feeling lost and unsure. It wasn't until I volunteered at a local after-school program that everything clicked. Seeing the spark in a child's eyes when they finally grasped a concept - that was my lightbulb moment. I realized that teaching wasn't just a career, it was my passion. Now, as an elementary school teacher, every day brings new challenges and joys. I strive to create a classroom where curiosity thrives and every student feels valued. My journey taught me that it's okay to not have all the answers right away. Sometimes, your true path reveals itself when you least expect it.";
    const job = "Elementary School Teacher"
    const interests = ["Reading", "Outdoor Education", "Art", "Child Psychology", "Gardening"];
    const name = "Sarah Thompson"
    const pfp = "https://www.chalkbeat.org/resizer/v2/EV42XEXNPRCZHGLMHIQJ7EP4JY.jpg?auth=dabd6f307781b525b7e20d46a5823b644d9048460672d2ba147fc8ad80b4136d&quality=85&width=400&height=509";
    const role = "Mentor";
    const email = "sthompson@email.com";
    const timeline = [
        {
            title: "Started College",
            date: "09/01/2010",
            description: "Began my journey at State University, unsure of my major.",
        },
        {
            title: "Volunteered at After-School Program",
            date: "03/15/2012",
            description: "First experience working with children, sparking my interest in education.",
        },
        {
            title: "Changed Major to Education",
            date: "01/10/2013",
            description: "Finally found my calling and switched my focus to Elementary Education.",
        },
        {
            title: "Graduated with Bachelor's in Education",
            date: "05/20/2015",
            description: "Completed my degree, excited to start my teaching career.",
        },
        {
            title: "First Teaching Position",
            date: "08/25/2015",
            description: "Began teaching 3rd grade at Sunshine Elementary School.",
        },
        {
            title: "Received 'Teacher of the Year' Award",
            date: "06/10/2020",
            description: "Recognized for my innovative teaching methods and dedication to students.",
        }
    ];

    function copy(){
        navigator.clipboard.writeText(email);
        alert("Copied email: " + email);
    }

    return(
        <div className="fullContainer">
            <div className="profileContainer">
                <div className="leftSide">
                    <div className="backgroundImage" style={{ backgroundImage: `url(${pfp})`}}>
                        <div className="name">{name}</div>
                        <div className="job">{job}</div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="infoSection role">
                        <h2 className="sectionTitle">Role</h2>
                        <p className="roleText" style={{"fontSize": "40px"}}>{role}</p>
                    </div>
                    <button className="getEmail" onClick={copy}>{email}</button>
                    <div className="infoSection interests">
                        <h2 className="sectionTitle">Interests</h2>
                        <ul className="interestsList">
                            {interests.map((interest, index) => (
                                <li key={index} className="interestItem" style={{"border": "solid 2px #a13737"}}>{interest}</li>
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
                            <div className="descDisp">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileTemplate2;
