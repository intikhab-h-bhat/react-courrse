import React from 'react'

const UserCard=(props)=>{
   return (

    <div className="user-card"> 
    {/* <img >userImage</img> */}
    <h3>{props.data.name.first}</h3>
    <p>{props.data.phone}</p>


    </div>
)

}
export default UserCard;