import React from 'react'
import { AiOutlineMessage } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { RiNotification2Fill } from "react-icons/ri";
import Logo from "../Assets/halfsmile.png"
import home from "../Assets/homeOrange.png"
import notify from "../Assets/notificationWhite.png"
import mssg from "../Assets/messgae.png"
import p1 from "../Assets/p1.png"
function Navbar() {
  return (
    <div className=' bg-[#262d34] h-20 flex justify-around items-center'>
        {/* logo */}
        <div className='flex p-2'>
            <img src={Logo} alt="logo" />
            <div className="ml-2 text-orange-500 font-serif font-bold text-xl">Uni Buddy</div>
        </div>
        {/* icons navigation */}
        <div className='flex text-black items-center  gap-[30px]'>
          {/* <MdHome fill='white' className='text-3xl' />             */}
          <div className='cursor-pointer'>
            <img src={home} alt="" />
          </div>
          <FaRegCalendarMinus  fill='white' className='text-2xl' />
          <BsPeopleFill  fill='white' className='text-2xl' />
          <FaMicrophone  fill='white' className='text-xl' />
          
        </div>
        <div className='flex flex-row items-center rounded-md pr-2 bg-[#2c353d]'>
          <input type="text" name="Search" id="" placeholder='Type here to Search' className='w-[450px] h-[40px]
           bg-[#2c353d] p-4 outline-none '/>

           <FaSearch className='text-[white] cursor-pointer'/>
        </div>
        <div className= 'flex text-black gap-4 items-center'>
        {/* <AiOutlineMessage  className='text-white text-2xl '/> */}
        <img src={mssg} alt="" className='cursor-pointer' />
          <img src={notify} alt="" className='cursor-pointer' />
          <div className='w-[35px] object-contain h-[35px] rounded-md bg-orange-500'>
            {/* <img src={p1} alt="" width={100} className='object-contain' /> */}
          </div>
          <div className='text-white text-lg font-bold' >Yash</div>
        </div>
        
    </div>
  )
}

export default Navbar