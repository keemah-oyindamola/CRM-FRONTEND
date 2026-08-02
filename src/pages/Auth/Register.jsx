import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";

function Register() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden bg-emerald-600 lg:flex">
                    <div className="flex w-full items-center justify-center px-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-lg text-white"
                        >
                            <div className="mb-10">
                                <Logo dark />
                            </div>

                            <h1 className="text-5xl font-black leading-tight">
                                Start building better customer relationships.
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-emerald-50">
                                Bring your customers, sales pipeline, and team
                                together in one powerful CRM platform.
                            </p>

                            <div className="mt-10 space-y-5">
                                {[
                                    "Organize your customers",
                                    "Manage your sales pipeline",
                                    "Collaborate with your team",
                                    "Track business performance",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="shrink-0"
                                        />

                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-6 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-md"
                    >
                        {/* Mobile Logo */}
                        <div className="mb-10 lg:hidden">
                            <Logo />
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900">
                                    Create your account
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Start your 14-day free trial today.
                                </p>
                            </div>

                            <form className="mt-8 space-y-5">

                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Full name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Company name
                                    </label>

                                    <input
                                        id="company"
                                        type="text"
                                        placeholder="Acme Inc."
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Work email
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@company.com"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    />
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Password
                                    </label>

                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Create a strong password"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    />
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                    />

                                    <label
                                        htmlFor="terms"
                                        className="text-sm leading-6 text-slate-500"
                                    >
                                        I agree to the{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-emerald-600 hover:text-emerald-700"
                                        >
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="#"
                                            className="font-medium text-emerald-600 hover:text-emerald-700"
                                        >
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>

                                <Button className="flex w-full items-center justify-center gap-2 py-3.5">
                                    Create Account
                                    <ArrowRight size={18} />
                                </Button>
                            </form>

                            <p className="mt-8 text-center text-sm text-slate-500">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default Register;