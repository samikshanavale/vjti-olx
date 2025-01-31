import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const username=localStorage.getItem("username")
  
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
  
  useEffect(() => {
   const userData = async () =>{
    try{
      const response = await axios.get(
        "http://localhost:5000/api/getUserData",
        { params: { username: username }}
      );
      setEmail(response.data.email)
      setName(response.data.name)
      setPhone(response.data.phone)


    }

    catch(error){
      console.log(error);
    }
   }

   userData()
  
  }, [username])
  
  return (
    <div>
      {username}
      {email}
      {phone}
      {name}
      
    
    </div>
  )
}

export default Profile