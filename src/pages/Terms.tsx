import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="pt-32 pb-40 px-6 min-h-screen bg-brand-cream">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-brand-charcoal/40 hover:text-brand-charcoal transition-colors mb-12">
          <ArrowLeft size={12} />
          <span>Back to Home</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 md:p-20 border border-brand-charcoal/5 rounded-sm editorial-shadow"
        >
          <h1 className="text-4xl md:text-5xl italic font-light mb-4">Terms & Conditions</h1>
          <p className="text-brand-muted-gold uppercase tracking-[0.2em] text-[10px] font-bold mb-12">Please read carefully prior to booking</p>

          <div className="prose prose-brand max-w-none space-y-12 text-brand-charcoal/70 font-light leading-relaxed">
            <p className="italic text-brand-charcoal">By booking with The Picnic Project, you agree to the following Terms & Conditions. Please read carefully prior to filling out the booking form.</p>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">1. Booking & Payment</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>A deposit is required to secure your booking.</li>
                <li>Your booking is only confirmed and locked in once the deposit has been received.</li>
                <li>Final payment is due 2 days prior to the event date.</li>
                <li>If final payment is not received by this time, The Picnic Project reserves the right to cancel the booking.</li>
                <li>Optional extras must be selected and confirmed prior to the event date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">2. Cancellations & Refunds</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cancellations made more than 7 days prior to the event will receive a refund of payments made, with 25% of the deposit retained to cover administrative and booking costs.</li>
                <li>Cancellations made within 2 days of the booked date are non-refundable, unless the picnic is rescheduled within a two-month period, subject to availability.</li>
                <li>Rescheduled bookings must take place within two months of the original event date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">3. Outdoor Events & Wet Weather</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Outdoor events are subject to weather conditions.</li>
                <li>The client is responsible for arranging an alternative indoor location if required or if showers are forecast.</li>
                <li>Upon booking, you will receive a document highlighting suggested wet weather venue options around Newcastle; however, it is the client’s responsibility to enquire, secure, and book these venues.</li>
                <li>The Picnic Project does not provide wet weather venues.</li>
                <li>If rain is forecast and no suitable backup location has been organised, a refund will be provided excluding the deposit, which will be retained.</li>
                <li>Our picnic setups are not weatherproof.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">4. Access & Event Timing</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client must ensure clear and safe access to the venue for setup and pack down.</li>
                <li>The standard picnic hire duration is 2 hours, unless otherwise agreed in writing.</li>
                <li>The standard hire period includes agreed access for setup and pack down.</li>
                <li>If a longer or shorter duration is requested, this must be arranged in advance.</li>
                <li>If access is delayed or restricted, The Picnic Project is not responsible for reduced picnic time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">5. Food & Catering</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Picnic Project does not provide food or catering services.</li>
                <li>Clients are welcome to BYO food, beverages and serving platters etc.</li>
                <li>Upon booking, clients will receive a guide including recommended catering providers and wet weather venue suggestions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">6. Client Responsibilities & Damage</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>The client is responsible for the conduct of all guests during the event.</li>
                <li>Ensuring all hired equipment and styling items are treated with care.</li>
                <li>Any damage, breakage, staining, theft, or loss of equipment or styling items will be charged to the client at the full replacement value.</li>
                <li>All styling items remain the property of The Picnic Project unless otherwise stated (e.g., personalised signage).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">7. Liability & Safety</h2>
              <div className="space-y-4">
                <p>The Picnic Project takes reasonable care to provide a safe and professional setup. However, we are not liable for:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Injuries or accidents occurring during the event</li>
                  <li>Loss, theft, or damage to personal belongings</li>
                  <li>Weather-related disruptions</li>
                </ul>
                <p>Children must be supervised at all times.</p>
                <p>Candles may be used during the picnic; however, they will not be used if wind speeds exceed 15 km/h or if conditions are deemed unsafe at the time of setup.</p>
                <p>For safety reasons, umbrellas will not be installed or may be removed if winds exceed 20 km/h, or if conditions are deemed unsafe at the time of setup.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-serif italic text-brand-charcoal mb-4">8. Force Majeure</h2>
              <p>The Picnic Project is not liable for cancellations, delays, or changes resulting from circumstances beyond our reasonable control. This includes, but is not limited to, extreme weather conditions, natural disasters, government restrictions, public health orders, venue closures, emergencies, or other unforeseen events.</p>
              <p className="mt-4">In such circumstances, we will make reasonable efforts to reschedule your booking where possible; however, refunds will remain subject to the cancellation policy outlined above.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
