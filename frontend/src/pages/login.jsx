import React, { useState } from 'react';
import { login } from '../api/auth';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const [usernName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()

  const handleUserNameChange = (e) =>{
    setUserName(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await login({
      "username":usernName,
      "password":password
    })
    if (data["status"] === "success"){
      localStorage.setItem("accessToken",data["result"]["access"])
      localStorage.setItem("refreshToken",data["result"]["refresh"])
      navigate("/")
    }else{
      setError("Invalid Credentials!")
      
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>{handleUserNameChange(e)}}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e)=>{handlePasswordChange(e)}}
            />
          {
            error && (
              <div className='text-red-500 mt-2'>{error}</div>
            )
          }
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
