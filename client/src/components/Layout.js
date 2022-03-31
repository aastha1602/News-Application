import React, { useState } from 'react'
import SideBar from './SideBar';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {FaRegUserCircle} from 'react-icons/fa'

function Layout(props) {
    const [showSideBar , setShowSideBar]=useState(true)
  return (
    <div className='layout flex w-full h-full'>

        {/* this is div for sidebar */}
        <div className='sidebar'>
            <SideBar showSideBar={showSideBar} />
        </div>

        {/* this is div for body */}
        <div className='h-full w-full'>
            <div className='header bg-primary h-20 w-full flex items-center justify-between'>
                <HiOutlineMenuAlt1 onClick={()=>setShowSideBar(!showSideBar)} color='gray' size={30} className='cursor-pointer' />
                <div className='text-gray-300 mr-5 flex items-center space-x-1 cursor-pointer'>
                    <FaRegUserCircle />
                    <span>{JSON.parse(localStorage.getItem('adnews-user')).name.toUpperCase()}</span>
                </div>
            </div>
            <div className='content max-h-[85vh] overflow-y-auto'>
                {props.children}
            </div>
        </div>

    </div>
  )
}

export default Layout