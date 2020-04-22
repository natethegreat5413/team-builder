import React from 'react'

function Members({ details }) {
    if (!details) {
        return <h3>Working fetching your data...</h3>
    }
    return (
        <div className='member container'>
            
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </div>
    )
}

export default Members