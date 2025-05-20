import img1 from '../assets/images/img3.png'
import img2 from '../assets/images/img4.png'
import img3 from '../assets/images/img5.png'
import img4 from '../assets/images/img6.png'
import img5 from '../assets/images/img7.png'
import img6 from '../assets/images/img8.png'

const ImageGrid = () => {
  return (
    <div className='md:my-24 my-12' id='testimonials'>
      <div className="grid md:grid-cols-2 w-full grid-cols-1 ">
        <div className='m-3'><img className='md:rounded-3xl rounded' src={img1} alt="img1" /></div>
        <div className='m-3'><img className='md:rounded-3xl rounded' src={img2} alt="img2" /></div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 w-full">
        <div  className='m-3'><img className="md:rounded-3xl rounded" src={img3} alt="img3" /></div>
        <div  className='m-3'><img className="md:rounded-3xl rounded" src={img4} alt="img3" /></div>
        <div  className='m-3'><img className="md:rounded-3xl rounded" src={img5} alt="img3" /></div>
        <div  className='m-3'><img className="md:rounded-3xl rounded" src={img6} alt="img4" /></div>
      </div>
    </div>
  )
}

export default ImageGrid