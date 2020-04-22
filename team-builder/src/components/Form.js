import React, {useState} from 'react'


function MemberForm(props){

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

return(
    <form className='member container'>
    <h2>Member Form</h2>
    {/*////////TEXT INPUTS////////*/}
    <label>Name:&nbsp;
    <input 
    value={values.name}
    onChange={onInputChange}
    name='name'
    type='text'
    /></label>

    <label>Email:&nbsp;
    <input
    value={values.email}
    onChange={onInputChange}
    name='email'
    type='text'
    /></label>

    {/* ///////DROPDOWN/////// */}
    <label>Role:&nbsp;
    <select
    value={values.role}
    onChange={onInputChange}
    name='role'
    >
    <option value='Frontend Developer'>Frontend Developer</option>
    <option value='Backend Developer'>Backend Developer</option>
    <option value='FullStack Engineer'>FullStack Engineer</option>
    </select></label>
    
    <button onClick={onSubmit}>submit</button>
    </form>
    )
}

export default MemberForm;



