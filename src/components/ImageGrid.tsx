import img1 from '../assets/images/img3.png'
import img2 from '../assets/images/img4.png'
import img3 from '../assets/images/img5.png'
import img4 from '../assets/images/img6.png'
import img5 from '../assets/images/img7.png'
import img6 from '../assets/images/img8.png'

const ImageGrid = () => {
  return (
    <div className='my-24'>
      <div className="grid grid-cols-2 w-[1150px]">
        <div className='m-3'><img className='rounded-3xl' src={img1} alt="img1" /></div>
        <div className='m-3'><img className='rounded-3xl' src={img2} alt="img2" /></div>
      </div>
      <div className="grid grid-cols-4">
        <div  className='m-3'><img className="rounded-3xl" src={img3} alt="img3" /></div>
        <div  className='m-3'><img className="rounded-3xl" src={img4} alt="img3" /></div>
        <div  className='m-3'><img className="rounded-3xl" src={img5} alt="img3" /></div>
        <div  className='m-3'><img className="rounded-3xl" src={img6} alt="img4" /></div>
      </div>
    </div>
  )
}

export default ImageGrid