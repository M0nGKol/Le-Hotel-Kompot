"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RelaxPicture from "@/app/assets/image2.jpg";

export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row justify-between items-center py-12 px-4 sm:px-6 lg:px-24">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Welcome to your luxurious home away from home
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition.
          </p>
        </motion.div>
        <motion.div 
          className="w-full md:w-1/3 mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={RelaxPicture}
            alt="Relaxation by the pool with a drink"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </section>
    );
}
