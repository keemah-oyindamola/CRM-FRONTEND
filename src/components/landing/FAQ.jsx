import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";

const faqs = [
  {
    question: "Can I try FlowCRM before subscribing?",
    answer:
      "Yes. Every new workspace comes with a 14-day free trial, giving you full access to all Professional features without requiring a credit card.",
  },
  {
    question: "Can I add more team members later?",
    answer:
      "Absolutely. As your business grows, you can upgrade your plan and invite unlimited team members to collaborate.",
  },
  {
    question: "Is my business data secure?",
    answer:
      "Yes. FlowCRM is built with secure authentication, role-based permissions, encrypted communication, and industry-standard security practices to protect your data.",
  },
  {
    question: "Does FlowCRM support multiple companies?",
    answer:
      "Yes. FlowCRM is a multi-tenant CRM, meaning each company has its own secure workspace with completely isolated data.",
  },
  {
    question: "Will Stripe billing be supported?",
    answer:
      "Yes. Businesses can manage subscriptions securely through Stripe with recurring billing, invoices, and subscription management.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-slate-50">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Here are answers to the most common questions about FlowCRM,
            subscriptions, security, and getting started.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="mx-auto max-w-4xl space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown className="text-slate-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="px-7 pb-7">
                        <p className="leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default FAQ;