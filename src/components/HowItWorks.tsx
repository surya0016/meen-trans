import StepsCard from './StepsCard'
import { Package } from 'lucide-react'
import FreeQuoteCard from './FreeQuoteCard'
import ImageGrid from './ImageGrid'
import img11 from '../assets/images/img11.png'

const HowItWorksMobile = () => {
  return (
    <div id='working' className='bg-white flex justify-center items-center flex-col h-full sm:mx-[130px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 border-b border-dashed py-8 md:py-18 mb-8 md:mb-10 gap-6 mx-4'>
        <img src={img11} alt="image" className='h-[243px] sm:h-[339px]'/>
        <div>
          <div className="uppercase font-sg text-blue-1 text-[12px] mb-2 md:mb-4">How it works</div>
          <div className="font-sg font-bold text-[24px] md:text-[40px] flex flex-col leading-[130%] uppercase text-blue-2 mb-2 md:mb-4">
            <span>Simplify your Shipping</span>
            <span>experience with our</span>
            <span>easy step process</span>
          </div>
          <div className="text-[14px] md:text-[16px] font-roboto text-grey-2">
            At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24'>
        <StepsCard
          step={1}
          title="Request a Quote"
          description="At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. "
          icon={Package} 
        />
        <StepsCard
          step={2}
          title="Provide Details"
          description="At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. "
          icon={Package} 
        />
        <StepsCard
          step={3}
          title="Schedule Pick-Up"
          description="At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. "
          icon={Package} 
        />
      </div>
      <div>
        <FreeQuoteCard/>
      </div>
      <div className='mx-4'>
        <ImageGrid/>
      </div>
    </div>
  )
}

export default HowItWorksMobile