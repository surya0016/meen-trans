import { Navigate, useNavigate } from 'react-router-dom'
import bgImage from '../assets/images/img1.jpg'
import logo from '../assets/images/img10.png'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="flex justify-between items-center border-b border-grey-3 px-16">
        <span className="flex items-cente py-[11px]">
          <img src={logo} alt="logo" width={100}/>
        </span>
        <span className="ml-20  text-white cursor-pointer font-nutino text-[14px] font-medium">
          <span className="transition-colors duration-200 hover:text-yellow-1 px-8 py-3">About</span>
          <span className="transition-colors duration-200 hover:text-yellow-1 px-8 py-3">Working</span>
          <span className="transition-colors duration-200 hover:text-yellow-1 px-8 py-3">Benefits</span>
          <span className="transition-colors duration-200 hover:text-yellow-1 px-8 py-3">Testimoniols</span>
        </span>
        <span>
          <button onClick={()=>navigate("/contact-us")} className="px-7 py-2 mr-[50px] bg-yellow-3 border-0 text-white font-inter cursor-pointer">
            Contact Us
          </button>
        </span>
      </nav>
      <main className="font-inter flex justify-center items-start flex-col text-white text-start h-135 mx-[120px]">
        <div className="text-[16px] font-normal text-yellow-2 mb-5 ">FAST & RELIABLE SHIPPING</div>
        <div className="font-bold text-5xl flex flex-col mb-4"><span className='mb-2'>We Get Your Packages </span><span>Delivered On Time!</span></div>
        <div className="text-[16px] leading-[27px]  text-grey-4 mb-6">When speed and efficiency matter, our experts ensure your products reach <br /> their destination safely and on schedule.</div>
        <div className="">
          <button className="px-[33px] py-[12px] bg-yellow-3 text-white cursor-pointer ">
            Explore our Services
          </button>
        </div>
      </main>
    </div>
  )
}

export default Hero