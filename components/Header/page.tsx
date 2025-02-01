"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "@/app/assets/image1.jpg";
import logo from "@/app/assets/Le Hotel Kep.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="font-title relative h-[60vh] md:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation */}
      <nav className="absolute w-full flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <div className="logo">
          <Image src={logo} alt="Le Hotel Kep Logo" width={70} height={70} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#" className="text-white text-lg hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white text-lg hover:text-gray-300">Rooms</a></li>
          <li><a href="#" className="text-white text-lg hover:text-gray-300">Restaurant</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white z-20" // Ensure it has a higher z-index
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-50 p-6 flex flex-col space-y-4 md:hidden z-10"
          >
            <a href="#" className="text-white text-lg">Home</a>
            <a href="#" className="text-white text-lg">Rooms</a>
            <a href="#" className="text-white text-lg">Restaurant</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">WELCOME TO</h1>
        <p className="text-3xl sm:text-5xl md:text-6xl font-bold">Le Hotel Kep</p>
        <p className="text-lg sm:text-xl md:text-2xl mt-2">Resort & Spa Hotel</p>
        <a href="#" className="mt-6 inline-block bg-white text-black uppercase font-bold py-2 px-6 rounded hover:bg-gray-200 transition">
          Learn More
        </a>
      </motion.div>
    </header>
  );
}
