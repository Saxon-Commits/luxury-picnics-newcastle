import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, MapPin, Check, ChevronRight, ChevronLeft, CreditCard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '4',
    style: 'Boho Coastal',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you! Ella or another member of our team will be in touch shortly to confirm your picnic.');
  };

  const steps = [
    { number: 1, label: 'Date & Time' },
    { number: 2, label: 'Style Choice' },
    { number: 3, label: 'Personal Details' }
  ];

  return (
    <div className="pt-32 pb-40 px-6 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl italic font-light mb-6 tracking-tighter">Reserve Your Moment</h1>
          <p className="text-brand-charcoal/60 font-light max-w-xl mx-auto">
            Friday – Sunday, by appointment only. Let's create something beautiful together.
          </p>
        </div>

        {/* Step Progress */}
        <div className="flex justify-between items-center mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-charcoal/10 -z-10" />
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center bg-[#FDFBF7] px-4">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border ${
                  step >= s.number ? 'bg-brand-charcoal text-brand-cream border-brand-charcoal' : 'bg-white text-brand-charcoal/30 border-brand-charcoal/10 shadow-sm'
                }`}
              >
                {step > s.number ? <Check size={14} /> : s.number}
              </div>
              <span className={`text-[10px] uppercase tracking-widest mt-3 whitespace-nowrap ${step >= s.number ? 'text-brand-charcoal font-bold' : 'text-brand-charcoal/30 font-medium'}`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-16 border border-brand-charcoal/5 editorial-shadow rounded-sm transition-all duration-700">
          <form onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Select Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30" size={16} />
                        <input 
                          type="date" 
                          required
                          className="w-full bg-brand-charcoal/5 border-none p-4 pl-12 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                      </div>
                      <p className="text-[10px] italic text-brand-charcoal/40">Fri, Sat, Sun availability only.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30" size={16} />
                        <select 
                          required
                          className="w-full bg-brand-charcoal/5 border-none p-4 pl-12 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold appearance-none"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        >
                          <option value="">Choose a time...</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">01:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Guest Count</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30" size={16} />
                        <select 
                          required
                          className="w-full bg-brand-charcoal/5 border-none p-4 pl-12 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold appearance-none"
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        >
                          <option value="1-4">Up to 4 people</option>
                          <option value="5-8">5-8 people</option>
                          <option value="9-12">9-12 people</option>
                          <option value="13-16">13-16 people</option>
                          <option value="17+">17+ people (Special Enquiry)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Location Preference</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/30" size={16} />
                        <input 
                          type="text" 
                          placeholder="e.g. King Edward Park, Nobbys Beach..."
                          className="w-full bg-brand-charcoal/5 border-none p-4 pl-12 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block mb-6">Select a Style Guide</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Boho Coastal', 'Golden Hour', 'The Classic', 'Surprise Me'].map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setFormData({...formData, style: style})}
                        className={`p-6 border text-left flex justify-between items-center transition-all duration-300 rounded-sm ${
                          formData.style === style ? 'border-brand-charcoal bg-brand-charcoal/5 ring-1 ring-brand-charcoal' : 'border-brand-charcoal/10 hover:border-brand-muted-gold'
                        }`}
                      >
                        <span className="font-serif italic text-lg">{style}</span>
                        {formData.style === style && <Check size={16} className="text-brand-muted-gold" />}
                      </button>
                    ))}
                  </div>
                  <div className="p-6 bg-brand-muted-gold/5 border border-brand-muted-gold/20 rounded-sm">
                    <p className="text-xs font-light text-brand-charcoal/70 italic leading-relaxed">
                      * All styles include our standard luxury inclusions: low-lying tables, rugs, cushions, gold cutlery, and floral styling.
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">First Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-brand-charcoal/5 border-none p-4 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Last Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-brand-charcoal/5 border-none p-4 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-brand-charcoal/5 border-none p-4 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-brand-charcoal/5 border-none p-4 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/50 block">Any Special Requests / Mention of Extras</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-brand-charcoal/5 border-none p-4 rounded-sm text-sm focus:ring-1 focus:ring-brand-muted-gold transition-all resize-none"
                      value={formData.comments}
                      onChange={(e) => setFormData({...formData, comments: e.target.value})}
                      placeholder="Tell us about your celebration, any dietary requirements for your own catering, or if you'd like to add fluffy chairs, personalized signs etc."
                    />
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-brand-charcoal/5">
                    <input type="checkbox" required className="rounded border-brand-charcoal/20 text-brand-charcoal focus:ring-brand-muted-gold" />
                    <label className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
                      I agree to the <Link to="/terms" className="underline hover:text-brand-muted-gold">Terms & Conditions</Link>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-16 flex justify-between items-center pt-8 border-t border-brand-charcoal/5">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={prevStep}
                  className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40 hover:text-brand-charcoal transition-all"
                >
                  <ChevronLeft size={14} />
                  <span>Previous</span>
                </button>
              ) : <div />}

              {step < 3 ? (
                <button 
                  type="button"
                  onClick={nextStep}
                  className="flex items-center space-x-2 bg-brand-charcoal text-brand-cream px-8 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brand-muted-gold transition-all group"
                >
                  <span>Continue</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button 
                  type="submit"
                  className="flex items-center space-x-2 bg-brand-charcoal text-brand-cream px-10 py-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-brand-muted-gold transition-all"
                >
                  <CreditCard size={14} className="mr-2" />
                  <span>Submit Inquiry</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
