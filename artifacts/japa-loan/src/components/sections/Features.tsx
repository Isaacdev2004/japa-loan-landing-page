import { motion } from 'framer-motion';
import { Clock, Banknote, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Fast Approval',
    description: 'Get approved in as little as 24 hours. We know time is critical when applying for visas or admissions.',
    icon: Clock,
  },
  {
    title: 'Flexible Repayment',
    description: 'Spread your payments over 1 to 24 months comfortably. Repay at your own pace.',
    icon: Banknote,
  },
  {
    title: 'No Hidden Fees',
    description: 'Clear, transparent terms with a competitive 4% monthly interest rate. What you see is what you pay.',
    icon: ShieldCheck,
  },
  {
    title: 'Trusted by Thousands',
    description: 'Join over 9,000 satisfied customers who have used Pareto Finance to achieve their goals.',
    icon: Users,
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Pareto Finance?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              We understand the urgency and the stakes involved in your relocation journey. Since 2019, we've been the trusted financial partner for ambitious Nigerians. We're licensed by the Central Bank of Nigeria (CBN) and committed to your success.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">9,000+</p>
                <p className="text-sm text-primary-foreground/80 font-medium">Satisfied Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">2019</p>
                <p className="text-sm text-primary-foreground/80 font-medium">Established</p>
              </div>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={index % 2 !== 0 ? "sm:mt-8" : ""}
              >
                <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary-foreground/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
