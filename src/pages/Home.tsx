import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const styles = [
    {
      title: "Boho Coastal",
      description: "Natural textures, dried palms, and neutral tones mirroring our beautiful coastline.",
      image: "/images/style-1.jpg"
    },
    {
      title: "Golden Hour",
      description: "Warm ochres, muted golds, and candlelit ambiance for those magical sunsets.",
      image: "/images/style-2.jpg"
    },
    {
      title: "The Classic",
      description: "Timeless elegance with crisp linens, fresh whites, and sophisticated accents.",
      image: "/images/style-3.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Luxury Picnic" 
            className="w-full h-full object-cover opacity-30 scale-110"
          />
          <div className="absolute inset-0 bg-brand-cream/20" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] font-medium text-brand-muted-gold mb-6 block">Newcastle, NSW</span>
          <h1 className="text-5xl md:text-8xl leading-[1.1] mb-8 font-serif italic font-light tracking-tight">
            Luxury Picnics <br/> <span className="text-brand-charcoal/40">with Purpose.</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-brand-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bespoke outdoor experiences in Newcastle, curated to create meaningful opportunities for people living with disability.
          </p>
          <Link 
            to="/book" 
            className="inline-flex items-center space-x-4 bg-brand-charcoal text-brand-cream px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-brand-muted-gold transition-all duration-500 group"
          >
            <span>Reserve Your Date</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-24 md:py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                <img 
                  src="/images/mission.jpg" 
                  alt="Our Mission" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-cream p-12 hidden md:block border border-brand-charcoal/5 editorial-shadow">
                <Star className="text-brand-muted-gold mb-4" fill="currentColor" />
                <p className="text-xs uppercase tracking-widest font-bold mb-2">Newcastle Built</p>
                <p className="text-sm font-light italic">Creating inclusion within our community.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-muted-gold mb-4 block">Our Heart</span>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight italic font-light">Gathering people, fostering inclusion.</h2>
              <div className="space-y-6 text-brand-charcoal/70 leading-relaxed font-light text-lg">
                <p>
                  The Picnic Project is more than just a luxury hire service. We are a small business with a big mission: creating real-world opportunities for individuals living with disability in the Newcastle area.
                </p>
                <p>
                  Every setup, every detail, and every booking supports our goal of providing inclusive employment and social connection. We believe that everyone deserves to feel valued, empowered, and celebrated.
                </p>
                <p className="italic text-brand-charcoal">
                  When you book with us, you're not just booking a picnic; you're supporting a business that prioritizes people.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style Guide / Asymmetric Grid */}
      <section id="styles" className="py-24 md:py-40 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl italic font-light mb-6">Choose Your Atmosphere</h2>
            <p className="text-brand-charcoal/60 max-w-xl mx-auto font-light">Bespoke styling options to match your celebration and setting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {styles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="editorial-card aspect-[3/4] mb-8 group-hover:editorial-shadow transition-all">
                  <img 
                    src={style.image} 
                    alt={style.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl italic mb-3">{style.title}</h3>
                <p className="text-sm font-light text-brand-charcoal/60 leading-relaxed">{style.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote / Middle Band */}
      <section className="py-32 bg-brand-charcoal text-brand-cream text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif italic font-extralight leading-tight mb-10">
              "Providing more than just a picnic—providing a space where everyone belongs."
            </h2>
            <div className="w-12 h-px bg-brand-muted-gold mx-auto mb-8" />
            <p className="text-[10px] uppercase tracking-[0.5em] font-medium text-brand-muted-gold">The Picnic Project Newcastle</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl italic font-light mb-12 tracking-tighter">Ready to Celebrate?</h2>
            <Link 
              to="/book" 
              className="inline-block border border-brand-charcoal px-12 py-6 rounded-full text-xs uppercase tracking-widest hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-500 font-bold"
            >
              Start Your Booking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
