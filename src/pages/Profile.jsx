import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { User, Mail, Phone } from 'lucide-react'

const Profile = () => {
  const username = localStorage.getItem("username")

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(
          "http://localhost:5000/api/getUserData",
          { params: { username: username } }
        );
        setEmail(response.data.email)
        setName(response.data.name)
        setPhone(response.data.phone)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    }

    userData()
  }, [username])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 bg-yellow-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-400 text-white rounded-full flex items-center justify-center mb-4">
            <User size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-500">@{username}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <Mail className="text-blue-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold">{email}</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-50 p-3 rounded-lg">
            <Phone className="text-green-500 mr-4" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-semibold">{phone || 'Not provided'}</p>
            </div>
          </div>
          <div class="flex items-center justify-center ">
            <button onclick=""
              class="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
              Add Product
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile