import StepsCard from './StepsCard'
import { FilePenLine, Package, Truck } from 'lucide-react'
import FreeQuoteCard from './FreeQuoteCard'
import ImageGrid from './ImageGrid'
import img11 from '../assets/images/img11.png'
import ContactUs from '../pages/ContactUs'

const HowItWorksMobile = () => {
  return (
    <div id='working' className='bg-white flex justify-center items-center flex-col h-full sm:mx-[130px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 border-b border-dashed py-8 md:py-18 mb-8 md:mb-10 gap-6 mx-4'>
        <img src={img11} alt="image" className='h-[243px] sm:h-[339px]'/>
        <div>
          <div className="uppercase font-sg text-blue-1 text-[12px] mb-2 md:mb-4">How it works</div>
          <div className="font-sg font-bold text-[24px] md:text-[40px] flex flex-col leading-[130%] uppercase text-blue-2 mb-2 md:mb-4">
            <span>EFFORTLESS SHIPPING</span>
            <span>MADE SIMPLE WITH</span>
            <span>MEENTREK</span>
          </div>
          <div className="text-[14px] md:text-[16px] font-roboto text-grey-2">
            Meentrek Logistics delivers tailored logistics solutions designed to simplify your global shipping journey. With expert support and streamlined processes, we ensure every shipment is handled with precision, reliability, and care. From quote to delivery, we make your logistics experience seamless and stress-free.
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mb-18'>
         <div className="text-blue-1 text-xs sm:text-sm font-medium uppercase font-sg leading-tight mb-4 sm:mb-6">
            ABOUT US
          </div>
          <div className="text-blue-2 font-bold font-sg text-2xl sm:text-4xl leading-snug sm:leading-[130%] uppercase flex flex-col justify-center items-center mb-6 sm:mb-10 text-center">
            <span>REDEFINING GLOBAL TRADE WITH</span>
            <span>RELIABLE & SMART LOGISTICS</span> 
          </div>
          <div className='mx-72 text-lg text-gray-600 mb-6 text-center'>
            <div className="mb-2 text-center">
              Meentrek Global Logistics Private Limited is a dynamic logistics and service solutions provider, established on 26th December 2024, with a vision to redefine the standards of global freight and supply chain management. Started in Bangalore and Mumbai (India), we are committed to delivering seamless, efficient, and tailored logistics services across borders.</div>
            <div className="mb-2 text-center">
              At Meentrek, we specialize in offering end-to-end logistics solutions that empower businesses to move goods reliably and on time. From freight forwarding and warehousing to supply chain optimization and last-mile delivery, our services are built around precision, transparency, and customer satisfaction.</div>
            <div className="mb-2 text-center">
              Our operations are led by our visionary directors, Kartik Mohan Pillay and Bhuvanesh Rajuswamy, who bring a wealth of industry knowledge and strategic insight. Their leadership drives our mission to provide innovative, tech-enabled logistics solutions that cater to the needs of modern businesses, whether large-scale enterprises or growing startups.
            </div>
            <div className="mb-2 text-center">
              With a robust network of partners and a customer-first approach, Meentrek Global Logistics is more than just a service provider — we are a trusted partner in your business growth journey.
            </div>
          </div>
      </div>
      <div>
        <FreeQuoteCard/>
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
          description="Share key shipment details like cargo type, dimensions, and destination. This helps us plan the most efficient and reliable logistics solution for you. "
          icon={FilePenLine} 
        />
        <StepsCard
          step={3}
          title="Schedule Pick-Up"
          description="Choose your preferred date, time, and pickup location. Our logistics experts ensure smooth coordination and timely dispatch. "
          icon={Truck} 
        />
      </div>
      <div className="">
        <ContactUs/>
      </div>
      <div className='mx-4'>
        <ImageGrid/>
      </div>
    </div>
  )
}

export default HowItWorksMobile