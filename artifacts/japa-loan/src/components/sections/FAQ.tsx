import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is eligible for the Japa Loan?",
    answer: "The Japa Loan is available to employed salary earners and registered business owners in Nigeria. You must have a verifiable source of income, a valid government-issued ID, and be able to provide 6 months of bank statements showing consistent cash flow."
  },
  {
    question: "What is the interest rate?",
    answer: "We offer a highly competitive flat interest rate of 4% per month. There are no hidden charges or sudden increments during your repayment tenure."
  },
  {
    question: "How long does it take to get approved?",
    answer: "Once you submit a complete application with all required documents, our team processes it quickly. Most applications are approved and funded within 24 to 48 hours."
  },
  {
    question: "What is the maximum amount I can borrow?",
    answer: "You can access between ₦100,000 and ₦5,000,000 depending on your creditworthiness, income level, and the specific needs of your relocation process."
  },
  {
    question: "Can I use the loan for Proof of Funds (POF)?",
    answer: "Yes! Many of our clients use the Japa Loan specifically to meet the Proof of Funds requirement for their visa applications. We can also pay school fees and flight tickets directly to the institutions or airlines if preferred."
  },
  {
    question: "What is the maximum repayment tenure?",
    answer: "You can spread your repayments comfortably over 1 to 24 months, allowing you to choose a schedule that works best for your financial situation."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about the Japa Loan process.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-md transition-all">
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
