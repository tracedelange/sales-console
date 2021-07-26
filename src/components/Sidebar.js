import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import {NavLink, Route} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import ProfilePage from './ProfilePage'
import {makeStyles} from '@material-ui/core/styles'

// const useStyles = makeStyles({
//     link: {
//         fontSize:20,
//     },
// })

const Sidebar = () => {

    const [companyInfo, setCompanyInfo] = useState({})

    useEffect(() => {

        fetch('http://localhost:3001/company')
        .then(resp => resp.json())
        .then(data => {
            setCompanyInfo(data)
        })

    },[])

    return (

        <div id="sidebar">
            <NavLink id='profile-link' to='/profile' exact>

                <ProfileCard companyInfo={companyInfo}/>

            </NavLink>

            <Route exact path='/profile'>
                <ProfilePage />
            </Route>
            <Divider />

            {/* Profile designation at top */}
            {/* Report section */}
            {/* Other selections */}


            <NavLink to='/customers' exact> Customers </NavLink>
            
            <NavLink to='/products' exact> Products </NavLink>

            <NavLink to='/orders' exact> Orders </NavLink>

        </div>

    )
}

export default Sidebar
