import truck from "../assets/images/img2.png"

const FreeQuoteCard = () => {
  return (
    <div className="flex justify-between bg-blue-5 rounded-[14px] px-[32px] w-[1150px] py-[42px]">
      <div className="">
        <div className="text-blue-4 font-inter font-semibold leading-[130%] text-[36px] flex flex-col justify-start items-start mb-6">
          <span>Ready to Revolutionize Your</span>
          <span>Logistics Operations?</span> 
        </div>
        <div className="font-inter text-[18px] leading-[150%] flex flex-col justify-start items-start mb-8">
          <span>Join countless other businesses that have streamlined their</span>
          <span>logistics with our cutting-edge solutions</span> 
        </div>
        <div>
          <button className="cursor-pointer bg-blue-4 hover:bg-blue-4/80 transition-colors duration-200 px-[30px] py-[10px] rounded-sm text-white text-[16px] font-inter text-center">Get a Free Quote</button>
        </div>
      </div>
      <div >
        <img className="scale-x-[-1]" src={truck} alt="truck" height={"262px"} width={"444px"}/>
      </div>
    </div>
  )
}

export default FreeQuoteCard