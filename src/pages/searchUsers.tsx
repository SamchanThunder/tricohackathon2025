import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/searchUsers.css';

//Note: we dont have enough time to actually fetch the users from the database, so this is just a template. 
function SearchUsers() {
    const users = [
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
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
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
