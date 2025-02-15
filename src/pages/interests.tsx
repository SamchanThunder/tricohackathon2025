import { auth, db } from '../scripts/firebase';
import { useState } from 'react';
import { ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

function Interests(){
    var user = auth.currentUser;
    const navigate = useNavigate();
    const interestList = ["Activism", "Animation", "Antiques", "Archaeology", "Artificial intelligence", "Astronomy", "Baking", "Basketball", "Beadwork", "Beer brewing", "Birdwatching", "Blogging", "Board games", "Botany", "Calligraphy", "Camping", "Candle making", "Card games", "Ceramics", "Chess", "Cloud computing", "Coffee roasting", "Collecting", "Community service", "Cooking", "Coins", "Creative writing", "Crocheting", "Cross-stitch", "Cybersecurity", "Cycling", "3D modeling", "Dancing", "Data science", "DIY projects", "Drawing", "Economics", "Electronics", "Embroidery", "Entomology", "Fishing", "Fitness", "Football", "Foreign languages", "Game development", "Gaming", "Gardening", "Geology", "Graphic design", "Hiking", "History", "Hunting", "Jewelry making", "Journalism", "Knitting", "Leatherworking", "Machine learning", "Martial arts", "Meditation", "Mentoring", "Metalworking", "Meteorology", "Mobile app development", "Mycology", "Networking", "Novel writing", "Origami", "Painting", "Paleontology", "Perfume making", "Philosophy", "Photography", "Playwriting", "Podcasting", "Poetry", "Politics", "Pottery", "Programming", "Psychology", "Puzzles", "Quilting", "Reading", "Robotics", "Running", "Screenwriting", "Sculpting", "Sewing", "Short story writing", "Singing", "Soap making", "Soccer", "Sociology", "Sports", "Stamps", "Swimming", "Tea blending", "Tennis", "Theology", "Traveling", "Tutoring", "Video editing", "Vlogging", "Volunteering", "Web design", "Weightlifting", "Wine tasting", "Woodworking", "Writing", "Yoga", "Zoology"];

    const [searchInput, setSearchInput] = useState('');
    const [interestsSet, setInterestsSet] = useState<string[]>([]);
    const [listInterests, setListInterests] = useState("Select your interests!");
    
    const filteredInterests = interestList.filter(item => 
        item.toLowerCase().includes(searchInput.toLowerCase())
    );

    function addInterest(item: string){
        var tempList = interestsSet;
        if(tempList.includes(item)){
            tempList = tempList.filter(interest => interest !== item);
        }else{
            tempList = [...tempList, item]
        }
        
        var text = "";
        for(var i = 0; i < tempList.length; i++){
            text += tempList[i].toString() + " | "
        }
        setListInterests(text.slice(0,-2));
        console.log(text);
        setInterestsSet(tempList);
    }

    async function interestsSubmit(){
        if(user){
            update(ref(db, 'users/' + user.uid), {
                interests: interestsSet,
            }) 
            navigate("/AboutMe");
        }else{
            alert("Not logged in");
        }
    }

    return(
        <div className="interestContainer">
            <div className="listTheInterests">{listInterests}</div>
            <input className="inputInterest" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search interests..."></input>
            <div className="scrollableInterests">
                {filteredInterests.map((item, index) => (
                    <button key={index} className="interestButton" onClick={() => addInterest(item)} style={{ minHeight: '50px'}}>
                        {item}
                    </button>
                ))}
            </div>
            <button className="submitInterests" onClick={interestsSubmit}>Submit</button>
        </div>
    )
}

export default Interests;