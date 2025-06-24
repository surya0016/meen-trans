import ServiceCard from './ServiceCard'
import { Package, Plane, Ship, Truck } from 'lucide-react'

const Services = () => {

  const cardData = [
      {
        title:"Sea Freight",
        description:"FCL & LCL ocean shipping via major ports. Reliable, timely, and cost-effective.",
        icon: Ship
      },
      {
        title:"Land Freight",
        description:"Road and rail logistics across borders.Fast and efficient transport.",
        icon: Truck
      },
      {
        title:"Air Freight",
        description:"Air - To Be Starting Soon",
        icon: Plane,
        available: true
      },
      {
        title:"Custom Clearance",
        description:"Seamless customs processing and documentation.Hassle-free and compliant.",
        icon: Package
      },
      {
        title:"Freight Forwarding",
        description:"End-to-end logistics coordination. Air, land, and sea covered.",
        icon: Package
      },
      {
        title:"Insurance",
        description:"Cargo insurance launching soon.Protect your goods in transit.",
        icon: Package
      },
  ]


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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 w-full max-w-6xl justify-items-center">
        {cardData.map((card, index)=>(
          <ServiceCard 
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon} 
            available={card.available}
            />
        ))}
      </div>
    </div>
  )
}

export default Services