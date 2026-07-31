import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";
import Button from "../common/Button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "Perfect for freelancers and small businesses getting started.",
    featured: false,
    features: [
      "Up to 3 team members",
      "500 customers",
      "Basic CRM tools",
      "Customer management",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$49",
    period: "/month",
    description: "Built for growing businesses that need powerful CRM features.",
    featured: true,
    features: [
      "Unlimited customers",
      "Unlimited team members",
      "Sales pipeline",
      "Analytics dashboard",
      "Role-based access",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Advanced solutions for organizations with custom requirements.",
    featured: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Advanced security",
      "API access",
      "Custom integrations",
      "24/7 premium support",
    ],
  },
];

function Pricing() {
  return (
    <Section
      id="pricing"
      className="bg-slate-50"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Simple Pricing for Every Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Start with a free trial and upgrade as your business grows. No
            hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className={`relative rounded-3xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-emerald-600 bg-white shadow-2xl"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white">
                  <Star size={16} fill="white" />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-8 flex items-end">
                <span className="text-5xl font-black text-slate-900">
                  {plan.price}
                </span>

                <span className="ml-2 mb-1 text-slate-500">
                  {plan.period}
                </span>
              </div>

              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={plan.featured ? "primary" : "secondary"}
                >
                  Start Free Trial
                </Button>
              </div>

              <div className="mt-10 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <Check
                        size={14}
                        className="text-emerald-600"
                      />
                    </div>

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Pricing;