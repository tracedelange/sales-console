import React from 'react'
import profilePic from '../assets/images/anon-profile-pic.png'

const ProfileCard = ({companyInfo}) => {

    return (
        <div id='profile-card'>
            <img src={profilePic} alt="Profile picture" />
            <br/>
            {companyInfo.CEO} <br/>
            <span>CEO of {companyInfo.name}</span> <br/>
            <span>Admin Access</span>
        </div>

    )
}

export default ProfileCard
