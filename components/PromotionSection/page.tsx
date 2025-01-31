import Image from 'next/image';
import earlyBirdDis from "@/app/assets/image8.jpg";
import memberClubs from "@/app/assets/image9.jpg";
import threeFreeOne from "@/app/assets/image10.jpg";

export default function PromotionSection() {
  return (
    <section className=" bg-[#f8f3ef] text-[#5b3921] text-center py-12 px-4 lg:px-24">
      <h2 className="text-4xl font-bold mb-8">Promos and Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          { img: earlyBirdDis, title: 'Early Bird Discount', description: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.' },
          { img: memberClubs, title: 'Wellhall Members Club', description: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.' },
          { img: threeFreeOne, title: 'Book 3 Nights, Get 1 Night Free', description: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.' },
        ].map((promo, index) => (
          <article key={index} className="overflow-hidden shadow-lg rounded-lg bg-white">
            <Image src={promo.img} alt={promo.title} width={400} height={300} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 border border-[#5b3921] rounded-b-lg">
              <h3 className="font-title text-2xl font-bold mb-4">{promo.title}</h3>
              <p className="text-sm leading-relaxed">{promo.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
