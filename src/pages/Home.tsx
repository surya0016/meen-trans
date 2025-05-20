import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='grid grid-cols-1 scroll-smooth'>
      <Hero/>
      <Services/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Home