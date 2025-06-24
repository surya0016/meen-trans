import { ChevronRight } from 'lucide-react'

const ContactUs = () => {
  return (
    <div className='rounded-xl   shadow-lg w-full'>
      <div className="mx-2 sm:mx-8 md:mx-24 lg:mx-24 lg:my-18 my-4 sm:my-12 md:my-[60px] py-18">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-xl sm:text-2xl uppercase font-bold mb-4 sm:mb-6 font-dm-sans pb-2 border-b-4 border-b-orange-2/30">
            Contact Us
          </h2>
          <p className="mb-4 sm:mb-6 text-center text-sm sm:text-base">
            Feel free to reach out using our contact form, and we'll respond promptly.
          </p>
          <form className="w-full max-w-xl">
            <div className='mb-6'>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base mb-1"
                >
                  Full Name
                </label>
                </div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                placeholder="Full name"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Email Address
                  </label>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Phone Number
                  </label>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Freight Type
                  </label>
                </div>
                <select
                  id="freightType"
                  name="freightType"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  required
                >
                  <option value="">Select Freight Type</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="road">Road Freight</option>
                  <option value="rail">Rail Freight</option>
                </select>
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Preferred Time
                  </label>
                </div>
                <input
                  type="date-time-local"
                  id="phone"
                  name="phone"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="Phone number"
                  required
                />
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Origin Location
                  </label>
                </div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="Location"
                  required
                />
              </div>
              <div>
                <div className="">
                  <label
                    htmlFor="name"
                    className="block text-sm sm:text-base mb-1"
                  >
                    Destination Location
                  </label>
                </div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full px-4 sm:px-6 py-2.5 border border-gray-300 rounded-md outline-none transition"
                  placeholder="Location"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base mb-1"
              >
                Message / Speacial Instructions
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 sm:px-6 py-2.5 mb-8 sm:mb-12 border border-gray-300 rounded-md outline-none transition resize-none"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="font-roboto font-semibold cursor-pointer text-[16px] px-6 py-3 w-full bg-linear-to-l from-orange-2 to-orange-1 text-white rounded-lg hover:bg-yellow-3/90 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs