import bgImage from '../assets/images/img1.jpg'
import logo from '../assets/images/img10.png'

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="flex justify-between items-center border-b border-grey-3 px-16">
        <span className="flex items-cente py-[12px]">
          <img src={logo} alt="logo" width={100}/>
        </span>
        <span className="text-white cursor-pointer font-nutino text-[14px] font-medium">
          <span className="hover:text-yellow-1 px-8">About</span>
          <span className="hover:text-yellow-1 px-8">Working</span>
          <span className="hover:text-yellow-1 px-8">Benefits</span>
          <span className="hover:text-yellow-1 px-8">Testimoniols</span>
        </span>
        <span>
          <button className="px-7 py-2 bg-yellow-3 text-white font-inter cursor-pointer">
            Contact Us
          </button>
        </span>
      </nav>
      <main className="flex justify-center items-start flex-col text-white text-start h-135 mx-[120px]">
        <div className="text-[16px] font-normal font-inter text-yellow-2  mb-6 ">FAST & RELIABLE SHIPPING</div>
        <div className="font-inter font-bold text-5xl flex flex-col mb-4"><span className='mb-2'>We Get Your Packages </span><span>Delivered On Time!</span></div>
        <div className="font-inter text-[16px] leading-[27px] text-grey-4 mb-6">When speed and efficiency matter, our experts ensure your products react <br /> their destination safely and on schedule.</div>
        <div className="">
          <button className="px-[40px] py-[13px] bg-yellow-3 text-white font-inter cursor-pointer">
            Explore our Services
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home