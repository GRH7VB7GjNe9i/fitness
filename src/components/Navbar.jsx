import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GoTasklist } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import {NavLink} from "react-router-dom";
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";


function Navbar() {
   const [user, setUser] = useState(null);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const handleSignOut = async () => {
      await signOut(auth);
    };

  let IconStyle ={fontSize:'2em'}

  return (
  <div className=' mt-5 w-full justify-between'>
    
    <div className='ml-3 mt-5'>
      <h1 className='font-extrabold text-2xl'>fitness</h1>
    </div>

    <div className='ml-3 mt-10 h-ful gap-5'>

      <div>
        <NavLink to="/" className="text-zinc-500 aria-[current=page]:text-black">
          <button className=' ml-4 flex mt-7 w-35 h-full '>
            <IoHomeSharp style={IconStyle} />
            <h1 className='ml-5 mt-1'>Home</h1>
          </button>
        </NavLink>
      </div>
      
      
      <div>
        <NavLink to="/messages" className="text-zinc-500 aria-[current=page]:text-black">
          <button className='ml-4 flex mt-7 w-35 h-full'>
          <BiSolidMessageSquareDetail style={IconStyle} />
          <h1 className='ml-5 mt-1'>Community</h1>
          </button>
        </NavLink>
      
      </div>
      
      <div>
        <NavLink to="/connections" className="text-zinc-500 aria-[current=page]:text-black">
          <button className='ml-4 flex mt-7 w-35 h-full'>
          <IoPeopleSharp style={IconStyle} />
          <h1 className='ml-5 mt-1'>Chats</h1>
          </button>
        </NavLink>
      </div>


      <div>
        <NavLink to="/challenges" className="text-zinc-500 aria-[current=page]:text-black">
          <button className='ml-4 flex mt-7 w-35 h-full'>
          <GoTasklist  style={IconStyle}/>
          <h1 className='ml-5 mt-1'>Workouts</h1>
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/progress" className="text-zinc-500 aria-[current=page]:text-black">
          <button className='ml-4 flex mt-7 w-35 h-full '>
          <GiProgression style={IconStyle} />
          <h1 className='ml-5 mt-1'>TextToSpeech</h1>
          </button>
        </NavLink>
      </div>


      <div className='mt-7 w-20 h-full '>
        <NavLink to="/Profile" className="text-zinc-500 aria-[current=page]:text-black">
          <button className='ml-4 flex mt-7 w-35 h-full'>
            <CgProfile style={IconStyle}/>
            <h1 className='ml-5 mt-1'>Profile</h1>
          </button>
        </NavLink>
      </div>
      
      <div className='mt-7 w-20 h-full '>
      <NavLink to="/Login" className="text-zinc-500 aria-[current=page]:text-black">
          <button onClick={handleSignOut} className='ml-4 flex mt-7 w-35 h-full'>
          <MdLogout style={IconStyle}/>
            <h1 className='ml-5 mt-1'>logout</h1>
          </button>
        </NavLink>
      </div>
      
      
    </div>
    
  </div>
  );

}

export default Navbar