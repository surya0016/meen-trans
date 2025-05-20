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
    <div id='about' className="bg-grey-1 flex justify-center items-center flex-col min-h-screen py-18 px-2 sm:px-4">
      <div className="text-blue-1 text-xs sm:text-sm font-medium uppercase font-sg leading-tight mb-4 sm:mb-6">
        OUR SERVICES
      </div>
      <div className="text-blue-2 font-bold font-sg text-2xl sm:text-4xl leading-snug sm:leading-[130%] uppercase flex flex-col justify-center items-center mb-6 sm:mb-10 text-center">
        <span>Efficient and Reliable Shipping</span>
        <span>with MEENSTRans</span> 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl justify-items-center">
        {renderCards(6)}
      </div>
    </div>
  )
}

export default Services