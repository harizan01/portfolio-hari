import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, tags, img }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px -5px rgba(2,6,23,0.08)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex flex-col h-full rounded-2xl border border-slate-200 p-5 bg-white shadow-sm hover:border-accent/30 transition-colors"
        >
            <div className="h-48 rounded-xl overflow-hidden mb-5 bg-slate-100 relative group">
                {img ? (
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                        {/* Fallback placeholder */}
                        <div className="w-12 h-12 rounded-full border-2 border-slate-200 border-dashed flex items-center justify-center" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">{description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {tags && tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md font-medium border border-slate-100">
                        {t}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}
