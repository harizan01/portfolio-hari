import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Calendar, Users, Award, ExternalLink } from "lucide-react";

export default function ProjectCard({ title, description, tags, img, index, details }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isExpanded]);

    // Determine expand direction based on grid position (3 columns)
    const getExpandOrigin = (idx) => {
        const col = idx % 3; // 0 = left, 1 = middle, 2 = right
        const row = Math.floor(idx / 3);

        return {
            originX: col === 0 ? 0 : col === 2 ? 1 : 0.5,
            originY: row === 0 ? 0 : row === 2 ? 1 : 0.5,
        };
    };

    const origin = getExpandOrigin(index);

    return (
        <>
            <motion.article
                layoutId={`project-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={() => setIsExpanded(true)}
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden glass-card hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 cursor-pointer"
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-emerald-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none z-10" />

                {/* Image/Visual Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100/50 via-emerald-100/30 to-blue-100/50">
                    {img ? (
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            {/* Decorative gradient placeholder */}
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/30 to-emerald-400/30 blur-2xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-2xl border-2 border-purple-300/50 border-dashed" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Hover arrow indicator */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                        <ArrowUpRight className="w-5 h-5 text-purple-600" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative z-20 flex-1 p-6 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1 line-clamp-3">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags && tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1.5 rounded-full font-medium bg-gradient-to-r from-purple-50 to-emerald-50 text-purple-700 border border-purple-200/50"
                            >
                                {tag}
                            </span>
                        ))}
                        {tags && tags.length > 3 && (
                            <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-slate-100 text-slate-600">
                                +{tags.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </motion.article>

            {/* Expanded Modal */}
            <AnimatePresence mode="wait">
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsExpanded(false)}
                    >
                        {/* Backdrop with glass effect and green tint */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(6, 78, 59, 0.08) 100%), rgba(15, 23, 42, 0.4)'
                            }}
                        />

                        {/* Expanded Card with Premium Design */}
                        <motion.div
                            initial={{
                                scale: 0.95,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }}
                            exit={{
                                scale: 0.95,
                                opacity: 0,
                                transition: {
                                    duration: 0.25,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 border border-white/20 overflow-hidden"
                        >
                            {/* Decorative gradient overlays */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 via-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 via-purple-400/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

                            {/* Close Button - Always on top and clickable */}
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.15, duration: 0.2 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsExpanded(false);
                                }}
                                type="button"
                                className="absolute top-6 right-6 z-[100] p-3 flex items-center justify-center pointer-events-auto cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-full bg-white hover:bg-slate-50 flex items-center justify-center transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-110 border-2 border-slate-300 pointer-events-none">
                                    <X className="w-6 h-6 text-slate-700 transition-colors pointer-events-none" />
                                </div>
                            </motion.button>

                            {/* Scrollable Content */}
                            <div className="relative overflow-y-auto flex-1 custom-scrollbar">
                                {/* Hero Image Section with Gradient Overlay */}
                                <div className="relative h-80 overflow-hidden">
                                    {/* Gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-emerald-500/20 to-blue-500/20" />

                                    {img ? (
                                        <img
                                            src={img}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center relative">
                                            {/* Animated gradient orbs */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 90, 0],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/40 to-emerald-400/40 blur-3xl"
                                            />
                                            <motion.div
                                                animate={{
                                                    scale: [1.2, 1, 1.2],
                                                    rotate: [90, 0, 90],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1
                                                }}
                                                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 blur-2xl"
                                            />
                                            <div className="relative z-10 flex items-center justify-center">
                                                <div className="w-24 h-24 rounded-3xl border-2 border-white/50 border-dashed backdrop-blur-sm bg-white/10" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Bottom gradient fade */}
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/95 to-transparent" />
                                </div>

                                {/* Content Section with Premium Styling */}
                                <div className="relative p-8 md:p-12">
                                    {/* Title with gradient accent */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="mb-6"
                                    >
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-emerald-100 text-purple-700 text-sm font-semibold mb-4">
                                            Featured Project
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                            {title}
                                        </h2>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                        className="text-lg text-slate-600 leading-relaxed mb-10"
                                    >
                                        {description}
                                    </motion.p>

                                    {/* Project Details in Cards */}
                                    {details && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="space-y-8 mb-10"
                                        >
                                            {/* Achievements Section */}
                                            {details.achievements && (
                                                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/80 to-emerald-50/80 backdrop-blur-sm border border-purple-100/50">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                                                            <Award className="w-5 h-5 text-white" />
                                                        </div>
                                                        Key Achievements
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {details.achievements.map((achievement, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.3 + i * 0.05 }}
                                                                className="flex items-start gap-3 text-slate-700"
                                                            >
                                                                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-emerald-500 mt-2 flex-shrink-0 shadow-sm" />
                                                                <span className="leading-relaxed">{achievement}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Timeline and Team Info */}
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {details.timeline && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.25 }}
                                                        className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
                                                    >
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                                                                <Calendar className="w-5 h-5 text-white" />
                                                            </div>
                                                            <span className="font-semibold text-slate-900">Timeline</span>
                                                        </div>
                                                        <p className="text-slate-600 ml-13">{details.timeline}</p>
                                                    </motion.div>
                                                )}

                                                {details.team && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 }}
                                                        className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
                                                    >
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                                                <Users className="w-5 h-5 text-white" />
                                                            </div>
                                                            <span className="font-semibold text-slate-900">Team Role</span>
                                                        </div>
                                                        <p className="text-slate-600 ml-13">{details.team}</p>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Technologies Section */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                        className="pt-8 border-t border-slate-200/50"
                                    >
                                        <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {tags && tags.map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tag}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + tagIndex * 0.03 }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-4 py-2.5 rounded-xl font-medium bg-gradient-to-r from-purple-50 to-emerald-50 text-purple-700 border border-purple-200/50 shadow-sm hover:shadow-md hover:border-purple-300/50 transition-all cursor-default"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
