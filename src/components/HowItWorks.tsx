import StepsCard from './StepsCard'
import { Package } from 'lucide-react'
import FreeQuoteCard from './FreeQuoteCard'
import ImageGrid from './ImageGrid'

const HowItWorks = () => {
  return (
    <div className='bg-white flex justify-center items-center flex-col h-full mx-[130px]'>
      <div className='grid grid-cols-2 border-b border-dashed py-18 mb-10'>
        <div className="w-[486px] h-[316px] bg-zinc-200 rounded-xl">
        </div>
        <div className="">
          <div className="uppercase font-sg text-blue-1 text-[12px] mb-4">How it works</div>
          <div className="font-sg font-bold text-[42px] flex flex-col leading-[130%] uppercase text-blue-2 mb-4">
            <span>Simplify your Shipping</span>
            <span>experience with our</span>
            <span>easy step process</span>
          </div>
          <div className="text-[16px] font-roboto text-grey-2">At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless shipping experiences.</div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24'>
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
      <div>
        <ImageGrid/>
      </div>
    </div>
  )
}

export default HowItWorks