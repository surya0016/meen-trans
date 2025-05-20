const Footer = () => {
  return (
    <div className="font-work-sans bg-gray-100 text-sm px-4 sm:px-10 pt-10 sm:pt-[76px] m-0 sm:m-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 sm:gap-0 mb-10 sm:mb-[76px]">
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 sm:gap-12 w-full">
          <div>
            <div className="mb-4 text-[11px] text-gray-500">CONTACT US</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">+91 828932938</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Email Us</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Mon-Fri 9am-3pm PT</div>
          </div>
          <div>
            <div className="mb-4 text-[11px] text-gray-500">CUSTOMERS</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Start a Return</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Return Policy</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">FAQ</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">About exchange</div>
          </div>
          <div>
            <div className="mb-4 text-[11px] text-gray-500">COMPANY</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">About Us</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Privacy Policy</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Terms</div>
          </div>
        </div>
        <div className="sm:hidden border-t border-gray-300 w-full"/>
        <div className="w-full lg:w-[491px] px-0 lg:px-[25px] mt-2 lg:mt-0">
          <div className="text-[16px] mb-4">Get the latest new from us</div>
          <div>
            <input className="px-4 py-3 border border-gray-300 w-full mb-2 rounded" type="email" placeholder="Enter your email address"/>
          </div>
          <div className="text-[12px] mb-4">By signing up, you agree to our <u>Privacy Policy</u> and <u>Terms of Service</u>.</div>
          <button className="py-2.5 px-6 bg-black hover:bg-zinc-900 transition-colors duration-200 text-white cursor-pointer w-full sm:w-auto">Subscribe</button>
        </div>
      </div>
      <div className="pb-8 sm:pb-[42px] text-xs text-gray-500 text-center">
        &copy;MeenTrans@.in
      </div>
    </div>
  )
}

export default Footer