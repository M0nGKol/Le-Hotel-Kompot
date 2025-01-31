import Image from 'next/image';
import mainView from "@/app/assets/image5.jpg";
import Kitchen from "@/app/assets/image6.jpg";
import Bathroom from "@/app/assets/image7.jpg";

export default function FeaturedRoomSection() {
  return (
    <section className="bg-[#fefaf7] text-[#5b3921] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Section with Title & Image */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 text-left md:text-left pt-4 pb-12">
            <h2 className="text-4xl font-bold mb-6">The Family Suite</h2>
            <p className="text-lg leading-relaxed">
              Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.
            </p>
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <Image src={mainView} alt="Family Suite Main View" width={600} height={400} className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Kitchen Image */}
          <div>
            <Image src={Kitchen} alt="Family Suite Kitchen" width={400} height={500} className="w-full h-auto rounded-lg shadow-md " />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </div>

          {/* Bathroom Image */}
          <div>
            <Image src={Bathroom} alt="Family Suite Bathroom" width={400} height={500} className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
