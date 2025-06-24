import { useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/img1.jpg'
import logo from '../assets/images/img10.png'
import { AlignJustify, X } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
    className="bg-cover bg-center h-[450px] md:h-screen"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <nav className="flex flex-row justify-between items-center border-b border-grey-3 px-4 sm:px-16 py-2">
      <span className="flex items-center py-[11px]">
        <img src={logo} alt="logo" width={80} className="w-15 sm:w-20" />
      </span>
      <span className="hidden sm:flex sm:flex-row ml-0 sm:ml-20 text-white cursor-pointer font-nutino text-[14px] font-medium">
        <a 
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
          >
          <span className="transition-colors duration-200 hover:text-yellow-1 px-4 py-2 sm:px-8 sm:py-3">About</span>
        </a>
        <a 
          href="#working"
          onClick={(e) => handleNavClick(e, 'working')}
          >
          <span className="transition-colors duration-200 hover:text-yellow-1 px-4 py-2 sm:px-8 sm:py-3">Working</span>
        </a>
        <a 
          href="#benefits"
          onClick={(e) => handleNavClick(e, 'benefits')}
          >
          <span className="transition-colors duration-200 hover:text-yellow-1 px-4 py-2 sm:px-8 sm:py-3">Benefits</span>
        </a>
        <a 
          href="#testimonials"
          onClick={(e) => handleNavClick(e, 'testimonials')}
          >
          <span className="transition-colors duration-200 hover:text-yellow-1 px-4 py-2 sm:px-8 sm:py-3">Testimonials</span>
        </a>
      </span>
      <span className="mt-2 sm:mt-0 hidden sm:block">
        <button
          onClick={() => navigate("/contact-us")}
          className="px-5 py-2 sm:px-7 mr-0 sm:mr-[50px] bg-linear-to-l from-orange-2 to-orange-1 border-0 text-white rounded-sm font-inter cursor-pointer w-full sm:w-auto"
        >
          Contact Us
        </button>
      </span>
      <button className="sm:hidden" onClick={() => setIsOpen(true)}>
        <AlignJustify className='text-white'/>
      </button>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sm:hidden flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
        <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-2 font-nutino text-[14px] font-medium text-gray-900">
          <li>
            <a href="#about">
              <span 
                className="block transition-colors duration-200 hover:text-yellow-1 px-4 py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About
              </span>
            </a>
          </li>
          <li>
            <a href="#working">
              <span 
                className="block transition-colors duration-200 hover:text-yellow-1 px-4 py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Working
              </span>
            </a>
          </li>
          <li>
            <a href="#benefits">
              <span 
                className="block transition-colors duration-200 hover:text-yellow-1 px-4 py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </span>
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <span 
                className="block transition-colors duration-200 hover:text-yellow-1 px-4 py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </span>
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/contact-us");
              }}
              className="w-full mt-4 px-5 py-2 border-0 text-white font-inter cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
    <main className="font-inter flex justify-center items-start flex-col text-white text-start h-auto sm:h-135 mx-4 sm:mx-[120px] mt-8 sm:mt-0">
      <div className="text-[14px] sm:text-[16px] font-normal text-yellow-2 mb-5">
        Driven by Precision, Delivered with Purpose
      </div>
      <div className="font-bold text-2xl sm:text-5xl flex flex-col mb-4">
        <span className="mb-1 sm:mb-2">Delivering More Than</span>
        <span>Just Cargo. Trust</span>
      </div>
      <div className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27px] text-grey-4 mb-6">
        When speed and efficiency matter, our experts ensure your products reach
        <br className="hidden sm:block" />
        their destination safely and on schedule.
      </div>
      <div>
        <a href="#about">
          <button className="px-6 py-3 sm:px-[33px] sm:py-[12px] rounded-sm bg-linear-to-l from-orange-2 to-orange-1 text-white cursor-pointer w-full sm:w-auto">
            Explore our Services
          </button>
        </a>
      </div>
    </main>
  </div>
  )
}

export default Hero