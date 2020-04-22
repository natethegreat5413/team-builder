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



// const Members = [
//     { id: uuid(), name: 'John', email: 'john@gmail.com', role: 'Frontend Developer', },
//     { id: uuid(), name: 'Jane', email: 'jane@gmail.com', role: 'Backend Developer', },
// ]


// function TeamMembers () {
//     const [members, setMembers] = useState(Members)
//     const [formValues, setFormValues] = useState ({
//         name: '',
//         email: '',
//         role: '',
//     })

//     const inputChange = event => {
//         const changeName = event.target.name;
//         const changeValue = event.target.value;
//         setFormValues ({
//               ...formValues,
//               [changeName]: changeValue,
//         })
// }

// const formSubmit = event => {
//     event.preventDefault();
  
//     const newMember = {
//         id: uuid(),
//         name:formValues.name,
//         email:formValues.email,
//         role:formValues.role,        
//     }
//    setMembers([...members, newMember]) 
// }

// return (
//   <div>
//       <form onSubmit={formSubmit}>
//           <label>
//               Name
//               <input 
//               onChange={inputChange}
//               value={formValues.name}
//               name="name"
//                />
              
//           </label>
      
//           <label>
//               Email
//               <input 
//               onChange={inputChange}
//               value={formValues.email}
//               name="email"
//                />
              
//           </label>
      
//           <label>
//               Role
//               <input 
//               onChange={inputChange}
//               value={formValues.role}
//               name="role"
//                />
              
//           </label>
//           <input 
//   type='submit'
//   /> 
//       </form>
//       <h3>List of friends:</h3>
// {
//   members.map(fr => <div key={fr.id}>{fr.name} {fr.email} {fr.role}</div>)
// }
//   </div>
// )
// }

// export default TeamMembers;