import React, { useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'
import Form from './components/Form'
import Members from './components/Members'


const initialMembers = [{
  name: 'David',
  email: 'david@gmail.com',
  role: 'Janitor'
}]

const initialFormValues = 
  {
    name: '',
    email: '',
    role: '',
  }

  
export default function App() {
  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = evt => {
    const {name} = evt.target
    const {value} = evt.target
    
    setFormValues({ ...formValues, [name]: value})
    
  }

  const onSubmit = evt => {
    evt.preventDefault();

    if(!formValues.name.trim() || !formValues.email.trim() || !formValues.role.trim()){
      return 'Must have Input'
    }

    const newMember = { ...formValues, id: uuid()}
      
    
  setMembers([newMember, ...members])

  setFormValues(initialFormValues)
    }

  

  return (
    <div className="container">
        <header><h1>Team Builder</h1></header>
        <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
        {
        members.map(member => {
          return (
            <Members key={member.id} details={member} />
          )
        })
      }
      
    </div>
    )
    
  }
