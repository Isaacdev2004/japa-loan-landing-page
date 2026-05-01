import { motion } from 'framer-motion';
import { ClipboardEdit, UserCheck, Wallet, RefreshCw } from 'lucide-react';

const steps = [
  {
    title: 'Apply Online',
    description: 'Fill out our simple application form with your basic details and the amount you need.',
    icon: ClipboardEdit,
  },
  {
    title: 'Get Approved',
    description: 'We review your application and documents quickly. Most applications are approved within 24 hours.',
    icon: UserCheck,
  },
  {
    title: 'Receive Funds',
    description: 'Once approved, the funds are disbursed directly to your account or to the relevant institution.',
    icon: Wallet,
  },
  {
    title: 'Repay Flexibly',
    description: 'Make your monthly repayments comfortably over your chosen tenure (1 to 24 months).',
    icon: RefreshCw,
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              A simple, transparent process designed to get you the funds you need without delays.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-border md:hidden"></div>
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-[27px] left-10 right-10 h-0.5 bg-border z-0"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-row md:flex-col items-start gap-4 md:gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-accent/20 border-4 border-white">
                  {index + 1}
                </div>
                <div className="pt-2 md:pt-0">
                  <div className="mb-3 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hidden md:flex">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
