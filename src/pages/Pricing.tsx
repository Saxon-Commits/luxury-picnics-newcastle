import { motion } from 'motion/react';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const inclusions = [
    "Picnic rugs",
    "Cushions based on your chosen colour theme",
    "Low-lying luxury picnic tables with plenty of legroom",
    "Two stylish umbrellas for shade as well as the vibes",
    "Mini music speaker",
    "Placemats, dinner plates, and side plates",
    "Wine glasses or champagne flutes",
    "Water glasses",
    "Stunning gold cutlery (knife, fork, spoon, dessert fork)",
    "Linen napkins & paper napkins",
    "Styled table pieces; candles, beautiful artificial florals etc.",
    "2-hour picnic experience",
    "Delivery, setup, and pack-down included within 20km radius of Newcastle",
    "Introduction & walkthrough of the picnic by Ella or another team member",
    "Safety basket including: fire blanket, fire extinguisher, lighter, bin bags"
  ];

  const pricingTiers = [
    { label: "Up to 4 people", price: "$250" },
    { label: "5-8 people", price: "$320" },
    { label: "9-12 people", price: "$390" },
    { label: "13-16 people", price: "$460" },
    { label: "17-20 people", price: "Enquire directly", sub: "Contact us for custom pricing" }
  ];

  const extras = [
    { name: "Fluffy Chair", price: "$25" },
    { name: "Personalised Sign", price: "$50" },
    { name: "Gold Ice Bucket", price: "$10" },
    { name: "Ice for Ice bucket", price: "$5" },
    { name: "Fresh Seasonal Blooms", price: "Enquire", sub: "Market price applies" }
  ];

  return (
    <div className="pt-32 pb-40 px-6 min-h-screen bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <Link to="/" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-charcoal/40 hover:text-brand-charcoal transition-colors mb-12">
            <ArrowLeft size={12} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-5xl md:text-7xl italic font-light mb-6">Picnic Pricing</h1>
          <p className="text-brand-charcoal/60 text-lg font-light max-w-2xl mx-auto">
            Everything you need for the most perfect Luxury Picnic experience, curated with purpose.
          </p>
        </div>

        {/* Pricing Tiers & Inclusions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Inclusions */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 rounded-sm border border-brand-charcoal/5 editorial-shadow"
          >
            <h2 className="text-3xl italic mb-10 border-b border-brand-charcoal/5 pb-6">Your Inclusions</h2>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start space-x-4 text-sm font-light text-brand-charcoal/80">
                  <Check size={16} className="text-brand-muted-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tiers */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl italic mb-10">Packages</h2>
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-8 bg-brand-charcoal/5 border border-brand-charcoal/10 rounded-sm hover:bg-brand-charcoal hover:text-brand-cream transition-all duration-500 group"
              >
                <div>
                  <h3 className="text-lg uppercase tracking-widest font-bold group-hover:text-brand-gold transition-colors">{tier.label}</h3>
                  {tier.sub && <p className="text-xs font-light opacity-60 mt-1">{tier.sub}</p>}
                </div>
                <span className="text-2xl font-serif italic italic">{tier.price}</span>
              </div>
            ))}

            <div className="mt-12 p-8 border border-dashed border-brand-muted-gold/30 rounded-sm italic font-light text-brand-charcoal/60 text-sm">
              * Delivery, setup, and pack-down included within 20km radius of Newcastle CBD. Additional travel fees may apply beyond this area.
            </div>
          </motion.div>
        </div>

        {/* Enhancements / Extras */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl italic font-light mb-4">Enhance Your Picnic</h2>
            <p className="text-brand-charcoal/60 font-light">Optional add-ons to take your experience to the next level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extras.map((extra, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border border-brand-charcoal/5 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif italic text-xl">{extra.name}</h3>
                  <span className="text-brand-muted-gold font-bold">{extra.price}</span>
                </div>
                {extra.sub && <p className="text-xs font-light text-brand-charcoal/40 mb-6">{extra.sub}</p>}
                <div className="flex items-center text-[10px] uppercase tracking-widest text-brand-charcoal/30">
                  <Plus size={10} className="mr-2" />
                  <span>Available on request</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ - Quick section based on the screenshot text */}
        <section className="bg-brand-charcoal text-brand-cream p-12 md:p-20 rounded-sm overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-muted-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
           <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl font-serif italic mb-10">FAQ – Food & Wet Weather?</h2>
              <div className="space-y-8 font-light text-brand-cream/80 leading-relaxed">
                 <p>
                    We don't provide food or catering, but don't worry as we'll send you a handy guide with some great local catering options if you'd rather not BYO. There will also be a few great wet weather venue ideas.
                 </p>
                 <p>
                    Just a heads up: our picnic setup isn't rainproof, so if it looks like showers are coming you'll need a backup spot but our guide makes it super easy to plan, so your luxury picnic can go off without a problem, rain or shine!
                 </p>
              </div>
              <div className="mt-12 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                 <Link to="/book" className="bg-brand-cream text-brand-charcoal px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-muted-gold transition-colors">Book me in!</Link>
                 <Link to="/terms" className="border border-brand-cream/30 text-brand-cream px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-brand-cream hover:text-brand-charcoal transition-colors">Read Full T&Cs</Link>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
