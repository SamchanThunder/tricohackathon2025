import React from 'react';
import '../stylesheets/profile.css';

function ProfileTemplate3(){
    const aboutme = "I grew up in a typical suburban family, always the good kid in school and competitive in sports. Most of my friends aimed to be doctors or lawyers, but I never felt drawn to just one career. What I really looked forward to were trips to different places during summer and winter vacations. Looking back, I wish I had listened to myself more—maybe I wouldn’t have applied to law school but instead focused on building skills for remote work, like coding.\nTaking an unconventional path can feel scary—what if it doesn’t work out? What if I can’t go back? But once you start living in a way that truly excites you, things just seem to fall into place. I made a lifelong friend while working at an NGO for women’s rights, and now we travel together photographing wildlife in national parks. I’m a big believer that when you follow your passion, the universe helps you along the way.";
    const job = "Minimalist Nomad"
    const interests = ["Language learning", "Reading", "Photography", "Meditation"];
    const name = "Simone Johnson"
    const pfp = "https://www.boardgains.com/cdn/shop/articles/meditation_3.png?v=1683211895&width=2048";
    const role = "Mentor";
    const email = "simonethenomad@gmail.com";
    const timeline = [
        {
            title: "0–18 years old",
            date: "1990–2008",
            description: "I love learning languages and I realized early that I had knack for it. I speak French, Spanish, Arabic and Swahili",
            imgUrl: "",
        },
        {
            title: "18–22 years old",
            date: "2008–2012",
            description: "Went to Vassar College and majored in psychology; published a socio-anthropology research paper about how societal narratives shape dating, desirability politics, and marriage rates among Black women; volunteered at genealogy organizing of hispanic immigrants family and become a director of the program for immigrant worker legal right.",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSvqYse69QLHPQoNCIXwriZa1NBDjbdZT_g&s",
        },
        {
            title: "22–25 years old",
            date: "2012–2015",
            description: "I guess at some point I did want to be a lawyer for I dreamed it would be a powerful tool that protects vulnerable communities. I was extremely happy that I got into a top law school.",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOnOwOybDqjI26nwTk2IqCwNSp7zbnaVRkA&s",
        },
        {
            title: "25–28 years old",
            date: "2015–2018",
            description: "Started working in a law firm in New York, later promoted into associate attorney. I felt conflicted about defending clients they don’t believe in or working in areas that benefit large corporations over individuals.",
        },
        {
            title: "28–30 years old",
            date: "2018–2020",
            description: "‘Caribbean Women for Thriving’ reached out to me to be their new program’s law consultant. I quit my job and joined; I met my tarot teacher in Columbia. We went to Bali to meditate; I later relocated to Brazil because I always wanted to immerse myself in the Amazon rainforest for a while.",
            imgUrl: "https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2019-05/QmneQw2MTo.jpg",
        },
        {
            title: "30–33 years old",
            date: "2020–Present",
            description: "I fully transitioned into a location-independent life and traveled extensively, focusing on wildlife photography and NGO work/advocacy.",
            imgUrl: "",
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
                            <img src={exp.imgUrl} className="expImg"/>
                            <div className="descDisp">{exp.description}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="timelineSection">
                <h2 className="sectionTitle">Blog/Tips</h2>
                <div className="scrollableExperience">
                    <div className="blog">
                    Embarking on a nomadic lifestyle across various countries offers unparalleled experiences, but it also presents unique challenges, particularly concerning healthcare and insurance. Ensuring access to medical services and having appropriate insurance coverage is paramount for nomads. This guide delves into essential considerations and options to help you navigate healthcare and health insurance while living a transient life.
                    <p><b>Understanding the Necessity of Health Insurance for Nomads</b></p>
                    <p>While some countries provide public healthcare services, access for non-residents is often limited or comes with significant costs. Relying solely on local healthcare systems can be risky due to:</p>
                    <ul>
                        <li><b>Eligibility Restrictions:</b> Many national health services are exclusive to citizens or long-term residents.</li>
                        <li><b>Quality Variations:</b> The standard of care can differ widely between countries.</li>
                        <li><b>Financial Implications:</b> Out-of-pocket medical expenses can be exorbitant, especially in emergencies.</li>
                    </ul>
                    <p>Therefore, securing comprehensive health insurance tailored for a nomadic lifestyle is crucial to ensure access to quality care without facing financial hardships.</p>
                    <p><b>Types of Health Insurance Suitable for Nomads</b></p>
                    <ol type="I">
                    <li><b>International Health Insurance:</b> Designed for individuals living abroad for extended periods, these plans offer comprehensive coverage, including inpatient and outpatient care, emergency services, and sometimes wellness benefits. They provide the flexibility to receive treatment in multiple countries, making them ideal for nomads.</li>
                    <li><b>Travel Medical Insurance:</b> Typically intended for shorter durations, these policies cover emergency medical situations and evacuation but might exclude routine care. Some providers offer plans catering to long-term travelers, but it's essential to verify the extent of coverage.</li>
                    </ol>
                    <p><b>Key Features to Consider When Choosing a Plan</b></p>
                    <ul>
                    <li><b>Geographical Coverage:</b> Ensure the policy covers all the countries you plan to visit. Some plans might exclude specific regions or have limited networks.</li>
                    <li><b>Duration of Coverage:</b> Confirm that the policy duration aligns with your travel plans, whether it's several months or open-ended.</li>
                    <li><b>Medical Evacuation:</b>In case of severe illness or injury, coverage for medical evacuation to a facility equipped to provide appropriate care is vital.</li>
                    <li><b>Pre-existing Conditions:</b> Check if the policy covers chronic or pre-existing conditions, as some plans have exclusions or waiting periods.</li>
                    <li><b>Repatriation:</b> Coverage for returning to your home country for treatment or in case of death.</li>
                    <li><b>Deductibles and Premiums:</b> Balance the cost of premiums with out-of-pocket expenses to find a plan that fits your budget.</li>
                    </ul>
                    <p><b>Additional Considerations</b></p>
                    <ul>
                    <li><b>Local Health Insurance:</b> In some countries, obtaining local health insurance might be more cost-effective and provide better access to local healthcare facilities. Research the options available in each country you plan to reside in and assess whether local insurance can complement your international plan.</li>
                    <li><b>Telemedicine Services: </b>Some insurance providers offer telemedicine consultations, allowing you to seek medical advice remotely, which can be particularly useful when traveling in remote areas.</li>
                    <li><b>Stay Informed About Local Healthcare Systems:</b> Understanding the healthcare infrastructure of each country can help you make informed decisions about when to rely on local services and when to seek care elsewhere.</li>
                    </ul>
                    <p><b>Conclusion</b></p>
                    <p>Maintaining your health while leading a nomadic lifestyle requires proactive planning and the right insurance coverage. By assessing your healthcare needs, understanding the medical services available in your destinations, and selecting a suitable insurance plan, you can ensure that health concerns don't hinder your adventures. Always stay informed and prepared to navigate the complexities of healthcare across different countries.</p>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

export default ProfileTemplate3;
