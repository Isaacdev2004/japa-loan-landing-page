import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, User, Phone, Mail, DollarSign, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const schema = z.object({
  fullName: z.string().min(3, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  loanAmount: z.string().min(1, 'Please select a loan amount'),
  loanPurpose: z.string().min(1, 'Please select the purpose of your loan'),
  tenure: z.string().min(1, 'Please select a repayment tenure'),
  employer: z.string().min(2, 'Please enter your employer or business name'),
});

type FormData = z.infer<typeof schema>;

const purposes = [
  'Visa Application & Fees',
  'Flight Tickets',
  'School / Tuition Fees Abroad',
  'Accommodation Deposit',
  'SEVIS / Biometrics Fee',
  'Medical & Vaccination',
  'Proof of Funds',
  'Relocation & Moving Costs',
  'Other Japa-Related Expenses',
];

const amounts = [
  '₦100,000 – ₦300,000',
  '₦300,001 – ₦700,000',
  '₦700,001 – ₦1,500,000',
  '₦1,500,001 – ₦3,000,000',
  '₦3,000,001 – ₦5,000,000',
];

const tenures = [
  '3 months',
  '6 months',
  '9 months',
  '12 months',
  '18 months',
  '24 months',
];

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1200));
    console.log('Application submitted:', data);
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-sm font-medium text-accent mb-6">
              <FileText className="w-4 h-4" />
              <span>Loan Application</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Start Your Application <span className="text-accent">Today</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fill out this quick form and a Pareto Finance advisor will contact you within 24 hours to complete your application and discuss your loan options.
            </p>

            <div className="space-y-5">
              {[
                { icon: CheckCircle, text: 'No hidden charges or processing fees upfront' },
                { icon: CheckCircle, text: 'Dedicated loan advisor assigned to your file' },
                { icon: CheckCircle, text: 'Approval decision within 24–48 hours' },
                { icon: CheckCircle, text: 'CBN-regulated — your data is 100% secure' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-accent/5 border border-accent/20">
              <p className="text-sm text-muted-foreground">
                Prefer to talk first?{' '}
                <a
                  href="https://wa.me/2347032513433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  Chat with us on WhatsApp
                </a>{' '}
                or call{' '}
                <a href="tel:+2347032513433" className="text-accent font-semibold hover:underline">
                  +234 703 251 3433
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl border border-border shadow-xl p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Application Received!</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Thank you for applying. A Pareto Finance advisor will reach out to you within 24 hours to guide you through the next steps.
                </p>
                <a
                  href="https://wa.me/2347032513433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                >
                  Follow up on WhatsApp
                </a>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl border border-border shadow-xl p-8 md:p-10 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-accent" /> Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Adaeze Okafor"
                      {...register('fullName')}
                      className="h-12 rounded-xl border-border focus-visible:ring-accent"
                    />
                    {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-accent" /> Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+234 801 234 5678"
                      {...register('phone')}
                      className="h-12 rounded-xl border-border focus-visible:ring-accent"
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-accent" /> Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="adaeze@example.com"
                    {...register('email')}
                    className="h-12 rounded-xl border-border focus-visible:ring-accent"
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employer" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent" /> Employer / Business Name
                  </Label>
                  <Input
                    id="employer"
                    placeholder="Your company or business"
                    {...register('employer')}
                    className="h-12 rounded-xl border-border focus-visible:ring-accent"
                  />
                  {errors.employer && <p className="text-xs text-red-500">{errors.employer.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-accent" /> Loan Amount
                    </Label>
                    <select
                      id="loanAmount"
                      {...register('loanAmount')}
                      className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Select amount range</option>
                      {amounts.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    {errors.loanAmount && <p className="text-xs text-red-500">{errors.loanAmount.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tenure" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" /> Repayment Tenure
                    </Label>
                    <select
                      id="tenure"
                      {...register('tenure')}
                      className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Select tenure</option>
                      {tenures.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.tenure && <p className="text-xs text-red-500">{errors.tenure.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loanPurpose" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-accent" /> Purpose of Loan
                  </Label>
                  <select
                    id="loanPurpose"
                    {...register('loanPurpose')}
                    className="w-full h-12 rounded-xl border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                  >
                    <option value="">Select your loan purpose</option>
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.loanPurpose && <p className="text-xs text-red-500">{errors.loanPurpose.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white rounded-xl text-base font-semibold shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting Application...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Application <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to our privacy policy. Your data is protected under the NDPR.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
