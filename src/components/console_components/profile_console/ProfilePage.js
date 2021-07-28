import React, { useState, useEffect } from 'react'
import GeneralButton from '../GeneralButton'
import profilePic from '../../../assets/images/anon-profile-pic.png'
import EditProfileForm from './EditProfileForm';

const ProfilePage = ({resourceChange}) => {

    const [companyInfo, setCompanyInfo] = useState({})

    const [editCompanyInfoVisible, setEditCompanyInfoVisible] = useState(false)
    const [newCompanyInfo, setNewCompanyInfo] = useState({})

    let bug = {
        first: typeof(newCompanyInfo),
        second: typeof(setNewCompanyInfo)
    } //These vars are needed but react thinks they're unused, quick check to disable 'no-ununsed var' warning
    
    console.log(bug.length)

    useEffect(() => {

        fetch('http://localhost:3001/company')
            .then(resp => resp.json())
            .then(data => {
                setCompanyInfo(data)
            })

    }, [])


    const handleEditCompanySubmit = (newCompanyInfo) => {
        // console.log('submitted')
        // console.log(newCompanyInfo)

        setEditCompanyInfoVisible(false)
        setCompanyInfo({
            ...companyInfo,
            ...newCompanyInfo
        })

        const data = {
            ...companyInfo,
            ...newCompanyInfo
        }

        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        };

        fetch("http://localhost:3001/company", configurationObject)
            .then(function (response) {
                return response.json();
            })
            .then(function (object) {
                // console.log(object);
                console.log('Post Success')
            })
            .catch(function (error) {
                console.log(error.message);
            });
        resourceChange()
    }

    return (
        <div id='profile-page'>

            <h3>Profile Information:</h3>

            <img src={profilePic} alt={'Profile'} />

            <h2>{companyInfo.CEO}</h2>
            <h3>{companyInfo.title} At </h3>
            <h2>{companyInfo.name}</h2>

            {companyInfo.bio ? (<><h3>COMPANY BIO:</h3> <h2>{companyInfo.bio}</h2></>) : null}
            {editCompanyInfoVisible ? <EditProfileForm submitChanges={handleEditCompanySubmit} /> : <GeneralButton callback={() => { setEditCompanyInfoVisible(true) }} text={'EDIT COMPANY INFORMATION'} />}

        </div>
    )
}

export default ProfilePage
