import bgImage from "@/app/assets/image11.jpg";
import { FaHotel } from "react-icons/fa";

export default function InThePressSection() {
  return (
    <section
      className="relative bg-cover bg-center py-12 px-4 min-h-[50vh] flex items-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-orange-300 bg-opacity-30"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">In the Press</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-24">
        {[
            { quote: 'Boost your product and services credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.', source: 'Santa Solana Post' },
            { quote: 'Boost your product and services credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.', source: 'Mariana\'s Luxe Travels' },
            { quote: 'Boost your product and services credibility by adding testimonials from your clients. People love recommendations so feedback from others who\'ve tried it is invaluable.', source: 'Fairhill Journal' },
        ].map((testimonial, index) => (
            <div key={index} className="text-left sm:text-left bg-orange bg-opacity-10 p-6 rounded-lg shadow-md">
            
            {/* Centered Icon */}
            <div className="flex justify-start sm:justify-start">
                <FaHotel className="text-3xl text-white" />
            </div>
            
            <p className="text-lg text-white mt-4">{testimonial.quote}</p>
            <h3 className="text-xl font-bold text-white mt-4">- {testimonial.source}</h3>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}
