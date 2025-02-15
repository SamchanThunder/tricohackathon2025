import { auth, db } from '../scripts/firebase';
import { useState } from 'react';
import { ref, update} from "firebase/database";
import {  useNavigate  } from 'react-router-dom';
import '../stylesheets/signupin.css'

function Interests(){
    var user = auth.currentUser;
    const navigate = useNavigate();
    const interestList = ["Accountant", "Actuary", "Advertising Copywriter", "Aeronautical Engineer", "Agricultural Scientist", "Air Traffic Controller", "Airline Pilot", "Antique Appraiser", "Application Developer", "Architect", "Artificial Intelligence Engineer", "Athletic Trainer", "Audiologist", "Automotive Designer", "Ayurvedic Physician", "Biochemist", "Biomedical Engineer", "Blockchain Developer", "Business Consultant", "Cake Decorator", "Cardiovascular Technologist", "Chiropractor", "Childcare Worker", "Civil Engineer", "Clinical Laboratory Technician", "Clothing Store Manager", "Cloud Computing Specialist", "Columnist", "Community Health Worker", "Community Manager", "Computer Network Architect", "Computer Systems Analyst", "Computer Software Designer", "Conservation Officer", "Construction Manager", "Cost Estimator", "Credit Counselor", "Cryptologic Linguist", "Curator", "Cybersecurity Specialist", "Dance Instructor", "Data Scientist", "Database Administrator", "Dental Hygienist", "Dentist", "Design Engineer", "Detective", "Diagnostic Medical Sonographer", "Dietitian and Nutritionist", "Digital Marketer", "Diver", "Delivery Truck Driver", "Driving Instructor", "Ecologist", "Economist", "Electrician", "Elementary School Teacher", "Engineering and Architecture", "Entertainment Manager", "Environmental Engineer", "Epidemiologist", "Esthetician", "Event Manager", "Executive Chef", "Explosive Ordinance Disposal Specialist", "Farmer", "Fighter Pilot", "Financial Analyst", "Financial Manager", "Firefighter", "Fitness Instructor", "Florist", "Forensic Scientist", "Forester", "Freight Broker", "Game Developer", "Genetic Counselor", "Graphic Designer", "Head Coach", "Hearing Aid Specialist", "High School Teacher", "Home Health Aide", "Horticulturist", "HR Specialist", "Human Resources Manager", "Industrial Psychologist", "Information Security Analyst", "Insurance Underwriter", "Interior Decorator", "Investment Banker", "IT Manager", "IT Support Technician", "Journalist", "Kindergarten Teacher", "Landscaper and Groundskeeper", "Lawyer", "Licensed Practical and Licensed Vocational Nurse", "Loan Officer", "Logistics Coordinator", "Logistician", "Management Analyst", "Marine Biologist", "Market Research Analyst", "Marketing Manager", "Marriage and Family Therapist", "Massage Therapist", "Mathematician", "Media Buyer", "Medical Assistant", "Medical Records Technician", "Medical Researcher", "Meteorologist", "Middle School Teacher", "Mobile App Developer", "Mobile Developer", "Model", "MRI Technologist", "Musician", "Nail Technician", "Network Administrator", "Nurse Practitioner", "Nutritionist", "Obstetrician and Gynecologist", "Occupational Therapist", "Office Manager", "Operations Research Analyst", "Optometrist", "Oral Surgeon", "Orthodontist", "Orthotist and Prosthetist", "Paralegal", "Park Ranger", "Patrol Officer", "Personal Care Aide", "Personal Shopper", "Personal Trainer", "Petroleum Engineer", "Pharmacist", "Pharmacy Technician", "Physical Education Teacher", "Physician Assistant", "Pilot", "Podiatrist", "Political Scientist", "Private Chef", "Professional Athlete", "Project Manager", "Prosthodontist", "Psychiatrist", "Psychologist", "Public Relations Specialist", "Publicist", "Quality Assurance Tester", "Radiation Therapist", "Radio Operator", "Real Estate Agent", "Recreation and Fitness Worker", "Registered Nurse", "Renewable Energy Technician", "Remodeler", "Resort Manager", "Restaurant Cook", "Robotics Engineer", "Sales Manager", "Sales Representative", "School Counselor", "Science Teacher", "Scientist", "Ship Captain", "Social and Community Service Manager", "Social Media Strategist", "Social Services and Community Work", "Software Architect", "Software Developer", "Soil Scientist", "Solar Photovoltaic Installer", "Sommelier", "Spa Manager", "Sports Agent", "Sports Coach", "Sports Journalist", "Sports Marketer", "Sports Nutritionist", "Sports Psychologist", "Studio Manager", "Substance Abuse and Behavioral Disorder Counselor", "Supply Chain Manager", "Surgeon", "Surveillance Investigator", "Sustainable Development Consultant", "Systems Analyst", "Talent Coordinator", "Teacher", "Technical Writer", "Therapist", "Tour Guide", "Train Engineer", "Translator", "Transportation Planner", "Travel Writer", "Truck Driver", "Urban Planner", "UX/UI Designer", "Veterinarian", "Veterinary Technologist and Technician", "Videographer", "Virtualization Engineer", "Voice Engineer", "Voice-Over Artist", "Waste Management Specialist", "Web Developer", "Warehouse Manager", "Wildlife Biologist", "Wildlife Specialist", "Wind Turbine Technician", "Yoga Instructor"];

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