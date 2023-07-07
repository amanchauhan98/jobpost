import React, { useEffect, useState } from 'react'
import './App.css';
import PostPage from './Components/PostPage';
import { FaSquareInstagram } from "react-icons/fa6";

function App() {
  const [postData, setPostData] = useState([{}])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((respnse) => respnse.json())
      .then((data) => setPostData(data))
  }, [])

  console.log(postData)
  return (
   <>
      <div className='h-full w-full grid grid-cols-8 justify-evenly'>
        {/* this is a 1st div of cols post (5) coloumn span*/}
        <div className='grid col-span-5 border-[0.02rem] bg-green-300 overflow-auto h-screen gradient'>
            {/* for post div */}
          {
            postData.map((data)=>{
              return <>
          <PostPage category={data.category} profile={data.image} />
              </>
            })
          }
        </div>
      
        {/* This is a second div for user profile and fixed section */}
        <div className='grid h-screen col-span-2 border-[0.02rem] bg-style overflow-hidden'>
          <div className='username-profile mx-3 my-5 space-y-[1.5rem]'>
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" className='bg-transparent rounded-full h-[10rem] w-[10rem] mx-auto' alt="" />
            <h1 className='text-3xl  text-center font-sans tracking-wide text-white font-semibold'>Aman Chauhan</h1>
            <h2 className='text-white text-xl text-center '>I am Full Stack Web Developer</h2>
          </div>
        </div>
        {/* navbar div */}
        <div className='grid nav-style w-full h-screen overflow-hidden border-[0.02rem] bg-pink-300 px-3 py-2'>
          <FaSquareInstagram className='text-7xl text-center mx-auto text-white' />
          {/* <span className='text-2xl font-sans font-medium'>Instagram</span> */}
          <ul className='flex text-white flex-col space-y-[3rem] -pt-[2rem]'>
            <li className='text-2xl  text-left hover:text-blue-500 duration-500 delay-150 hover:font-semibold'>Home</li>
            <li className='text-2xl text-left hover:text-blue-500 duration-500 delay-150 hover:font-semibold'>Search</li>
            <li className='text-2xl text-left hover:text-blue-500 duration-500 delay-150 hover:font-semibold'>Posts</li>
            <li className='text-2xl text-left hover:text-blue-500 duration-500 delay-150 hover:font-semibold'>Live</li>
          </ul>
          {/* button logout */}
          <button className='px-4 text-white bg-gradient-to-r from-red-600 via-yellow-600 to-pink-600 h-[3rem] mt-[8rem] hover:bg-red-600 hover:font-medium duration-300 delay-150 rounded-lg  font-medium'>
            <span>Logout</span>
          </button>
        </div>
        </div>

      </>
  );
}

export default App;
