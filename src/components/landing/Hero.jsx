import { motion } from "framer-motion";
import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Section className="relative overflow-hidden bg-slate-50 pt-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50" />

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              🚀 Modern CRM for Growing Businesses
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">
              Close More Deals.
              <br />
              Build Better Relationships.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              FlowCRM helps modern businesses manage customers, organize sales
              pipelines, collaborate with teams, and grow revenue from one
              intuitive platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="px-8 py-4">
                  Start Free Trial
                </Button>
              </Link>

              <Button
                variant="secondary"
                className="px-8 py-4"
              >
                Book a Demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>✔ 14-Day Free Trial</span>
              <span>✔ No Credit Card Required</span>
              <span>✔ Cancel Anytime</span>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="flex h-[480px] w-full max-w-xl items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800">
                  Dashboard Preview
                </h3>

                <p className="mt-2 text-slate-500">
                  Coming next...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;