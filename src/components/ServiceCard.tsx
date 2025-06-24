import { LucideIcon } from 'lucide-react';
import React from 'react'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon; 
  available?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon:Icon,
  available,
}) => {
  return (
    <div className="group hover:bg-blue-3 rounded-xl cursor-pointer transition-colors duration-300 hover:text-white bg-white flex justify-center items-center flex-col w-[360px] h-[250px] p-4">
      <div className={`mb-4 bg-linear-to-l from-orange-2 to-orange-1 text-white p-[18px] rounded-full flex-shrink-0`}>
        <Icon size={"40px"} />
      </div>
      <h3 className="text-[25px] text-center text-blue-2 group-hover:text-white font-bold mb-2 uppercase font-sg transition-colors duration-300 flex-shrink-0">
        {title}
      </h3>
      <p className="text-grey-2 text-center group-hover:text-white line-clamp-4 transition-colors duration-300 overflow-hidden">
        {description}
      </p>
      {available && (
        <div className="bg-gray-300 rounded-full px-2 py-1 text-xs mt-2 text-gray-700  ">
          Coming Soon
        </div>
      )}
    </div>
  )
}

export default ServiceCard