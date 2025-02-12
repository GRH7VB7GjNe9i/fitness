import React, { useState, useEffect } from "react";
import './App.css'
import Navbar from './components/navbar'
import Routing from './components/Routing'
import Login from './components/Login'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./components/firebase";


function App() {
  
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


 

  return (
    <div className="h-screen w-full">
      {user ? (
         <div className='flex bg-zinc-100'>
         <Navbar></Navbar>
         <div className=' w-1800 h-screen'>
             < Routing></Routing>
         </div>
     </div>
        
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;

