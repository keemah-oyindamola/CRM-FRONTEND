import { motion } from "framer-motion";
import Container from "../common/Container";
import Section from "../common/Section";
import {
  BriefcaseBusiness,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  ShoppingBag,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    name: "Consulting",
  },
  {
    icon: ShoppingBag,
    name: "Retail",
  },
  {
    icon: Building2,
    name: "Enterprise",
  },
  {
    icon: MonitorSmartphone,
    name: "Technology",
  },
  {
    icon: Landmark,
    name: "Finance",
  },
];

function CompanyLogos() {
  return (
    <Section className="bg-white py-16">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-500"
        >
          Built for teams across every industry
        </motion.p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ icon: Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
            >
              <Icon
                size={34}
                className="text-emerald-600 transition-transform duration-300 group-hover:scale-110"
              />

              <span className="mt-4 font-semibold text-slate-700">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CompanyLogos;