import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const { userid } = useParams();
    console.log(userid)
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile