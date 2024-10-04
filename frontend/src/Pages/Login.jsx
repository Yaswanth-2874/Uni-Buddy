import LoginCompo from "../Components/LoginCompo"
function Login() {
  return (
    <>
    <div className="bg-[#1e252b]  w-screen     h-screen flex-col ">
        <div className="flex items-center justify-around">
        <div className="p-8 text-white 
        text-[80px] flex items-center justify-center h-screen">
        WELCOME BACK !
        </div>
        <div className="shadow-md shadow-black">
        <LoginCompo/>                                               
        </div>
        </div>
    </div>
    </>
  )
}

export default Login
