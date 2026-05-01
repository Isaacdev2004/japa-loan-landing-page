import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalcIcon } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function Calculator() {
  const [amount, setAmount] = useState(1000000);
  const [tenure, setTenure] = useState(12);
  const [calculations, setCalculations] = useState({
    monthlyRepayment: 0,
    totalRepayment: 0,
    totalInterest: 0,
  });

  const INTEREST_RATE = 0.04; // 4% monthly flat rate

  useEffect(() => {
    const principal = amount;
    const monthlyInterest = principal * INTEREST_RATE;
    const totalInterest = monthlyInterest * tenure;
    const totalRepayment = principal + totalInterest;
    const monthlyRepayment = totalRepayment / tenure;

    setCalculations({
      monthlyRepayment,
      totalRepayment,
      totalInterest,
    });
  }, [amount, tenure]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
              <CalcIcon className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Plan Your Repayment</h2>
            <p className="text-lg text-muted-foreground">
              Use our calculator to estimate your monthly repayments. No hidden fees.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-xl shadow-primary/5 overflow-hidden">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-3 p-6 md:p-10 flex flex-col gap-10">
                
                {/* Amount Slider */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-lg font-bold text-foreground">Loan Amount</label>
                    <span className="text-2xl font-bold text-primary">{formatCurrency(amount)}</span>
                  </div>
                  <Slider 
                    value={[amount]} 
                    min={100000} 
                    max={5000000} 
                    step={100000}
                    onValueChange={(vals) => setAmount(vals[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                    <span>{formatCurrency(100000)}</span>
                    <span>{formatCurrency(5000000)}</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-lg font-bold text-foreground">Tenure (Months)</label>
                    <span className="text-2xl font-bold text-primary">{tenure} Months</span>
                  </div>
                  <Slider 
                    value={[tenure]} 
                    min={1} 
                    max={24} 
                    step={1}
                    onValueChange={(vals) => setTenure(vals[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                    <span>1 Month</span>
                    <span>24 Months</span>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="md:col-span-2 bg-primary text-primary-foreground p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-8 text-center text-primary-foreground/90">Repayment Summary</h3>
                
                <div className="space-y-6">
                  <div className="bg-primary-foreground/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                    <p className="text-sm text-primary-foreground/80 mb-1 font-medium">Monthly Repayment</p>
                    <motion.p 
                      key={calculations.monthlyRepayment}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-3xl font-bold text-accent"
                    >
                      {formatCurrency(calculations.monthlyRepayment)}
                    </motion.p>
                  </div>

                  <div className="flex justify-between items-center py-3 border-b border-primary-foreground/10">
                    <span className="text-primary-foreground/80 font-medium">Total Interest</span>
                    <span className="font-bold">{formatCurrency(calculations.totalInterest)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-primary-foreground/10">
                    <span className="text-primary-foreground/80 font-medium">Total Repayment</span>
                    <span className="font-bold">{formatCurrency(calculations.totalRepayment)}</span>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <p className="text-xs text-primary-foreground/60 mb-6">
                      *Estimates are based on a 4% monthly flat interest rate.
                    </p>
                    <button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-4 font-bold transition-transform hover:-translate-y-1 shadow-lg shadow-accent/20">
                      Apply With These Terms
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
