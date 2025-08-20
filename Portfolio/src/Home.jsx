import React from "react";
import pic from "./assets/ragul.jpg";
import photo from "./assets/me.jpg";
import to from "./assets/To-do.png";
import le from "./assets/leave.png";
import sb from "./assets/smartbin.png";
import ja from "./assets/java.png"; 
import cc from "./assets/cloud.png"; 
function Home() {
  return (
    <div className="flex h-screen font-sans"> 

      <nav className="w-1/4 md:w-1/5 bg-black text-white flex flex-col justify-center items-center space-y-8 text-xl font-semibold">
                  <img
              src={pic}
              alt="Ragul"
              className="rounded-full w-40 h-40 sm:w-52 sm:h-52 object-cover shadow-lg border-4 border-blue-800"
            /> 
    <p className="text-3xl ">Ragul B</p>
  <div className="flex justify-evenly">
  
   


    </div>  
            
        <a href="#Home" className="hover:text-amber-200">Home</a>
        <a href="#About" className="hover:text-amber-200">About</a>
        <a href="#Skills" className="hover:text-amber-200">Skills</a>
        <a href="#Education" className="hover:text-amber-200">Education</a>
        <a href="#Projects" className="hover:text-amber-200">Projects</a>
        <a href="#Contact" className="hover:text-amber-200">Contact</a>
        <a href="https://drive.google.com/file/d/1DFPX5nnZRv0htLQD849ZrXEMt2php7xr/view?usp=drive_link" target="_blank" className="hover:text-amber-200">Resume</a>
      </nav>

      <main className="w-3/4 md:w-4/5 overflow-y-auto">

        <section id="Home" className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center text-white text-4xl font-bold space-y-4">
            <p>Ragul B</p>
            <p>I'M Developer</p>
          </div>
        </section>

        
        <section id="About" className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 py-20 text-white">
  <p className="text-4xl font-extrabold text-center text-cyan-400 mb-12">About Me</p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_20px_#00FFFF55] border border-cyan-500">

    <img
      src={pic}
      alt="Profile of Ragul"
      className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover shadow-lg border-4 border-cyan-500 mx-auto"
    />

    <div className="space-y-4 text-gray-300">
      <h2 className="text-3xl font-bold text-cyan-300">Ragul B</h2>
      <p className="text-lg text-gray-400">Web Developer</p>

      <p className="mt-4 text-gray-400 leading-relaxed">
        I’m a passionate web developer focused on building responsive and user-centric interfaces.
        With expertise in HTML, CSS, JavaScript, and React, I love transforming creative ideas into real-world web solutions.
        I stay updated with trends and aim to innovate at every step.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <ul className="space-y-2 text-sm sm:text-base">
          <li><span className="text-cyan-400 font-semibold">🎂 Birthday:</span> 22/04/2004</li>
          <li><span className="text-cyan-400 font-semibold">📞 Phone:</span> 1234567890</li>
          <li><span className="text-cyan-400 font-semibold">📍 City:</span> Tiruppur</li>
        </ul>
        <ul className="space-y-2 text-sm sm:text-base">
          <li><span className="text-cyan-400 font-semibold">🔞 Age:</span> 21</li>
          <li><span className="text-cyan-400 font-semibold">👨‍🎓 Degree:</span> B.Tech Information Technology</li>
          <li><span className="text-cyan-400 font-semibold">📧 Email:</span> ragul@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>

  
</section>
<section id="Skills" >
<div className=" px-4 bg-black">
  <h2 className="text-3xl font-bold mb-8 text-center text-white">Technical Skills</h2>
  <div className="mb-10 border-b border-[#02142B] pb-6">
    <h3 className=" font-semibold mb-4 text-transform: uppercase text-white">Programming Languages</h3>
    <div className="flex flex-wrap justify-center gap-8">
        <div className="flex items-center space-x-2">
        <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" className="h-20" alt="Java" />
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" className="h-20" alt="JavaScript" />
      </div>
    
     
    </div>
  </div>

  <div className=" border-b border-[#02142B] pb-6">
    <h3 className="font-semibold mb-4 text-transform: uppercase text-white">Front-End Technologies</h3>
    <div className="flex flex-wrap justify-center gap-8">
     <div className="flex items-center space-x-2">
        <img src="https://www.scmgalaxy.com/tutorials/wp-content/uploads/2021/07/etIjZH1615704154.png" className="h-20" alt="HTML" />
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" className="h-20" alt="css" />
      </div>
       <div className="flex items-center space-x-2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" className="h-20" alt="React" />
        <span className="text-lg">React.js</span>
      </div>
      
    </div>
  </div>
</div>

</section>
<section id="Education">
<div className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 py-20 text-white">
  <p className="text-4xl text-green-800 font-extrabold text-center mb-12">Education</p>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E0BAQFNy_01KOyhyA/company-logo_200_200/company-logo_200_200/0/1685594322324/pmhssalumni_logo?e=2147483647&v=beta&t=jKEOpzmZU7D9JyCTZWsY8gDgZRdPJ57YNnMzvAkgUMo"
        alt="School Logo"
        className="w-full h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2">
        <p className="text-sm italic text-gray-300">SSLC</p>
        <p className="text-lg font-semibold">July 2018 - May 2019</p>
        <p className="text-lg font-semibold">Percentage - <span className="text-cyan-400">79%</span></p>
      </div>
    </div>

    
    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E0BAQFNy_01KOyhyA/company-logo_200_200/company-logo_200_200/0/1685594322324/pmhssalumni_logo?e=2147483647&v=beta&t=jKEOpzmZU7D9JyCTZWsY8gDgZRdPJ57YNnMzvAkgUMo"
        alt="School Logo"
        className="w-full h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2">
        <p className="text-sm italic text-gray-300">HSC - Computer Science</p>
        <p className="text-lg font-semibold">July 2020 - May 2021</p>
        <p className="text-lg font-semibold">Percentage - <span className="text-cyan-400">89%</span></p>
      </div>
    </div>

    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white">
      <img
        src="https://prayalabs.com/sites/default/files/ngp.png"
        alt="College Logo"
        className="w-full h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2">
        <p className="text-sm italic text-gray-300">B.Tech Information Technology</p>
        <p className="text-lg font-semibold">November 2021 - April 2025</p>
        <p className="text-lg font-semibold">CGPA - <span className="text-cyan-400">7.5</span></p>
      </div>
    </div>

  </div>
</div>
</section>
<div className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 py-20 text-white">
  <p className="text-4xl text-white font-extrabold text-center mb-12">Online Certification</p>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
   

    
   <div className="relative group bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full cursor-pointer hover:scale-105 transition-transform duration-300">
  
  <img
    src={ja}
    alt="NPTEL Logo"
    className="w-full h-48 object-contain bg-white "
  />

  <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition duration-300">
    <p className="text-white font-semibold text-lg">Programming In Java</p>
    <a href="https://drive.google.com/file/d/1ZSXxpfy9jBKJxqTvx7rVjYeEwrNgG2V_/view?usp=drive_link"  target="_blank"className="text-white text-2xl mt-2">🔗</a>
  </div>

 
</div>

       

   
   <div className="relative group bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full cursor-pointer hover:scale-105 transition-transform duration-300 text-white">
  <img
    src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Vellore_Institute_of_Technology_Business_School_VIT_BS_54186d8069_26f401a9aa_b4584782bc_2c9b4d4396.png"
    alt="VIT Logo"
    className="w-full h-48 object-contain bg-white transition-transform duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity duration-300">
    <p className="text-white font-semibold text-lg">VIT</p>
    <a href="https://drive.google.com/file/d/1fIgkYYnMYMpQxCpVH7ex0WrPie5yn2Bg/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white text-2xl mt-2">🔗</a>
  </div>

 
</div>


    <div className=" relative group  bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white">
      <img
        src={cc}
        alt="Cloud Logo"
        className="w-full h-48 object-contain bg-white"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition-opacity duration-300">
    <p className="text-white font-semibold text-lg">Cloud</p>
    <a href="https://drive.google.com/file/d/1ZRFwVwc9XZF57UG6t3H1pa-je-oAEoek/view?usp=drive_link" target="_blank" className="text-white text-2xl mt-2">🔗</a>
  </div>
     
    </div>

  </div>
</div>
      <section id="Projects" className="relative min-h-screen bg-black px-6 py-12">
  <p className="text-4xl sm:text-5xl font-extrabold text-center text-blue-500 mb-6">Projects</p>
  
  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl">
    In project development and implementation, I orchestrate ideas into functional solutions, navigating the entire lifecycle. I meticulously plan, code, and deploy, ensuring seamless execution. Adaptable and detail-oriented, I thrive on transforming concepts into tangible, user-friendly applications. My approach blends innovation with efficiency, resulting in impactful digital experiences that meet and exceed expectations. Let's embark on a journey of turning vision into reality through effective project development and implementation.
  </p>
  <div className=" flex justify-center items-center gap-4 mt-8 flex-wrap">
    <span className="relative group">
 <img
   src={to}
  alt="To-do"
  className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
   /> 
         <p className="text-center mt-2 font-bold text-2xl  text-red-700">To-Do List</p>
          <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition duration-300">
    <p className="text-white font-semibold text-lg">To-Do List</p>
    <a href="https://github.com/ragulr7/ToDoList"  target="_blank"className="text-white text-2xl mt-2">🔗</a>
  </div>
</span>
<span className="relative group">
    <img
   src={le}
  alt="Leave Management"
  className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
   /> 
       <p className="text-center mt-2 font-bold text-2xl  text-red-700">Leave Management</p>
 <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition duration-300">
    <p className="text-white font-semibold text-lg">Leave Management</p>
    <a href="https://github.com/ragulr7/Leave"  target="_blank"className="text-white text-2xl mt-2">🔗</a>
  </div>
   </span>
   <span className="relative group">

 <img
   src={sb}
   alt="Smart Bin"
   className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300 "
   /> 
            <p className="text-center mt-2 font-bold text-2xl  text-red-700">Smart Bin</p>
 <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-40 transition duration-300">
    <p className="text-white font-semibold text-lg">Smart-Bin</p>
    <a href="https://github.com/ragulr7/Smart-Bin"  target="_blank"className="text-white text-2xl mt-2">🔗</a>
  </div>
   </span>
  </div>
</section>
<section id="Contact" className="bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 py-20 text-white">
  <p className="text-5xl sm:text-4xl font-extrabold text-amber-500 text-center">Contact</p>
  <p className="text-lg sm:text-xl text-gray-300 mt-4 mb-8 text-transform: uppercase text-center">
    Feel free to reach out for collaborations, inquiries, or just a friendly chat!</p>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
     <div className="bg-blue-950 flex items-center space-x-4 p-6 w-80 rounded-lg">
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/014/440/980/small_2x/email-message-icon-design-in-blue-circle-png.png" 
      className="h-12 w-12" 
      alt="Email Icon" 
    />
    <div>
      <p className="text-green-600 font-bold text-lg">Email</p>
      <p className="text-white">ragul@gmail.com</p>
    </div>
  </div>

  <div className="bg-blue-950 flex items-center space-x-4 p-6 rounded-lg w-80">
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/014/441/078/small/phone-call-icon-design-in-blue-circle-png.png" 
      className="h-12 w-12" 
      alt="Contact Icon" 
    />
    <div>
      <p className="text-green-600 font-bold text-lg">Contact</p>
      <p className="text-white">+91 23456789</p>
    </div>
  </div>


  <div className="bg-blue-950 flex items-start space-x-4 p-6 w-80 rounded-lg">
    <img 
      src="https://static.vecteezy.com/system/resources/thumbnails/014/576/658/small_2x/check-in-location-icon-in-blue-circle-png.png" 
      className="h-12 w-12" 
      alt="Location Icon" 
    />
    <div>
      <p className="text-green-600 font-bold text-lg">My Address</p> 
      <br></br> 
      <p className="text-white">Dharapuram</p>
      <p className="text-white">Tirupur, 638672</p>
    </div>
  </div>

 
  <div className="bg-blue-950 flex flex-col p-6 w-80 rounded-lg">
    <div className="flex items-center space-x-4 mb-4">
      <img 
        src="https://icon-library.com/images/sharing-icon-png/sharing-icon-png-14.jpg" 
        className="h-12 w-12" 
        alt="Social Icon" 
      />
      <p className="text-green-600 font-bold text-lg">Social Profiles</p>
    </div>
    <div className="flex space-x-4 pl-14">
      <a href="https://www.linkedin.com/in/ragul-b-05448b248/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-circle-1868976-1583140.png?f=webp" className="h-10 w-10" alt="LinkedIn" />
      </a>
      <a href="https://github.com/ragulr7" target="_blank" rel="noopener noreferrer">
        <img src="https://i.pinimg.com/564x/5c/2b/c5/5c2bc53db08acad9c2c1162e5cfd87ba.jpg" className="h-10 w-10" alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/i_am_ragul_7/" target="_blank" rel="noopener noreferrer">
        <img src="https://www.seekpng.com/png/full/283-2831855_insta-icon-circle-ltblue-instagram-icon-in-white.png" className="h-10 w-10" alt="Google" />
      </a>
    </div>
  </div>


 
</div>


  </section>


      
      

      </main>
    </div>
  );
}

export default Home;
