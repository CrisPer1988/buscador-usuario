import React from 'react'

const BoxUser = ({user}) => {
  return (
    <div>
        <h1>{user?.name.first} {user?.name.last} </h1>
        <img src={user?.picture.large} alt="" />
        <h2>{user?.location.city}</h2>
        <h2>{user?.phone}</h2>
    </div>
  )
}

export default BoxUser