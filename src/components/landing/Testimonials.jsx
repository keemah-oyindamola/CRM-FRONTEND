import { motion } from "framer-motion";
import { Star } from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Sales Manager",
    company: "Bright Solutions",
    initials: "SJ",
    review:
      "FlowCRM completely transformed how our sales team manages leads. Everything is organized, and our productivity has improved significantly.",
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "NovaTech",
    initials: "MC",
    review:
      "The dashboard is intuitive, and the sales pipeline gives us a clear view of every opportunity. It's become an essential part of our workflow.",
  },
  {
    name: "Emily Carter",
    role: "Business Owner",
    company: "Carter Consulting",
    initials: "EC",
    review:
      "We moved from spreadsheets to FlowCRM, and the difference is incredible. Customer management is now effortless, and reporting saves us hours every week.",
  },
];

function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Trusted by Growing Businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Teams use FlowCRM to streamline customer relationships, improve
            collaboration, and close more deals with confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>

                  <p className="text-sm font-medium text-emerald-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Testimonials;