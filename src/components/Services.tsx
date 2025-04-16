import ServiceCard from './ServiceCard'
import { Package } from 'lucide-react'

const Services = () => {

  const renderCards = (count: number) => {
    const cards = []
    for (let i = 0; i < count; i++) {
      cards.push(
        <ServiceCard 
          key={i}
          title="Air Shipping"
          description="At FastGo, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. "
          icon={Package} />
      )
    }
    return cards
  }

  return (
    <div className='bg-grey-1 flex justify-center items-center flex-col h-[1038px]'>
      <div className='text-blue-1 text-[14px] font-medium uppercase font-sg leading-[9%] mb-6'>OUR SERVICES</div>
      <div className='text-blue-2 font-bold font-sg text-[42px] leading-[130%] uppercase flex flex-col justify-center items-center mb-10'>
        <span className="">Efficient and Reliable Shipping</span><span className="">with MEENSTRans</span> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderCards(6)}
      </div>
    </div>
  )
}

export default Services