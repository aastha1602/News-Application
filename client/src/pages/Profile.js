import React from 'react'
import Layout from '../components/Layout';
import {FaRegUserCircle} from 'react-icons/fa'

function Profile() {
  return (
      <Layout>
            <div className='h-screen flex items-center sm:flex-col'>

                <div className={`w-1/2 px-10 space-y-5 sm:w-screen`}>
                      <div className='p-10 m-10 flex justify-center flex-col ml-10 text-3xl text-gray-700'>
                          <FaRegUserCircle className='flex font-semibold'/>
                          <h1 className='my-10 font-semibold'>Profile</h1>
                          <span className='my-10'>{JSON.parse(localStorage.getItem('adnews-user')).name.toUpperCase()}</span>
                          <span className='my-10'>{JSON.parse(localStorage.getItem('adnews-user')).email.toUpperCase()}</span>
                      </div>
                </div>

                <div className='w-1/2 sm:w-screen'>
                    <lottie-player 
                    src="https://assets10.lottiefiles.com/packages/lf20_FqsM4u.json"  
                    background="transparent"  
                    speed="1"  
                    loop 
                    autoplay>
                    </lottie-player>
                </div>

            </div>
      </Layout>
  )
}

export default Profile