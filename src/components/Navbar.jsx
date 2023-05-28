import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center py-6   z-50 bg-black backdrop-blur-lg w-full shadow-3xl h-[80px]'>
      <div className='text-white mr-8 text-[24px]'>Home</div>
      <div className='text-white  font-DancingCursive text-[36px]'>Blogs</div>
      <div className='text-white ml-8 text-[24px]'>About</div>
    </div>
  )
}

export default Navbar
