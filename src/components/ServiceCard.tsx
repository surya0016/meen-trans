import { LucideIcon } from 'lucide-react';
import React from 'react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon:Icon,
}) => {
  return (
    <div className="group  hover:bg-blue-3 rounded-xl cursor-pointer transition-colors duration-300 hover:text-white bg-white flex justify-center items-start flex-col max-w-[340px] p-10">
      <div className="mb-4 bg-yellow-3 text-white p-[18px] rounded-lg"><Icon size={"40px"} ></Icon></div>
      <h3 className="text-[25px] text-blue-2 group-hover:text-white font-bold mb-2 uppercase font-sg transition-colors duration-300">{title}</h3>
      <p className="text-grey-2 group-hover:text-white line-clamp-4 transition-colors duration-300">{description}</p>
    </div>
  )
}

export default ServiceCard