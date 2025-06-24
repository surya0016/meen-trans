import truck from "../assets/images/img2.png"

const FreeQuoteCard = () => {
  return (
    <div id="benefits" className="flex justify-between bg-blue-5 sm:rounded-[14px] px-[28px] sm:[32px] sm:w-[1150px] w-fit py-[42px] mb-20">
      <div className="">
        <div className="text-blue-4 font-inter font-semibold leading-[130%] text-2xl sm:text-[36px] flex flex-col justify-start items-start mb-6">
          <span>Ready to Transform Your </span>
          <span>Shipping Experience?</span> 
        </div>
        <div className="font-inter text-[18px] leading-[150%] flex flex-col justify-start items-start mb-8 text-blue-4/80">
          <span>Join countless other businesses that have streamlined their</span>
          <span>logistics with our cutting-edge solutions</span> 
        </div>
        <div>
          <button className="mt-4 cursor-pointer bg-linear-to-l from-orange-2 to-orange-1 transition-colors duration-200 px-[30px] py-[10px] rounded-sm text-white text-[16px] font-inter text-center">Get a Free Quote</button>
        </div>
      </div>
      <div className="hidden sm:block ">
        <img className="scale-x-[-1]" src={truck} alt="truck" height={"224px"} width={"408px"}/>
      </div>
    </div>
  )
}

export default FreeQuoteCard