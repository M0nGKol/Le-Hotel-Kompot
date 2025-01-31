import Image from 'next/image';
import DeluxeRoom from "@/app/assets/image3.jpg";
import DeluxeSeaView from "@/app/assets/image4.jpg";
import FamilyRoom from "@/app/assets/image5.jpg";

export default function AccommodationsSection() {
  return (
    <section className="bg-[#f8f3ef] text-[#5b3921] text-center py-12 px-4 lg:px-24 ">
      <h2 className="text-4xl font-bold mb-8">Accommodations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { img: DeluxeRoom, title: 'De Luxe Room', price: '$189', guests: '2 adults | 1 child below 7' },
          { img: DeluxeSeaView, title: 'De Luxe Sea View', price: '$209', guests: '2 adults | 1 child below 7' },
          { img: FamilyRoom, title: 'The Wellhall Family Suite', price: '$399', guests: '4 adults | 2 children below 7' },
        ].map((room, index) => (
          <article key={index} className="overflow-hidden shadow-lg rounded-lg">
            <Image src={room.img} alt={room.title} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-4 border border-[#5b3921]">
              <p className="text-sm">{room.guests}</p>
              <h3 className="font-title text-2xl font-bold mt-4">{room.title}</h3>
              <p className="text-sm mt-2">from {room.price} a night</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
