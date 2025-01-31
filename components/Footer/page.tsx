import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#5b3921] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-8 text-center sm:text-left">Le Hotel Kep</h2>

        {/* Responsive Flex Container */}
        <div className=" flex flex-col sm:flex-row justify-between gap-8 sm:px-12">
          
          {/* Reservations Office */}
          <div className="border border-white sm:w-1/3 py-6 px-4">
            <h3 className="text-2xl font-light mb-4">Reservations Office</h3>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="text-lg" />
              <span className="ml-2">123 Anywhere St., Any City ST 12345</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-lg" />
              <span className="ml-2">1123-456-7890</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-lg" />
              <span className="ml-2">hello@reallygreatsite.com</span>
            </div>
          </div>

          {/* Office Hours */}
          <div className="border border-white sm:w-1/3 py-6 px-4">
            <h3 className="text-2xl font-light mb-4">Office Hours</h3>
            <p className="mb-2">Monday to Friday<br />9:00 am to 6:00 pm</p>
            <p>Saturday<br />9:00 am to 12:00 noon</p>
          </div>

          {/* Social Media */}
          <div className="border border-white sm:w-1/3 py-6 px-4">
            <h3 className="text-2xl font-light mb-4">Get Social</h3>
            <div className="flex gap-4 justify-center sm:justify-start mb-4">
              <a href="#" className="p-2 bg-white text-[#5b3921] rounded-full">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="p-2 bg-white text-[#5b3921] rounded-full">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="p-2 bg-white text-[#5b3921] rounded-full">
                <FaInstagram className="text-xl" />
              </a>
            </div>
            <button className="border border-white text-white py-2 px-6 rounded-full w-full sm:w-auto">
              Tag us in your photos!
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
