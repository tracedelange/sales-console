import React, { useEffect, useState } from 'react'
import ProfileCard from './ProfileCard'
import {NavLink} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';

const Sidebar = ({resourceChange}) => {

    const [companyInfo, setCompanyInfo] = useState({})



    useEffect(() => {

        fetch('http://localhost:3001/company')
        .then(resp => resp.json())
        .then(data => {
            setCompanyInfo(data)
        })

    },[resourceChange])

    return (

        <div id="sidebar">
            <NavLink id='profile-link' to='/profile' exact>
                <ProfileCard companyInfo={companyInfo}/>
            </NavLink>

            <Divider />

            <NavLink to='/customers' exact> Customers </NavLink>
            
            <NavLink to='/products' exact> Products </NavLink>

            <NavLink to='/orders' exact> Orders </NavLink>

        </div>

    )
}

export default Sidebar
