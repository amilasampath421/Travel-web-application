import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Header = () => {
  const [nav,setNav] = useState(false)
  const handleNav = () => { 
    setNav(!nav)
}
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 w-full text-1xl font-bold'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TRAVEL</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Places</li>
        <li className='p-4'>Maps</li>
        <li className='p-4'>Videos</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full ease-in-out  duration-500' : 'fixed left-[100%]'}>
        
        <ul className='pt-24 uppercase'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Places</li>
        <li className='p-4 border-b border-gray-600'>Maps</li>
        <li className='p-4 border-b border-gray-600'>Videos</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
  )
};
export default Header;
