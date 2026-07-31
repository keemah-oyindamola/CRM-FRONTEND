import { motion } from "framer-motion";
import {
    Users,
    BarChart3,
    BriefcaseBusiness,
    ShieldCheck,
    BellRing,
    Zap,
} from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";

const features = [
    {
        icon: Users,
        title: "Customer Management",
        description:
            "Manage customer profiles, contacts, and interactions from a single workspace.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Sales Pipeline",
        description:
            "Track leads from first contact to closed deals with visual sales pipelines.",
    },
    {
        icon: BarChart3,
        title: "Business Analytics",
        description:
            "Monitor sales performance, customer growth, and key business metrics in real time.",
    },
    {
        icon: ShieldCheck,
        title: "Role-Based Access",
        description:
            "Secure your workspace with Admin, Manager, and Staff permissions.",
    },
    {
        icon: Zap,
        title: "Workflow Automation",
        description:
            "Automate repetitive tasks to help your team stay productive every day.",
    },
    {
        icon: BellRing,
        title: "Real-Time Notifications",
        description:
            "Keep everyone updated instantly with live activity and important alerts.",
    },
];

function Features() {
    return (
        <Section
            id="features"
            className="bg-slate-50"
        >
            <Container>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Powerful Features
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
                        Everything Your Team Needs
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        FlowCRM combines customer management, sales tracking,
                        collaboration, automation, and analytics into one
                        powerful platform designed for modern businesses.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.5,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-600">
                                    <Icon
                                        size={28}
                                        className="text-emerald-600 transition-colors duration-300 group-hover:text-white"
                                    />
                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}

export default Features;