
const Footer = () => {
  return (
    <div className="font-work-sans bg-gray-100 text-sm px-[40px] pt-[76px] m-4">
      <div className="flex justify-between mb-[76px]">
        <div className="grid grid-cols-3 gap-18 ">
          <div className="">
            <div className="mb-4 text-[11px] text-gray-500">CONTACT US</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">+91 828932938</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Email Us</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Mon-Fri 9am-3pm PT</div>
          </div>
          <div className="">
            <div className="mb-4 text-[11px] text-gray-500">CUSTOMERS</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Start a Return</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Return Policy</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">FAQ</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">About exchange</div>
          </div>
          <div className="">
            <div className="mb-4 text-[11px] text-gray-500">COMPANY</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">About Us</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Privacy Policy</div>
            <div className="text-[13px] mb-1 cursor-pointer hover:underline">Terms</div>
          </div>
        </div>
        <div className="w-[491px] px-[25px]">
          <div className="text-[16px] mb-4">Get the latest new from us</div>
          <div><input className="px-[14px] py-[12px] border border-gray-300 w-full mb-2" type="email" placeholder="Enter your email address"/></div>
          <div className="text-[12px] mb-4">By signing up, you agree to our <u>Privacy Policy</u> and <u>Terms of Service</u>.</div>
          <button className="py-2.5 px-6 bg-black hover:bg-zinc-900 transition-colors duration-200 text-white cursor-pointer">Subscribe</button>
        </div>
      </div>
      <div className="pb-[42px] text-xs text-gray-500">
      &copy;MeenTrans@.in
      </div>
    </div>
  )
}

export default Footer