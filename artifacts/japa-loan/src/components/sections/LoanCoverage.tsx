import { motion } from 'framer-motion';
import { Plane, FileText, GraduationCap, Home, Stethoscope, Briefcase, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const coverageItems = [
  {
    title: 'Proof of Funds (POF)',
    description: 'Show embassies the required account balance to secure your visa approval without stress.',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Flight Tickets',
    description: 'Book your flights early at the best rates while we cover the upfront costs.',
    icon: Plane,
    color: 'bg-accent/10 text-accent',
  },
  {
    title: 'School Fees & Tuition',
    description: 'Pay your initial deposits or full tuition to secure your admission letter (CAS/I-20).',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Accommodation Deposit',
    description: 'Secure your housing abroad before you travel so you have a place to land.',
    icon: Home,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'SEVIS & Application Fees',
    description: 'Cover all necessary administrative fees required during the visa process.',
    icon: Briefcase,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Medical Exams (IOM/TB)',
    description: 'Pay for your mandatory medical checks and clearance tests required for travel.',
    icon: Stethoscope,
    color: 'bg-red-100 text-red-600',
  }
];

export function LoanCoverage() {
  return (
    <section id="coverage" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need to Japa</h2>
            <p className="text-lg text-muted-foreground">
              Relocating is expensive, but it shouldn't stop your dreams. The Japa Loan covers every step of your journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coverageItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-background rounded-3xl p-8 md:p-10 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Eligibility Checklist</h3>
            <p className="text-muted-foreground">See if you qualify for the Japa Loan in seconds.</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 w-full md:w-auto flex-shrink-0">
            {['Employed Salary Earner', 'Registered Business Owner', 'Valid Government ID', '6 Months Bank Statement'].map((req, i) => (
              <li key={i} className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                {req}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
