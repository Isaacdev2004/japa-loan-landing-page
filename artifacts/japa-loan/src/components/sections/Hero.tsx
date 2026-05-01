import { motion } from 'framer-motion';
import { ArrowRight, Plane, FileText, GraduationCap, Building, Stethoscope, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
              <Plane className="w-4 h-4 mr-2" />
              <span>Fund Your Global Ambitions</span>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                Your Dream to <span className="text-accent relative whitespace-nowrap">
                  Japa
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 10 Q 50 0 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span> <br/>Is Fully Funded.
              </h1>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                From visa fees and flights to proof of funds and tuition. Pareto Finance provides fast, flexible loans for ambitious Nigerians ready to take their future international.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-8 text-base shadow-lg shadow-accent/20 transition-transform hover:-translate-y-1">
                Get Your Japa Loan <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base border-primary/20 hover:bg-primary/5 transition-transform hover:-translate-y-1">
                Calculate Repayment
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <span className="font-bold text-lg">4%</span>
                </div>
                <span className="leading-tight">Monthly<br/>Interest</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="font-bold text-lg">24</span>
                </div>
                <span className="leading-tight">Months<br/>To Repay</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 rounded-3xl"></div>
            <img 
              src="/images/hero.jpg" 
              alt="Nigerian professional at the airport ready to travel" 
              className="w-full h-full object-cover rounded-3xl"
            />
            
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-64 bg-background/95 backdrop-blur rounded-2xl p-4 shadow-xl z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">CBN Regulated</p>
                  <p className="text-xs text-muted-foreground">Licensed MFB</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
