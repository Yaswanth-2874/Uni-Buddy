import React from 'react'
import p1 from "../Assets/p1.png"
import p2 from "../Assets/p2.png" 
import badge from "../Assets/badge.png"
import popular from "../Assets/popular.png"
import follow from "../Assets/addFrnd.png"
import tags from "../Assets/tags.png"
import dollar from "../Assets/dollar.png"
import design from "../Assets/design.png"
import writeicon from "../Assets/writeicon.png"
import vdeoplay from "../Assets/vdeoplay.png"
import trendsearch from "../Assets/trendSearch.png"
function Hero() {
  return (
    <div className='flex '>
        {/* lefty */}
       <div className='flex flex-col w-1/5 ml-10  mt-1 gap-4 p-6'  >
         <div className='bg-[#262d34] w-[90%]  rounded-2xl'>
                <div className='flex p-2 gap-2 items-center cursor-pointer'>
                    {/* icon */}
                    <div>
                       <img src={badge} alt="" />
                    </div>
                    {/* desc */}
                    <div className='text-white'>
                      <div className='font-bold font-sans'>
                      Newest and Recent
                      </div>
                      <div className='text-sm text-[#61646A]'>
                        find the latest updates
                      </div>
                    </div>
                </div>
                <div className='flex p-2 gap-2 cursor-pointer'>
                    {/* icon */}
                    <div>
                       <img src={popular} width={35} height={40} alt="" className='
                       bg-[#2C353D]  p-2 rounded-md' />
                    </div>
                    {/* desc */}
                    <div className='text-white'>
                      <div className='font-bold font-sans'>
                      Popular of the day
                      </div>
                      <div className=' text-sm text-[#61646A]'>
                        shorts features today by curators
                      </div>
                    </div>
                </div>
                <div className='flex p-2 gap-2 cursor-pointer'>
                    {/* icon */}
                    <div>
                       <img src={follow} alt="" />
                    </div>
                    {/* desc */}
                    <div className='text-white'>
                      <div className='font-bold font-sans'>
                      Following
                      </div>
                      <div className='text-[#61646A] text-sm'>
                        Explore from your favourite person
                      </div>
                    </div>
                </div>
         </div>
         <div className='bg-[#262d34] flex flex-col w-[90%] p-1 rounded-2xl'>
              {/* heading */}
              <div className='text-center text-white mt-2 font-bold'>Popular Tags</div>
               {/* Sub-tags */}
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={tags} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #Javascript
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       82,364 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={dollar} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #Freshman
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       65,137 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>  
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={design} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #design
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       51,374 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>  
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={writeicon} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #innovation
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       48,604 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>  
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={vdeoplay} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #tutorial
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       51,345 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>  
               <div className='flex flex-col p-2'>
                 {/* h1 */}
                 <div className='flex gap-2'>
                  {/* img */}
                   <div>
                   <img src={trendsearch} alt="" />
                   </div>
                   {/* desc */}
                   <div>
                    <div className='text-white font-sans'>
                      #bussiness
                    </div>
                    <div className='text-sm text-[#61646A]'>
                       22,894 posted using this tag 
                    </div>
                   </div>
                  </div> 
               </div>  
         </div>
         <div className='bg-[#262d34] w-[90%] h-80 rounded-2xl'>
             <div className='text-white text-center p-2 text-md font-bold font-sans'>Pinned Group  </div>
         </div>
         <div className='bg-[#262d34] flex flex-col text-center p-2 font-bold  text-white w-[90%] h-20 rounded-2xl'>
            <div className='text-center'>
              Currently Online :
            </div>
            <div className='text-center'>
              985 Users
            </div>
         </div>
       </div>
        {/* myname */}
        {/* middle */}
       <div className='flex flex-col w-[55%]  mt-1 gap-4 p-6'>
          {/*create post*/}
          <div className='bg-[#262d34] w-5/6 h-20 rounded-xl flex justify-around items-center'>   
          {/* img */}
          <div className='m-2'>
            <img src={p1} alt="dp" />
          </div>
          {/* write pad */}
          <div className='w-[55%] bg-[#2c353d] rounded-md'>
            <input type="text" name="" id="" placeholder='Lets share whats going on your mind' 
            className=' bg-[#2c353d] outline-none text-white w-[100%] p-2 rounded-md' />
          </div>
          {/* post button */}
          <div className='text-white rounded-md bg-[#ff6934] w-32 text-center p-2 cursor-pointer'>
            Create Post
          </div>
          </div>
          {/* blogs */}
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           {/* paragraph */}
           <div className='text-white p-4'>
            What advice you give to incoming freshman about adjusting to college life?
            </div>
            {/* tags */}
            <div className='flex gap-1'>
              <div className='bg-[#232a30] rounded-full text-white p-3  ' >Freshman</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>College Life</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>Advice</div>
            </div>
            {/* username */}
            <div className='flex justify-between m-4 text-white'>
              {/* profile */}
              <div className='flex gap-2'>
                    {/* img */}
                    <div>
                      <img src={p1} alt="img" />
                    </div>
                    {/* name and online status */}
                    <div className='flex flex-col'>
                      <div>Aniketh</div>
                      <div>3 weeks ago</div>
                    </div>
              </div>
              {/* views */}
              <div>
                 651,324 Views
              </div>
              {/* likes */}
              <div>
                  36,6545 Likes   
              </div>
              {/* comments */}
              <div>
                  56 comments
              </div>
            </div>
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           {/* paragraph */}
           <div className='text-white p-4'>
            Can you share your experiences with securing internships or job placements during your time at the college?
            </div>
            {/* tags */}
            <div className='flex gap-1'>
              <div className='bg-[#232a30] rounded-full text-white p-3 ' >Internships</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>Experience</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>Career</div>
            </div>
            {/* username */}
            <div className='flex justify-between m-4 text-white'>
              {/* profile */}
              <div className='flex gap-1'>
                    {/* img */}
                    <div>
                      <img src={p2} alt="img" />
                    </div>
                    {/* name and online status */}
                    <div className='flex flex-col'>
                      <div>Hardik</div>
                      <div>3 days ago</div>
                    </div>
              </div>
              {/* views */}
              <div>
                 244,564 Views
              </div>
              {/* likes */}
              <div>
                  10,920 Likes   
              </div>
              {/* comments */}
              <div>
                  184 comments
              </div>
            </div>
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
              {/* paragraph */}
           <div className='text-white p-4'>
            What resources ir clubs do you recommend for students looking to enhance their academic and social experience?
            </div>
            {/* tags */}
            <div className='flex gap-2'>
              <div className='bg-[#232a30] rounded-full text-white p-3 ' >Freshman</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>College Life</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>Advice</div>
            </div>
            {/* username */}
            <div className='flex justify-between m-4 text-white'>
              {/* profile */}
              <div className='flex gap-2'>
                    {/* img */}
                    <div>
                      <img src={p1} alt="img" />
                    </div>
                    {/* name and online status */}
                    <div className='flex flex-col'>
                      <div>Aniketh</div>
                      <div>3 weeks ago</div>
                    </div>
              </div>
              {/* views */}
              <div>
                 651,324 Views
              </div>
              {/* likes */}
              <div>
                  36,6545 Likes   
              </div>
              {/* comments */}
              <div>
                  56 comments
              </div>
            </div>
          </div>
          <div className='bg-[#262d34] w-5/6 h-52 rounded-xl'>
           {/* paragraph */}
           <div className='text-white p-4'>
            What advice you give to incoming freshman about adjusting to college life?
            </div>
            {/* tags */}
            <div className='flex gap-1'>
              <div className='bg-[#232a30] rounded-full text-white p-3 ' >Freshman</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>College Life</div>
              <div className='bg-[#232a30] rounded-full text-white p-3 '>Advice</div>
            </div>
            {/* username */}
            <div className='flex justify-between m-4 text-white'>
              {/* profile */}
              <div className='flex gap-2'>
                    {/* img */}
                    <div>
                      <img src={p2} alt="img" />
                    </div>
                    {/* name and online status */}
                    <div className='flex flex-col'>
                      <div>Aniketh</div>
                      <div>3 weeks ago</div>
                    </div>
              </div>
              {/* views */}
              <div>
                 651,324 Views
              </div>
              {/* likes */}
              <div>
                  36,6545 Likes   
              </div>
              {/* comments */}
              <div>
                  56 comments
              </div>
            </div>
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