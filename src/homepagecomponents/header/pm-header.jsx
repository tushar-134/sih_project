import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import Menucard from "./Menu-card";

export default function PMHeader() {
//state and ref for guidelines menu
const [openMenu,setOpenMenu]=useState(false);
const menuRef=useRef();

//this for scrolling to sections on same page from header
   const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Section with ID "${id}" not found`);
  }
};

//useEffect for closing guidelines menu on outside click 
useEffect(()=>{
  const closeMenu=(e)=>{
    if(menuRef.current && !menuRef.current.contains(e.target)){
      setOpenMenu(false);
    }
  };
  document.addEventListener("mousedown",closeMenu);
  return ()=>document.removeEventListener("mousedown",closeMenu);
})
 
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-4 border-b border-gray-700/50">
        <div className="max-w-10xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>भारत सरकार / Government Of India</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button className="hover:text-orange-500">A-</button>
              <button className="hover:text-orange-500">A</button>
              <button className="hover:text-orange-500">A+</button>
            </div>

            <span className="text-gray-400">|</span>

            <select className="bg-gray-900 text-white px-1">
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-300 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-10xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center border border-gray-700">
              <span className="text-white text-xs font-bold">MCA</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-orange-500 drop-shadow-sm">PM</h1>
              <p className="text-xs text-gray-600">Internship</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/youth-registration"className="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all"
>Youth Registration</Link>
            <button className="bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-orange-600 hover:shadow-lg transition-all">
              Login
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="bg-gray-900/95 backdrop-blur-lg text-white shadow-inner">
          <div className="max-w-10xl mx-auto px-4 flex gap-8 text-sm font-semibold py-3">
            <Link to="/Home" className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all hover:after:w-full
 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full">HOME</Link>
            {/* this is guideline and documentations */}
            <div className="relative" ref={menuRef}>
            <button
              className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
"
              onClick={() => setOpenMenu(!openMenu)}
            >
              GUIDELINES / DOCUMENTATIONS
            </button>

            {openMenu && (
              <div className="absolute top-10 left-0 z-50 bg-white/30 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/40 transition-all duration-300
hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)]">
                <Menucard />
              </div>
            )}
          </div>
            {/* <Link to="/guidelines" className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
">GUIDELINES/DOCUMENTATIONS</Link> */}
             {/* <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={scrollToGallery}>GALLERY</button>
              {/* <Link to="/#gallery" className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
">GALLERY</Link> */}
            {/* <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={scrollToGallery}>ELIGIBILITY</button>
            <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={scrollToGallery}>SUPPORT</button> */ }

            <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={() => scrollToSection("gallery")}>GALLERY</button>
            <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={() => scrollToSection("eligibility")}>ELIGIBILITY</button>
            <button className="hover:text-orange-400 relative after:absolute after:left-0 after:bottom-0 
after:w-0 after:h-[2px] after:bg-orange-400 after:transition-all 
hover:after:w-full
" onClick={() => scrollToSection("support")}>SUPPORT</button>
          </div>
        </nav>
      </div>

      {/* Notification */}
      <div className="bg-blue-100 text-blue-900 px-4 py-2.5 text-sm border-b border-blue-200 shadow-sm
">
        <div className="max-w-10xl mx-auto">
          Check your dashboard, email, and SMS regularly for updates. Link Aadhaar
          with Your Bank Account - Now Easier!
        </div>
      </div>
    </header>
  );
}
