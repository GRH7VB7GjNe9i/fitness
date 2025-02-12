import React, { useState } from 'react'  
import { Routes, Route, Navigate } from 'react-router-dom';  
import Home from './Home';   
import Profile from './Profile';  
import Connections from './Connections';  
import Challenges from './Challenges';  
import Progress from './Progress';  
import PageNotFound from './PageNotFound';
import Community from './Community';
import Message from './Message';


function Routing() {  
  
  return (  
    <div>

        <Routes> 
        <Route path="/" element={<Home />} />  
        <Route path="/profile" element={<Profile />} />  
        <Route path="/messages" element={<Community/>} />  
        <Route path="/connections" element={<Message />} />  
        <Route path="/challenges" element={<Challenges />} />  
        <Route path="/progress" element={<Progress />} />  
        <Route path="*" element={<PageNotFound />} />  
      </Routes>  

    </div>  
  );  
}  

export default Routing;