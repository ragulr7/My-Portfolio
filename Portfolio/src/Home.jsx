import React from "react";
import pic from "./assets/ragul.jpg";
import to from "./assets/To-do.png";

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
  <a href="https://www.linkedin.com/in/ragul-b-05448b248/" target="_blank" >
    <img src="https://blakeoliver.com.au/wp-content/uploads/2023/06/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930585_835-1536x1536.png" className="h-9 w-9 rounded-full hover:scale-110 transition" />
  </a>
  <a href="https://github.com/ragulr7" target="_blank"> 
  <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" className="h-9 w-9 rounded-full hover:scale-110 transition" />
  </a>
    </div>  
            
        <a href="#Home" className="hover:text-amber-200">Home</a>
        <a href="#About" className="hover:text-amber-200">About</a>
        <a href="#Projects" className="hover:text-amber-200">Projects</a>
        <a href="#Contact" className="hover:text-amber-200">Contact</a>
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

    <div className="col-span-1 md:col-span-2 mt-8">
      <p className="text-3xl text-cyan-300 mb-4 text-center">Skills</p>
      <div className="flex flex-col sm:flex-row justify-evenly items-start sm:items-center">
        <ul className="list-disc list-inside text-gray-400 mb-4 sm:mb-0 sm:mr-8">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <ul className="list-disc list-inside text-gray-400">
          <li>Java</li>
          <li>SQL</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section id="Projects" className="relative min-h-screen bg-black px-6 py-12">
  <p className="text-4xl sm:text-5xl font-extrabold text-blue-500 mb-6">Projects</p>
  
  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl">
    In project development and implementation, I orchestrate ideas into functional solutions, navigating the entire lifecycle. I meticulously plan, code, and deploy, ensuring seamless execution. Adaptable and detail-oriented, I thrive on transforming concepts into tangible, user-friendly applications. My approach blends innovation with efficiency, resulting in impactful digital experiences that meet and exceed expectations. Let's embark on a journey of turning vision into reality through effective project development and implementation.
  </p>
  <div className=" flex justify-center items-center gap-4 mt-8 flex-wrap">
    <span>
 <img
   src={to}
  alt="To-do"
  className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
  onClick={() => window.open("https://github.com/ragulr7/ToDoList", "_blank")}
   /> 
         <p className="text-center mt-2 font-bold text-2xl  text-red-700">To-Do List</p>
</span>
    <img
   src={to}
  alt="To-do"
  className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
  onClick={() => window.open("https://github.com/ragulr7/ToDoList", "_blank")}
   /> 
 <img
   src={to}
  alt="To-do"
  className="rounded w-90 h-70 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300"
  onClick={() => window.open("https://github.com/ragulr7/ToDoList", "_blank")}
   /> 
  </div>
</section>


      
      

      </main>
    </div>
  );
}

export default Home;
