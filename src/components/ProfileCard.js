import React from 'react'
import profilePic from '../assets/images/anon-profile-pic.png'

const ProfileCard = () => {
    return (
        <div id='profile-card'>
            <img src={profilePic} alt="Profile picture" />
            <p>Admin</p>
        </div>
    )
}

export default ProfileCard
