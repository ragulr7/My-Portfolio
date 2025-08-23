import { useState } from "react";
import pic from "./assets/ragul.jpg";
import to from "./assets/To-do.png";
import le from "./assets/leave.png";
import sb from "./assets/smartbin.png";
import ja from "./assets/java.png"; 
import cc from "./assets/cloud.png"; 
import ej from "./assets/E-jersey.png"

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen font-sans relative">
      {/* Sidebar Navigation */}
      <nav className="hidden md:flex md:w-1/4 lg:w-1/5 bg-black text-white flex-col justify-center items-center space-y-6 text-lg lg:text-xl font-semibold">
        <img
          src={pic}
          alt="Ragul"
          className="rounded-full w-32 h-32 lg:w-48 lg:h-48 object-cover shadow-lg border-4 border-blue-800"
        />
        <p className="text-2xl lg:text-3xl">Ragul B</p>
        {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((link) => (
          <a key={link} href={`#${link}`} className="hover:text-amber-200">{link}</a>
        ))}
        <a
          href="https://drive.google.com/file/d/1DFPX5nnZRv0htLQD849ZrXEMt2php7xr/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-200"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-black bg-gray-200 p-2 rounded-md shadow-md"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-black text-white flex flex-col items-center py-10 space-y-6 text-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <img
          src={pic}
          alt="Ragul"
          className="rounded-full w-28 h-28 object-cover shadow-lg border-4 border-blue-800"
        />
        <p className="text-2xl">Ragul B</p>
        {["Home", "About", "Skills", "Education", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="hover:text-amber-200"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1DFPX5nnZRv0htLQD849ZrXEMt2php7xr/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="hover:text-amber-200"
          onClick={() => setMenuOpen(false)}
        >
          Resume
        </a>
      </div>

      <main className="flex-1 overflow-y-auto">

        <section id="Home" className="relative h-screen">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl sm:text-4xl font-bold space-y-4">
            <p>Ragul B</p>
            <p>I'M Developer</p>
          </div>
        </section>

        {/* About Section */}
        <section id="About" className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 py-16 text-white">
          <p className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-400 mb-10">About Me</p>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-cyan-500">
            <img
              src={pic}
              alt="Profile of Ragul"
              className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-4 border-cyan-500 mx-auto"
            />
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300">Ragul B</h2>
              <p className="text-gray-400">Web Developer</p>
              <p>
                I’m a passionate web developer focused on building responsive and user-centric interfaces.
                Skilled in HTML, CSS, JavaScript, and React, I love transforming creative ideas into real-world web solutions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm">
                <ul className="space-y-2">
                  <li><span className="text-cyan-400 font-semibold">🎂 Birthday:</span> 22/04/2004</li>
                  <li><span className="text-cyan-400 font-semibold">📞 Phone:</span> 1234567890</li>
                  <li><span className="text-cyan-400 font-semibold">📍 City:</span> Tiruppur</li>
                </ul>
                <ul className="space-y-2">
                  <li><span className="text-cyan-400 font-semibold">🔞 Age:</span> 21</li>
                  <li><span className="text-cyan-400 font-semibold">👨‍🎓 Degree:</span> B.Tech IT</li>
                  <li><span className="text-cyan-400 font-semibold">📧 Email:</span> ragul@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="Skills" className="bg-black px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" className="h-16 sm:h-20" alt="Java" />
            <img src="https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" className="h-16 sm:h-20" alt="JavaScript" />
            </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
  Front-End Technologies
</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
  <div className="flex items-center space-x-2">
    <img 
      src="https://www.scmgalaxy.com/tutorials/wp-content/uploads/2021/07/etIjZH1615704154.png" 
      className="h-20" 
      alt="HTML" 
    />
  </div>

  <div className="flex items-center space-x-2">
    <img 
      src="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" 
      className="h-20" 
      alt="CSS" 
    />
  </div>

  <div className="flex items-center space-x-2">
    <img 
      src="https://miro.medium.com/v2/resize:fit:1400/1*MF5V_dkybUTcfzwHFh0VSw.jpeg" 
      className="h-20" 
      alt="React" 
    />
  </div>
</div>

        </section>
<section id="Education" className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 lg:px-12 py-16 text-white">
  <p className="text-3xl sm:text-4xl font-extrabold text-green-600 text-center mb-10">Education</p>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white hover:scale-105 transition-transform duration-300">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E0BAQFNy_01KOyhyA/company-logo_200_200/company-logo_200_200/0/1685594322324/pmhssalumni_logo?e=2147483647&v=beta&t=jKEOpzmZU7D9JyCTZWsY8gDgZRdPJ57YNnMzvAkgUMo"
        alt="School Logo"
        className="w-full h-40 sm:h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2 text-center">
        <p className="text-sm italic text-gray-300">SSLC</p>
        <p className="text-base sm:text-lg font-semibold">July 2018 - May 2019</p>
        <p className="text-base sm:text-lg font-semibold">
          Percentage - <span className="text-cyan-400">79%</span>
        </p>
      </div>
    </div>

    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white hover:scale-105 transition-transform duration-300">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E0BAQFNy_01KOyhyA/company-logo_200_200/company-logo_200_200/0/1685594322324/pmhssalumni_logo?e=2147483647&v=beta&t=jKEOpzmZU7D9JyCTZWsY8gDgZRdPJ57YNnMzvAkgUMo"
        alt="School Logo"
        className="w-full h-40 sm:h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2 text-center">
        <p className="text-sm italic text-gray-300">HSC - Computer Science</p>
        <p className="text-base sm:text-lg font-semibold">July 2020 - May 2021</p>
        <p className="text-base sm:text-lg font-semibold">
          Percentage - <span className="text-cyan-400">89%</span>
        </p>
      </div>
    </div>

    <div className="bg-[#02142B] rounded-xl overflow-hidden shadow-lg w-full text-white hover:scale-105 transition-transform duration-300">
      <img
        src="https://prayalabs.com/sites/default/files/ngp.png"
        alt="College Logo"
        className="w-full h-40 sm:h-48 object-contain bg-white"
      />
      <div className="p-4 space-y-2 text-center">
        <p className="text-sm italic text-gray-300">B.Tech Information Technology</p>
        <p className="text-base sm:text-lg font-semibold">Nov 2021 - Apr 2025</p>
        <p className="text-base sm:text-lg font-semibold">
          CGPA - <span className="text-cyan-400">7.5</span>
        </p>
      </div>
    </div>
  </div>
</section>

<section className="bg-gradient-to-b from-gray-950 to-gray-900 px-4 sm:px-6 lg:px-12 py-16 text-white">
  <p className="text-3xl sm:text-4xl font-extrabold text-center mb-10">Online Certifications</p>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="relative group bg-[#02142B] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={ja} alt="Java" className="w-full h-40 sm:h-48 object-contain bg-white" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <a href="https://drive.google.com/file/d/1ZSXxpfy9jBKJxqTvx7rVjYeEwrNgG2V_/view?usp=drive_link" target="_blank" className="text-white text-2xl">🔗</a>
      </div>
    </div>

    <div className="relative group bg-[#02142B] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src="https://d2lk14jtvqry1q.cloudfront.net/media/small_Vellore_Institute_of_Technology_Business_School_VIT_BS_54186d8069_26f401a9aa_b4584782bc_2c9b4d4396.png"
        alt="VIT"
        className="w-full h-40 sm:h-48 object-contain bg-white" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <a href="https://drive.google.com/file/d/1fIgkYYnMYMpQxCpVH7ex0WrPie5yn2Bg/view?usp=drive_link" target="_blank" className="text-white text-2xl">🔗</a>
      </div>
    </div>

    <div className="relative group bg-[#02142B] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={cc} alt="Cloud" className="w-full h-40 sm:h-48 object-contain bg-white" />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <a href="https://drive.google.com/file/d/1ZRFwVwc9XZF57UG6t3H1pa-je-oAEoek/view?usp=drive_link" target="_blank" className="text-white text-2xl">🔗</a>
      </div>
    </div>
  </div>
</section>

<section id="Projects" className="relative min-h-screen bg-black px-6 py-12">
  <p className="text-4xl sm:text-5xl font-extrabold text-center text-blue-500 mb-6">
    Projects
  </p>

  <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto text-center">
    In project development and implementation, I orchestrate ideas into functional solutions, 
    navigating the entire lifecycle. I meticulously plan, code, and deploy, ensuring seamless 
    execution. Adaptable and detail-oriented, I thrive on transforming concepts into tangible, 
    user-friendly applications. My approach blends innovation with efficiency, resulting in 
    impactful digital experiences that meet and exceed expectations. Let's embark on a journey 
    of turning vision into reality through effective project development and implementation.
  </p>

  <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
    <span className="relative group">
      <img 
        src={to} 
        alt="To-do" 
        className="rounded w-72 h-48 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300" 
      />
      <p className="text-center mt-2 font-bold text-2xl text-red-700">To-Do List</p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <p className="text-white font-semibold text-lg">To-Do List</p>
        <a 
          href="https://github.com/ragulr7/ToDoList" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl mt-2"
        >
          🔗
        </a>
      </div>
    </span>

    <span className="relative group">
      <img 
        src={ej} 
        alt="E-Jersey" 
        className="rounded w-72 h-48 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300" 
      />
      <p className="text-center mt-2 font-bold text-2xl text-red-700">E-Jersey-Shop</p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <p className="text-white font-semibold text-lg">E-Jersey Shop</p>
        <a 
          href="https://github.com/ragulr7/E-jersey" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl mt-2"
        >
          🔗
        </a>
      </div>
    </span>
     <span className="relative group">
      <img 
        src={le} 
        alt="Leave Management" 
        className="rounded w-72 h-48 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300" 
      />
      <p className="text-center mt-2 font-bold text-2xl text-red-700">Leave Management</p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <p className="text-white font-semibold text-lg">Leave Management</p>
        <a 
          href="https://github.com/ragulr7/Leave" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl mt-2"
        >
          🔗
        </a>
      </div>
    </span>


    <span className="relative group">
      <img 
        src={sb} 
        alt="Smart Bin" 
        className="rounded w-72 h-48 mt-3 cursor-pointer hover:scale-105 transition-transform duration-300" 
      />
      <p className="text-center mt-2 font-bold text-2xl text-red-700">Smart Bin</p>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-80 transition duration-300">
        <p className="text-white font-semibold text-lg">Smart Bin</p>
        <a 
          href="https://github.com/ragulr7/Smart-Bin" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white text-2xl mt-2"
        >
          🔗
        </a>
      </div>
    </span>
  </div>
</section>


<section id="Contact" className="bg-gradient-to-b from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-12 py-16 text-white">
  <p className="text-3xl sm:text-4xl font-extrabold text-center text-amber-500">Contact</p>
  <p className="text-center text-gray-300 mt-4 mb-8 text-sm sm:text-lg">
    Feel free to reach out for collaborations or inquiries!
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
    <div className="bg-blue-950 flex items-center space-x-4 p-6 w-full max-w-xs rounded-lg">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/014/440/980/small_2x/email-message-icon-design-in-blue-circle-png.png" className="h-10 w-10" alt="Email Icon" />
      <div>
        <p className="text-green-500 font-bold">Email</p>
        <p>ragul@gmail.com</p>
      </div>
    </div>

    <div className="bg-blue-950 flex items-center space-x-4 p-6 w-full max-w-xs rounded-lg">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/014/441/078/small/phone-call-icon-design-in-blue-circle-png.png" className="h-10 w-10" alt="Phone Icon" />
      <div>
        <p className="text-green-500 font-bold">Phone</p>
        <p>+91 23456789</p>
      </div>
    </div>

    <div className="bg-blue-950 flex items-start space-x-4 p-6 w-full max-w-xs rounded-lg">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/014/576/658/small_2x/check-in-location-icon-in-blue-circle-png.png" className="h-10 w-10" alt="Location Icon" />
      <div>
        <p className="text-green-500 font-bold">Address</p>
        <p>Dharapuram</p>
        <p>Tiruppur, 638672</p>
      </div>
    </div>

    <div className="bg-blue-950 flex flex-col items-center p-6 w-full max-w-xs rounded-lg">
      <p className="text-green-500 font-bold mb-4">Social Profiles</p>
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/ragul-b-05448b248/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-linkedin-circle-1868976-1583140.png" className="h-8 w-8" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ragulr7" target="_blank" rel="noopener noreferrer">
          <img src="https://i.pinimg.com/564x/5c/2b/c5/5c2bc53db08acad9c2c1162e5cfd87ba.jpg" className="h-8 w-8 rounded-full" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/i_am_ragul_7/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.seekpng.com/png/full/283-2831855_insta-icon-circle-ltblue-instagram-icon-in-white.png" className="h-8 w-8 rounded-full" alt="Instagram" />
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
