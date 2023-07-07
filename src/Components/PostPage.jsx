import React from 'react'
import { FcLike, FcComments, FcShare } from "react-icons/fc";



const PostPage = ({category, profile}) => {
    return <>
            <div className='post-div bg-gray-100 border-[0.02rem]  h-[30rem] w-[22rem] mx-auto my-[5rem] shadow-xl drop-shadow-xl  rounded-xl'>
                {/* username and post div */}
                <div className='flex w-auto h-fit space-x-[2rem] px-4 py-3 items-center'>
                    <div className='profile-div h-[3.5rem] w-[3.5rem] rounded-full border-[0.02rem]'>
                        <img src= {profile} className=' rounded-full h-[3.5rem] w-[3.5rem]' alt="" />
                    </div>
                    <div className='username text-black font-sans tracking-wider'>
                        <span className='first-letter:uppercase font-bold'>{category}</span>
                    </div>
                </div>
                {/* image post div */}
                <div className='w-full h-[21rem] bg-sky-300'>
                    <img src= {profile} className='w-full h-[21rem]' alt="" />
                </div>
                {/* for like , share and comment box */}
                <div className='flex px-4 py-3 space-x-[1.5rem] '>
                <FcLike className='text-gray-500 text-[1.9rem]' title='Like'/>
                <FcComments className='text-gray-500 text-[1.9rem]' title='Comment'/>
                <FcShare className='text-gray-500 text-[1.9rem]' title='Share'/>
                </div>
            </div>
       
        
    </>
} 
export default PostPage;