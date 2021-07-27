import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import GeneralButton from '../GeneralButton'

const EditProfileForm = ({submitChanges}) => {

    const [newCompanyInfo, setNewCompanyInfo] = useState({})

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)

        setNewCompanyInfo({
            ...newCompanyInfo,
            [e.target.name] : e.target.value
        })
    }


    return (
        <div id='edit-profile'>
            <TextField name="CEO" onChange={handleInputChange} label={"Employee Name"} />
            <TextField name='title' onChange={handleInputChange} label={"Employee Title"} />
            <TextField name='name' onChange={handleInputChange} label={"Name of Organization"} />
            <TextField name='bio' onChange={handleInputChange} label={"Organization Bio"} />
            <GeneralButton callback={()=> {submitChanges(newCompanyInfo)}} text={'Submit Changes'} />
        </div>
    )
}

export default EditProfileForm
