import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "../../components/common/Logo";
import Button from "../../components/common/Button";

function Login() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="grid min-h-screen lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden bg-slate-950 lg:flex">
                    <div className="flex w-full items-center justify-center px-12">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-lg"
                        >
                            <div className="mb-10">
                                <Logo dark />
                            </div>

                            <h1 className="text-5xl font-black leading-tight text-white">
                                Welcome back to FlowCRM.
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-slate-400">
                                Keep your customers organized, manage your
                                pipeline, and stay on top of your team's
                                performance.
                            </p>

                            <div className="mt-10 space-y-5">
                                {[
                                    "Manage your customer relationships",
                                    "Track deals and sales pipelines",
                                    "Collaborate with your team",
                                    "Monitor your business performance",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-slate-300"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="shrink-0 text-emerald-500"
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
                                    Welcome back
                                </h2>

                                <p className="mt-3 text-slate-500">
                                    Sign in to continue to your workspace.
                                </p>
                            </div>

                            <form className="mt-8 space-y-5">

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-slate-700"
                                    >
                                        Email address
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
                                    <div className="mb-2 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-semibold text-slate-700"
                                        >
                                            Password
                                        </label>

                                        <Link
                                            to="/forgot-password"
                                            className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                                    />
                                </div>

                                {/* Remember */}
                                <div className="flex items-center gap-3">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-slate-500"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <Button className="flex w-full items-center justify-center gap-2 py-3.5">
                                    Sign In
                                    <ArrowRight size={18} />
                                </Button>
                            </form>

                            <p className="mt-8 text-center text-sm text-slate-500">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="font-semibold text-emerald-600 hover:text-emerald-700"
                                >
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default Login;