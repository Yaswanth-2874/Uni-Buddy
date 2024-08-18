import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
function Navbar() {
  return (
    <div className=' bg-[#262d34] h-20 flex justify-around items-center'>
        {/* logo */}
        <div className='flex p-2'>
            <img src="" alt="logo" />
            <div className="text-orange-500 font-serif">Uni Buddy</div>
        </div>
        {/* icons navigation */}
        <div className='flex text-black items-center  gap-[30px]'>
          <MdHome fill='white' className='text-3xl' />            
          <FaRegCalendarMinus  fill='white' className='text-2xl' />
          <BsPeopleFill  fill='white' className='text-2xl' />
          <FaMicrophone  fill='white' className='text-xl' />
          
        </div>
        <div className='flex flex-row items-center rounded-md pr-2 bg-[#2c353d]'>
          <input type="text" name="Search" id="" placeholder='Type here to Search' className='w-[450px] h-[40px]
           bg-[#2c353d] p-4 outline-none '/>

           <FaSearch className='text-[white] cursor-pointer'/>
        </div>
        <div className= 'flex text-black gap-4'>
        <AiOutlineMessage  className='text-white text-2xl '/>
        <RiNotification2Fill className='text-white text-2xl'/>
          <div className='w-[25px] h-[25px] rounded-md bg-orange-500'></div>
          <div className='text-white text-lg' >Yash</div>
        </div>
        
    </div>
  )
}

export default Navbar