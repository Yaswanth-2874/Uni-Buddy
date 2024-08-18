import React from 'react'

function Hero() {
  return (
    <div className='flex '>
        {/* lefty */}
       <div className='flex flex-col w-1/5 ml-10  mt-1 gap-4 p-6'  >
         <div className='bg-[#262d34] w-[80%] h-52 rounded-2xl'>
                <div>
                    {/* icon */}
                    <div></div>
                    {/* desc */}
                    <div></div>
                </div>
                <div>
                     {/* icon */}
                     <div></div>
                    {/* desc */}
                    <div></div>
                </div>
                <div>
                     {/* icon */}
                     <div></div>
                    {/* desc */}
                    <div></div></div>   
         </div>
         <div className='bg-[#262d34] w-[80%] h-80 rounded-2xl'>
             
         </div>
         <div className='bg-[#262d34] w-[80%] h-80 rounded-2xl'>
             
         </div>
         <div className='bg-[#262d34] w-[80%] h-20 rounded-2xl'>
             
         </div>
       </div>
        
        {/* middle */}
       <div className='flex flex-col w-[55%]  mt-1 gap-4 p-6'>
          {/*create post*/}
          <div className='bg-[#262d34] w-5/6 h-28 rounded-xl'>   
          </div>
          {/* blogs */}
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           
          </div>
       </div>
       
       
       {/* right */}
       <div className='flex flex-col w-1/5  mt-1  gap-4 p-6'>
         <div className='bg-[#262d34] w-full h-[300px] rounded-xl'>
         </div>
         <div className='bg-[#262d34] w-full h-[300px] rounded-xl'>
         </div>
       </div>
    </div>
  )
}

export default Hero