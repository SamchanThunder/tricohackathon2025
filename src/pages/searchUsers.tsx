import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../scripts/firebase';
import { ref, get } from "firebase/database";
import '../stylesheets/searchUsers.css';

function SearchUsers() {
    //Not enough time to fetch all the users from database, so we use templates to display our vision! 
    //However, we do fetch the active user attributes.
    const [users, setUsers] = useState([
        {
            name: "Evan Rogers",
            role: "Mentor",
            interests: ["Cooking", "Coffee roasting", "Crocheting", "Writing", "Singing"],
            job: "Cake Decorator",
            username: "evanrogers"
        },
        {
            name: "Sarah Thompson",
            role: "Mentor",
            interests: ["Reading", "Outdoor Education", "Art", "Child Psychology", "Gardening"],
            job: "Elementary School Teacher",
            username: "sthompson"
        }
    ]);
    const [searchQuery, setSearchQuery] = useState('');

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
                    const myUser = {
                        name: userData.name,
                        role: userData.role,
                        interests: userData.interests,
                        job: userData.job,
                        username: "myProfile"
                    };
                    setUsers(prevUsers => {
                        const userExists = prevUsers.some(user => user.username === myUser.username);
                        if (!userExists) {
                            return [...prevUsers, myUser];
                        }
                        return prevUsers;
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="searchUsersContainer">
            <div className="title"><u>Search Users</u></div>
            
            <input 
                type="text"
                placeholder="Search for a user..."
                value={searchQuery}
                onChange={handleSearch} 
                className="searchBar"
            />

            <div className="usersListContainer">
                {filteredUsers.map((user, index) => (
                    <Link to={`/users/${user.username}`} key={index} className="userCard">
                        <div className="userName">{user.name}</div>
                        <div className="userRole">{user.role}</div>
                        <div className="userJob">{user.job}</div>
                        <div className="userInterests">
                            {user.interests.map((interest, i) => (
                                <span key={i} className="interestTag">{interest}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SearchUsers;
