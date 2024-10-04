import google from "../Assets/google.png"
import fb from "../Assets/fb.png"
import github from "../Assets/github.png"
function LoginCompo() {
    return (
      <>
      <div className="bg-[#1a2025]  text-white w-[400px] rounded-lg  flex border-2 border-[#2c353d] flex-col ">
             <div className="pl-8 mt-10 pt-2 p-2">
               <div className="text-lg font-sans font-semibold" >
               Login
               </div>
              <div className="text-[#61646A]">
                Glad you are here
               </div>  
              </div>
              {/* login credentials */}
               <div  className="flex mt-2 justify-center items-center flex-col gap-4">
               <div className='  bg-transparent border-[1px] border-white rounded-md w-[75%]'>
               <input type="text" name="" id="" placeholder='Username' 
               className=' bg-transparent  outline-none text-white  p-2 rounded-md' />
                 </div>     
                 <div className='  bg-transparent border-[1px] border-white rounded-md w-[75%]'>
               <input type="text" name="" id="" placeholder='Password' 
               className=' bg-transparent  outline-none text-white  p-2 rounded-md' />
                 </div>               
               <div className="cursor-pointer bg-[#22435e] rounded-md h-[40px] w-[75%] flex justify-center items-center ">
                Login
                </div>                       
               <div>
                Forgot Password ?
               </div>
               <div className=" flex items-center">
                 <div className="w-[155px] h-[1px] bg-[#61646A]"></div>
                 <div className="ml-2 mr-2 text-[#61646A]">OR</div> 
                 <div className="w-[155px] h-[1px] bg-[#61646A]"></div>
               </div>
               <div className="flex gap-3 ">
                <div className="cursor-pointer">
                  <img src={google} alt="" width={30} />
                </div>
                <div className="cursor-pointer">
                  <img src={fb} alt="" width={30} />
                </div>
                <div className="cursor-pointer">
                  <img src={github} alt="" width={30}/>
                </div>
               </div>
               {/* terms and signup */}
               <div className="mt-10 mb-10">
                <div className="flex  justify-center items-center">
                  Dont have a account? Signup
                </div>
                <div className="text-[#61646A] flex gap-4">
                  <div>
                  Terms & Conditions 
                  </div>
                  <div>
                    Support
                  </div>
                  <div>
                    Customer Care
                  </div>
                </div>
               </div>
               </div>




               
      </div>
      </>
    )
  }
  
  export default LoginCompo
  