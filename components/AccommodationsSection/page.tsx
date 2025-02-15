"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import DeluxeRoom from "@/app/assets/image3.jpg";
import DeluxeSeaView from "@/app/assets/image4.jpg";
import FamilyRoom from "@/app/assets/image5.jpg";

export default function AccommodationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className="bg-[#f8f3ef] text-[#5b3921] text-center py-12 px-4 lg:px-24 "
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-8">Accommodations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { img: DeluxeRoom, title: 'De Luxe Room', price: '$189', guests: '2 adults | 1 child below 7' },
          { img: DeluxeSeaView, title: 'De Luxe Sea View', price: '$209', guests: '2 adults | 1 child below 7' },
          { img: FamilyRoom, title: 'The Wellhall Family Suite', price: '$399', guests: '4 adults | 2 children below 7' },
        ].map((room, index) => (
          <motion.article 
            key={index} 
            className="overflow-hidden shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Image src={room.img} alt={room.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4 border border-[#5b3921]">
              <p className="text-sm">{room.guests}</p>
              <h3 className="font-title text-2xl font-bold mt-4">{room.title}</h3>
              <p className="text-sm mt-2">from {room.price} a night</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}