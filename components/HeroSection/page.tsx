import Image from "next/image";
import RelaxPicture from "@/app/assets/image2.jpg";
export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row justify-between items-center py-12 px-4 sm:px-6 lg:px-24">
        <div className="w-full md:w-1/2">
          <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            Welcome to your luxurious home away from home
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition.
          </p>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Image
            src={RelaxPicture}
            alt="Relaxation by the pool with a drink"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  }