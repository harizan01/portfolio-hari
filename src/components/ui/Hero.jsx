import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onContact }) {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 z-10 w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-semibold leading-tight text-slate-900"
                >
                    I build reliable cloud & DevOps platforms — <span className="text-slate-500">secure, automated, and cost-efficient</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 }}
                    className="mt-6 text-lg text-slate-500 max-w-2xl leading-relaxed"
                >
                    AWS & Azure certified engineer. I automate infrastructure, ship fast with CI/CD, and monitor what matters.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.22 }}
                    className="mt-8 flex flex-wrap gap-4"
                >
                    <a
                        href="/resume.pdf"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/50 transition-colors"
                        download
                    >
                        Download Resume
                    </a>

                    <button
                        onClick={onContact}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all hover:-translate-y-0.5"
                    >
                        Contact Me
                    </button>
                </motion.div>
            </div>

            {/* subtle tinted decorative elements */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-100/50 to-transparent pointer-events-none" />
            <div className="absolute -right-20 top-24 w-96 h-96 bg-accent/10 blur-3xl rounded-full pointer-events-none mix-blend-multiply" />
        </section>
    );
}
