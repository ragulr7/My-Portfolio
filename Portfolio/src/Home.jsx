import React from "react";
import { Link } from "react-router-dom";
import pic from "./assets/ragul.jpg";

function Home() {
  return (
    <div>
<div className="flex justify-between items-center px-4 py-3 bg-black text-blue-900 text-2xl md:text-3xl font-bold shadow-md cursor-pointer">
        <p className="hover:text-amber-200" onClick={Home}>Home</p>
        <p className="hover:text-amber-200" onClick={About}>About</p>
        <p className="hover:text-amber-200">Projects</p>
        <p className="hover:text-amber-200">Contact</p>
      </div>

   <div className="relative h-screen w-full " id="Home">
    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
     alt="Bg" className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-700 text-4xl font-bold space-y-4">
      <p>Ragul B</p>
      <p>I'M Developer</p>
    </div>
    </div>
    <div id="About" className="bg-gradient-to-b from-blue-200 to to-blue-400 flex justify-between">
      
    <img src={pic} alt="ragul" className="rounded-full w-100 h-100 "></img>
    <p className="p-5 ">Born : 22/04/2004</p>
    <p> contact :123456780</p>
    <p>Email :aefeef</p>
    </div> 
    </div>
  );
}

export default Home;
