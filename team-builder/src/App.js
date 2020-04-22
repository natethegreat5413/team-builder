import React, { useState } from 'react'
import './App.css'
import { v4 as uuid } from 'uuid'
import Form from './components/Form'
import Members from './components/Members'


const initialMembers = [{
  name: 'Joseph',
  email: 'joseph@gmail.com',
  role: 'Frontend Developer'
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
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = evt => {
    evt.preventDefault();

    const newMember = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role === 'Frontend Developer' || 'Backend Developer' || 'FullStack Engineer'}
  setMembers([...members, newMember])

  setFormValues(initialFormValues)
    }

  

  return (
    <div className="container">
        <header><h1>Team Builder</h1></header>
        {
        members.map(member => {
          return (
            <Members key={member.name} details={member} />
          )
        })
      }
      <Form 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      />
    </div>
    )
    
  }
