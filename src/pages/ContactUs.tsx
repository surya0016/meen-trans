import { ChevronRight } from 'lucide-react'

const ContactUs = () => {
  return (
    <>
    <div className='mx-[304px] my-[60px]'>
      <nav className='mb-8'>
        <span className="flex justify-start items-center">
           <span><a href="/">Home</a></span> <ChevronRight size={20} className='text-center'/> <span className='text-amber-900'>Contact Us</span>
        </span>
      </nav>
      <div className="flex flex-col justify-center items-center ">
        <h2 className="text-2xl uppercase font-bold mb-6 font-dm-sans pb-2 border-b-4 border-b-yellow-2/20">Contact Us</h2>
        <p className='mb-6'>Feel free to reach out using our contact form, and we'll respond promptly.</p>
          <form className="w-full">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-2.5  border border-gray-300 rounded-md outline-none transition"
                  placeholder="Last name"
                  required
                />
              </div>
              <div>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-6 py-2.5  border border-gray-300 rounded-md outline-none transition"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-6 py-2.5  border border-gray-300 rounded-md outline-none transition"
                placeholder="Phone number"
                required
              />
            </div>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-6 py-2.5 mb-12 border border-gray-300 rounded-md outline-none transition resize-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="font-roboto cursor-pointer text-[16px] px-6 py-3 w-full bg-yellow-3 text-white font-medium rounded-lg hover:bg-yellow-3/90  transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default ContactUs