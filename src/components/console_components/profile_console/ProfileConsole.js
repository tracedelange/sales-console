import React, { useEffect, useState } from 'react'
import ProfilePage from './ProfilePage'

const ProfileConsole = ({resourceChange}) => {




    return (
        <div id='profile-console'>
            <ProfilePage resourceChange={resourceChange}/>
        </div> 
    )
}

export default ProfileConsole
