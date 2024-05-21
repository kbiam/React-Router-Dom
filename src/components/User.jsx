import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    const {username} = useParams()
  return (
    <div>User : {userid} {username}</div>
  )
}

export default User