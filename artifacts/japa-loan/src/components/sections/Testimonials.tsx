import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Oluwaseun A.',
    role: 'Masters Student in the UK',
    image: '/images/testimonial-1.jpg',
    content: "I had secured my admission but the POF was giving me sleepless nights. Pareto Finance approved my Japa Loan in less than 48 hours. I'm now in the UK living my dream. Their process is transparent and highly professional.",
  },
  {
    name: 'Ngozi E.',
    role: 'Registered Nurse in Canada',
    image: '/images/testimonial-2.jpg',
    content: "The medical exams, IELTS, and flight tickets were piling up. My savings weren't enough to cover everything at once. The Japa Loan gave me the breathing room I needed. The 4% interest rate was very fair compared to other options.",
  },
  {
    name: 'Chinedu O.',
    role: 'Software Engineer in Germany',
    image: '/images/testimonial-3.jpg',
    content: "What impressed me most was the speed. When you are processing relocation, every day counts. Pareto didn't waste my time with endless paperwork. I applied on Tuesday and got funded on Wednesday. Highly recommended!",
  }
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Hear from ambitious Nigerians who used the Japa Loan to fund their relocation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-colors relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
                <CardContent className="pt-8">
                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-background"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
