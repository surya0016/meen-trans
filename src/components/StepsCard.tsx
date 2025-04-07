import { LucideIcon } from 'lucide-react';

interface StepsCardProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon; 
}

const StepsCard = ({
  step,
  title, 
  description, 
  icon:Icon,  
}:StepsCardProps) => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[287px] mx-8'>
      <div className="border-2 px-[16px] py-[6px] border-grey-1 text-blue-2 text-[12px] rounded-full mb-4">Step {step}</div>
      <div className="w-[132px] h-[132px] bg-blue-3 text-white rounded-lg flex justify-center items-center"><Icon size={60}></Icon></div>
      <div className="text-[24px] leading-[130%] font-bold font-sg text-blue-2 my-6 uppercase">{title}</div>
      <div className="line-clamp-4 text-center text-[16px] font-normal leading-[140%] font-roboto text-grey-2">{description}</div>
    </div>
  )
}

export default StepsCard