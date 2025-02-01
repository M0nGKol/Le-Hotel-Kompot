"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import mainView from "@/app/assets/image5.jpg";
import Kitchen from "@/app/assets/image6.jpg";
import Bathroom from "@/app/assets/image7.jpg";

export default function FeaturedRoomSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#fefaf7] text-[#5b3921] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Section with Title & Image */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 text-left md:text-left pt-4 pb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">The Family Suite</h2>
            <p className="text-lg leading-relaxed">
              Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image src={mainView} alt="Family Suite Main View" width={600} height={400} className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Kitchen Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image src={Kitchen} alt="Family Suite Kitchen" width={400} height={500} className="w-full h-auto rounded-lg shadow-md " />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </motion.div>

          {/* Bathroom Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image src={Bathroom} alt="Family Suite Bathroom" width={400} height={500} className="w-full h-auto rounded-lg shadow-md" />
            <p className="text-sm text-center mt-2 border border-[#7a6453] p-2">
              An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
