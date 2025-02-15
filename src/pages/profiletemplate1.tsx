import React, { useState, useEffect } from 'react';
import '../stylesheets/profile.css';

function ProfileTemplate1(){
    const aboutme = "They say the best cakes tell a story, and I guess mine starts a little bittersweet. For as long as I can remember, I've found solace in the kitchen. Growing up, things weren't always easy. My family moved around a lot, and there were times when we didn't know where our next meal was coming from. But my grandma, bless her heart, always made sure we had something to celebrate, even if it was just a simple sugar cookie. She taught me that even in the darkest of times, a little sweetness can make all the difference. Now, as a cake decorator, I pour all that love and resilience into every creation. Each cake is a reminder that even from humble beginnings, something extraordinary can rise.";
    const job = "Cake Decorator"
    const interests = ["Cooking","Coffee roasting", "Crocheting", "Writing", "Singing"];
    const name = "Evan Rogers"
    const pfp = "https://www.threesquare.org/images/about-threesquare/managers/joe-leininger-threesquare.jpg";
    const role = "Mentor";
    const email = "erogers123@gmail.com";
    const timeline = [
        {
            title: "Discovered My Passion for Baking",
            date: "06/15/2005",
            description: "Baked my first cake with my grandma, realizing the joy it brought to our family during tough times.",
            imgUrl: "https://www.allrecipes.com/thmb/yqiW2Z8jZEUiN8IaMqDoRxbyOTQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-courtney-kassel-grandma-cake-7692809097974b1ea6327d3255e94274.jpg",
        },
        {
            title: "Graduated from Culinary School",
            date: "05/20/2015",
            description: "Completed my pastry arts program, specializing in cake decoration.",
            imgUrl: "",
        },
        {
            title: "Landed First Job as Assistant Baker",
            date: "07/01/2015",
            description: "Started working at 'Sweet Dreams Bakery', learning from experienced cake decorators.",
            imgUrl: "",
        },
        {
            title: "Bought my first car!",
            date: "04/08/2016",
            description: "Started working at 'Sweet Dreams Bakery', learning from experienced cake decorators.",
            imgUrl: "https://cdn.motor1.com/images/mgl/J41MJ/s3/5-cheapest-car-brands-to-buy.jpg",
        },
        {
            title: "Promoted to Head Cake Decorator",
            date: "03/15/2018",
            description: "Recognized for my creativity and attention to detail, took on lead role in cake design.",
        },
        {
            title: "Opened My Own Bakery",
            date: "09/01/2022",
            description: "Launched 'Rise & Shine Cakes', fulfilling my dream of owning a bakery that celebrates life's moments.",
            imgUrl: "https://images.thebusinessplanshop.com/2680/how-to-open-a-bakery.png",
        }
    ];
    

    function copy(){
        var copyText = email
        
        navigator.clipboard.writeText(copyText);
      
        alert("Copied email: " + copyText);
        return false;
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
                            <img src={exp.imgUrl} className="expImg"/>
                            <div className="descDisp">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfileTemplate1;