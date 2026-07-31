import { motion } from "framer-motion";

import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";

function CTA() {
  return (
    <Section className="relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-[2rem] border border-white/20 bg-white/10 px-8 py-16 text-center backdrop-blur-md md:px-16"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            Ready to get started?
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Grow Your Business
            <br />
            With FlowCRM
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-50">
            Organize customers, manage your sales pipeline, collaborate with
            your team, and scale your business from one powerful platform.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="bg-white text-emerald-700 hover:bg-slate-100">
              Start Free Trial
            </Button>

            <Button
              variant="secondary"
              className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default CTA;