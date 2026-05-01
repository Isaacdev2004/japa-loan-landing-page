import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-6">
              <img src="https://pareto8020ng.com/assets/img/logo.png" alt="Pareto Finance" className="h-10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Empowering ambitious Nigerians to achieve their dreams of relocating abroad with fast, transparent, and flexible financing.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-foreground bg-green-50 text-green-700 w-max px-3 py-1.5 rounded-full border border-green-200">
              <CheckCircle2 className="w-4 h-4" />
              <span>CBN Licensed Microfinance Institution</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#coverage" className="text-muted-foreground hover:text-accent transition-colors text-sm">Loan Coverage</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-accent transition-colors text-sm">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors text-sm">How It Works</a></li>
              <li><a href="#calculator" className="text-muted-foreground hover:text-accent transition-colors text-sm">Repayment Calculator</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-accent transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+2347032513433" className="text-sm text-muted-foreground hover:text-accent transition-colors block">+234 703 251 3433</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a href="mailto:info@pareto8020ng.com" className="text-sm text-muted-foreground hover:text-accent transition-colors">info@pareto8020ng.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Our Branches</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-sm text-foreground">Head Office</span>
                  <span className="text-sm text-muted-foreground">Ikeja, Lagos</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-sm text-foreground">Ogun State Branches</span>
                  <span className="text-sm text-muted-foreground">Sagamu, Sango, Ota, Ibafo</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center md:flex md:justify-between md:text-left items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Pareto Finance Limited. All rights reserved.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
