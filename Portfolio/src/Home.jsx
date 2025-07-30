import React from "react";
import { Link } from "react-router-dom";
import pic from "./assets/ragul.jpg";

function Home() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen"> 
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center text-white px-4">
          <p className="font-bold text-4xl sm:text-6xl mb-4 text-cyan-300">Ragul B</p>

          <div className="flex gap-6 mb-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://w7.pngwing.com/pngs/940/589/png-transparent-linkedin-free-text-telephone-call-trademark-thumbnail.png"
                alt="LinkedIn"
                className="h-9 w-9 rounded-full hover:scale-110 transition"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="GitHub"
                className="h-9 w-9 rounded-full hover:scale-110 transition"
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 font-semibold text-sm sm:text-base">
            <Link to="/" className="hover:text-cyan-300">Home</Link>
            <Link to="#about" className="hover:text-cyan-300">About</Link>
            <Link to="/projects" className="hover:text-cyan-300">Projects</Link>
            <Link to="/certifications" className="hover:text-cyan-300">Certifications</Link>
            <Link to="/contact" className="hover:text-cyan-300">Contact</Link>
            <Link to="/resume" className="hover:text-cyan-300">Resume</Link>
          </div>

          <p className="mt-10 text-2xl sm:text-4xl font-bold text-white">I'm a Developer</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-gray-950 to-gray-900 px-6 py-20 text-white">
        <p className="text-4xl font-extrabold text-center text-cyan-400 mb-12">About Me</p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-12 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-8 shadow-[0_0_20px_#00FFFF55] border border-cyan-500">
          <img
            src={pic}
            alt="Profile of Ragul"
            className="w-52 h-52 rounded-full object-cover shadow-lg border-4 border-cyan-500 mx-auto"
          />

          <div className="space-y-4 text-gray-300">
            <h2 className="text-3xl font-bold text-cyan-300">Ragul B</h2>
            <p className="text-lg text-gray-400">Web Developer</p>

            <ul className="space-y-2">
              <li><span className="text-cyan-400 font-semibold">🎂 Birthday:</span> 22/04/2004</li>
              <li><span className="text-cyan-400 font-semibold">📞 Phone:</span> 1234567890</li>
              <li><span className="text-cyan-400 font-semibold">📍 City:</span> Tiruppur</li>
            </ul>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I’m a passionate web developer focused on building responsive and user-centric interfaces.
              With expertise in HTML, CSS, JavaScript, and React, I love transforming creative ideas into real-world web solutions.
              I stay updated with trends and aim to innovate at every step.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
