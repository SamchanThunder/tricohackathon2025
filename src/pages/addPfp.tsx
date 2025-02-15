import { auth, db, storage } from '../scripts/firebase';
import { useState, useRef } from 'react';
import { ref, update } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import '../stylesheets/signupin.css'
function AddPfp() {
    const [imageUrl, setImageUrl] = useState("src/assets/profile.jpg");
    const [imageFile, setImageFile] = useState(null);
    const [showUrlInput, setShowUrlInput] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleAddButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUrlButtonClick = () => {
        setShowUrlInput(!showUrlInput);
    };

    const handleUrlSubmit = () => {
        if (urlInput) {
            setImageUrl(urlInput);
            setImageFile(null);
            setShowUrlInput(false);
            setUrlInput('');
        }
    };

    async function submitPfp() {
        if (user) {
            try {
                await update(ref(db, 'users/' + user.uid), {
                    pfp: imageUrl,
                });

                navigate("/home");
            } catch (error) {
                alert("Failed to update profile picture. Please try again.");
            }
        } else {
            alert("Not logged in");
        }
    }

    return (
        <div className="pfpContainer">
            <div className="pfpTitle">Change your profile picture!</div>
            <img src={imageUrl} className="pfpImage" alt="Profile" />
            <div className="buttonContainer">
                <button className="addButton" onClick={handleAddButtonClick}>+</button>
                <button className="urlButton" onClick={handleUrlButtonClick}>URL</button>
            </div>
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
                accept="image/*"
            />
            {showUrlInput && (
                <div className="urlInputContainer">
                    <input 
                        className="urlInput"
                        type="text" 
                        value={urlInput} 
                        onChange={(e) => setUrlInput(e.target.value)} 
                        placeholder="Enter image URL"
                    />
                    <button onClick={handleUrlSubmit} className="urlButton2">Submit URL</button>
                </div>
            )}
            <button className="submitPfp" onClick={submitPfp}>Submit</button>
        </div>
    )
}

export default AddPfp