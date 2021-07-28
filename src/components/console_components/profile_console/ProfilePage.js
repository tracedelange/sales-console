import React, { useState, useEffect } from 'react'
import GeneralButton from '../GeneralButton'
import profilePic from '../../../assets/images/anon-profile-pic.png'
import TextField from '@material-ui/core/TextField';
import EditProfileForm from './EditProfileForm';

const ProfilePage = ({resourceChange}) => {

    const [companyInfo, setCompanyInfo] = useState({})

    const [bio, setBio] = useState('')
    const [bioInputVisible, setBioInputVisible] = useState(false)

    const [editCompanyInfoVisible, setEditCompanyInfoVisible] = useState(false)
    const [newCompanyInfo, setNewCompanyInfo] = useState({})


    useEffect(() => {

        fetch('http://localhost:3001/company')
            .then(resp => resp.json())
            .then(data => {
                setCompanyInfo(data)
            })

    }, [])


    const submitBio = () => {

        //Update local copy of company info and then update server copy of company info
        setBioInputVisible(false)
        setCompanyInfo({
            ...companyInfo,
            bio: bio
        })

        const data = {
            ...companyInfo,
            bio: bio
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
                console.log(object);
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
    const handleAddBioButton = () => {
        setBioInputVisible(true)
    }
    const handleBioInputChange = (e) => {
        setBio(e.target.value)
    }


    const handleEditCompanySubmit = (newCompanyInfo) => {
        console.log('submitted')
        console.log(newCompanyInfo)

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
                console.log(object);
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


            {/* <GeneralButton callback={handleAddBioButton} text={"Add Bio"} /> */}

            {companyInfo.bio ? (<><h3>COMPANY BIO:</h3> <h2>{companyInfo.bio}</h2></>) : null}
            {/* {bioInputVisible ? <TextField onChange={handleBioInputChange} /> : null}
            {bioInputVisible ? <GeneralButton text={'Submit Bio'} callback={submitBio} /> : null} */}


            {editCompanyInfoVisible ? <EditProfileForm submitChanges={handleEditCompanySubmit} /> : <GeneralButton callback={() => { setEditCompanyInfoVisible(true) }} text={'EDIT COMPANY INFORMATION'} />}




        </div>
    )
}

export default ProfilePage
