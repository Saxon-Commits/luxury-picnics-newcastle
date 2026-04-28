import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl italic mb-6">The Picnic Project Newcastle</h3>
            <p className="text-brand-cream/60 text-sm max-w-xs leading-relaxed">
              Bespoke outdoor experiences in Newcastle, curated to create meaningful inclusion and opportunities for people living with disability.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-muted-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/#about" className="hover:text-brand-muted-gold transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-muted-gold transition-colors">Pricing</Link></li>
              <li><Link to="/book" className="hover:text-brand-muted-gold transition-colors">Book Now</Link></li>
              <li><Link to="/terms" className="hover:text-brand-muted-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brand-muted-gold">Connect</h4>
            <p className="text-sm mb-4">Friday–Sunday, by appointment only.</p>
            <p className="text-sm font-light text-brand-cream/60 leading-relaxed italic">
              "Gathering people together, one picnic at a time."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-brand-cream/40">
            © {new Date().getFullYear()} The Picnic Project Newcastle. All Rights Reserved.
          </p>
          <Link to="/terms" className="text-[10px] uppercase tracking-widest text-brand-cream/40 hover:text-brand-cream transition-colors">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
