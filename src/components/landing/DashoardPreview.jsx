import { motion } from "framer-motion";
import {
  DollarSign,
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Plus,
} from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";

const stats = [
  {
    icon: DollarSign,
    title: "Revenue",
    value: "$128.4K",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Users,
    title: "Customers",
    value: "1,248",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BriefcaseBusiness,
    title: "Active Deals",
    value: "84",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Conversion",
    value: "18.2%",
    color: "bg-orange-100 text-orange-600",
  },
];

const pipeline = [
  {
    stage: "Qualified",
    value: 24,
    color: "bg-emerald-500",
  },
  {
    stage: "Proposal",
    value: 18,
    color: "bg-yellow-500",
  },
  {
    stage: "Negotiation",
    value: 12,
    color: "bg-blue-500",
  },
  {
    stage: "Won",
    value: 30,
    color: "bg-purple-500",
  },
];

const activities = [
  "Sarah added Acme Inc.",
  "John updated a sales deal",
  "Payment received successfully",
  "Emily joined the sales team",
];

function DashboardPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Manage Everything From One Dashboard
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Get a complete overview of your business with powerful analytics,
            customer management, deal tracking, and team activity—all in one
            intuitive workspace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Dashboard
              </h3>

              <p className="text-sm text-slate-500">
                Welcome back, Sarah 👋
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
              <Plus size={18} />
              Add Customer
            </button>
          </div>

          {/* Stats */}
          <div className="grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h4 className="mt-2 text-3xl font-bold text-slate-900">
                    {item.value}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="grid gap-6 border-t border-slate-200 p-6 lg:grid-cols-2">
            {/* Pipeline */}
            <div className="rounded-2xl border border-slate-200 p-6">
              <h4 className="mb-6 text-xl font-bold text-slate-900">
                Sales Pipeline
              </h4>

              <div className="space-y-5">
                {pipeline.map((item) => (
                  <div key={item.stage}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{item.stage}</span>
                      <span>{item.value}</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{
                          width: `${item.value * 3}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="rounded-2xl border border-slate-200 p-6">
              <h4 className="mb-6 text-xl font-bold text-slate-900">
                Recent Activity
              </h4>

              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-center gap-3"
                  >
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />

                    <p className="text-slate-600">
                      {activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default DashboardPreview;