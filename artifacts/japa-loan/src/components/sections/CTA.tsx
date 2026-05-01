import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary-foreground/5 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Take Your Future <span className="text-accent">International?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Don't let financial constraints delay your relocation plans. Apply for the Japa Loan today and get funded within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-8 text-base shadow-xl shadow-accent/20 transition-transform hover:-translate-y-1">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/20 rounded-full h-14 px-8 text-base transition-transform hover:-translate-y-1">
              <MessageCircle className="mr-2 w-5 h-5" /> Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
