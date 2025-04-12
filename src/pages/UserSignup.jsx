import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const navigate = useNavigate()

  const { user, setUser } = React.useContext(UserDataContext)


  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname:{
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="p-7 w-[50vw] h-screen flex flex-col justify-center">
        <div>
          <form action="" onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className="text-lg mb-2 font-medium">What's Your Name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="First Name" />
              <input
                required
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                className="bg-[#eeeeee] w-1/2 rounded px-2 py-2 border text-lg placeholder:text-base"
                type="text"
                placeholder="Last Name" />
            </div>
            <h3 className="text-lg mb-2 font-medium">What's Your Email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com" />
            <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-2 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              placeholder="password" />
            <button
              className="bg-[#111] text-white font-semibold mb-3 rounded px-2 py-2 w-full text-lg"
            >Create account</button>
          </form>
          <p className="text-center">Already have a account? <Link to='/login' className="text-blue-600">Login here</Link></p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span></p>
        </div>
      </div>
    </div>
  )
}

export default UserSignup
