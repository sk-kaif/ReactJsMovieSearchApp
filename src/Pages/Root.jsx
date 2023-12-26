import { Outlet, useNavigate } from "react-router-dom";
import MovieLists from "../components/MovieLists";
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Root = () => {
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true);
  const [darkMode,setDarkMode] = useState(true); 

  return (
    <div className={`${darkMode ? 'dark bg-black text-white' : 'bg-neutral-100'} p-4 `}>
      <div className="flex justify-between items-center pb-4 max-w-6xl mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl cursor-pointer" onClick={()=>navigate('/')}>
          Movie<span className="text-blue-600">Search</span> 
        </h1>
        <button onClick={()=>setDarkMode(!darkMode)} className="font-bold md:text-xl">
          { darkMode? 
            <MdLightMode className="md:text-2xl text-yellow-300 "/> :
            <MdDarkMode className="md:text-2xl text-black "/> }
        </button>
      </div>

      
      <div className="max-w-6xl mx-auto">
        {
          navigate.state ==='loading' ?
          (<h1>Loading....</h1>) : (
            <Outlet />
          )
        }
      </div>
    </div>


  )
}

export default Root