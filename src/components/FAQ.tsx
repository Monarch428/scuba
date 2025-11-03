import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: 'How do I start learning scuba diving in Raleigh?',
      answer: 'To start learning scuba diving in Raleigh, you need to enroll in a certified scuba diving class, complete pool training, and pass open-water dives with an instructor.'
    },
    {
      question: 'What are the best scuba diving locations for beginners?',
      answer: 'Some of the best beginner-friendly scuba diving locations include Florida Keys, Cozumel, and the Caribbean, where water conditions are ideal for new divers.'
    },
    {
      question: 'Do I need my own scuba gear for classes?',
      answer: 'No, you can rent scuba gear from our diving center, including wetsuits, masks, and fins, for your training and dive trips.'
    },
    {
      question: 'How long does it take to get PADI certified?',
      answer: 'The PADI Open Water certification typically takes 3-4 days to complete, including classroom sessions, pool training, and open-water dives.'
    },
    {
      question: 'What is the minimum age for scuba diving?',
      answer: 'Children as young as 10 years old can participate in the PADI Junior Open Water Diver course, while adults can start at any age with proper health clearance.'
    }
  ];

  return (
    <section id="faq" className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '60px' }}
        >
          {/* Section Heading: Reduced from 42px to 32px */}
          <h2 className="text-slate-900" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2, marginBottom: '16px' }}>
            Beginner's Guide to Scuba Diving
          </h2>
          {/* Subtitle: Reduced from 28px to 20px */}
          <p className="text-slate-600 max-w-3xl mx-auto" style={{ fontSize: '20px', lineHeight: 1.4 }}>
            Common questions about scuba diving training and certification
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-slate-100 rounded-2xl hover:border-cyan-200 hover:shadow-lg transition-all bg-white"
                style={{ padding: '20px 28px' }}
              >
                {/* Card Title: Reduced from 22px to 19px */}
                <AccordionTrigger className="text-slate-900 hover:text-cyan-700 text-left" style={{ fontSize: '19px', fontWeight: 600 }}>
                  {faq.question}
                </AccordionTrigger>
                {/* Body in cards: Reduced from 18px to 16px */}
                <AccordionContent className="text-slate-600" style={{ fontSize: '16px', lineHeight: 1.6, paddingTop: '10px' }}>
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
