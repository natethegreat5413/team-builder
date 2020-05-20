import React from 'react'


function MemberForm(props){

    const {
        values,
        onInputChange,
        onSubmit,
    } = props

return(
    <form className='member container' onSubmit={onSubmit}>
        <h2>Member Form</h2>
    {/*////////TEXT INPUTS////////*/}
        <label>Name:&nbsp;
            <input 
            value={values.name}
            onChange={onInputChange}
            name='name'
            type='text'
            placeholder='Name goes here'
        /></label>
<br/>
    <label>Email:&nbsp;
        <input
        value={values.email}
        onChange={onInputChange}
        name='email'
        type='text'
        placeholder='Email goes here'
        />
    </label>
<br/>
    {/* ///////DROPDOWN/////// */}
    <label>Role:&nbsp;

        <select value={values.role} onChange={onInputChange} name='role'>
        
            <option value=''>Select a Position</option>
            <option value='Frontend Developer'>Frontend Developer</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='FullStack Engineer'>FullStack Engineer</option>
            <option value='Janitor'>Janitor</option>
            <option value='CEO'>CEO</option>
            <option value='UX Design'>UX Design</option>

        </select>

    </label>

    <button>Submit</button>
    </form>
    )
}

export default MemberForm;



