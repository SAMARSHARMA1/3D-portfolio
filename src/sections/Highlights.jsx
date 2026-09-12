// src/sections/Highlights.jsx
import { motion } from "motion/react";

const highlights = [
  {
    icon: "🤖",
    title: "AI-Powered Projects",
    count: "5+",
    desc: "Built production-grade AI apps including an automated testing agent, browser-based IDE, and RAG pipeline.",
    tags: ["LLMs", "Gemini", "Agents"],
    accent: "from-lavender to-royal",
    glow: "rgba(122,87,219,0.5)",
  },
  {
    icon: "⚙️",
    title: "Full-Stack Engineering",
    count: "E2E",
    desc: "Next.js, React, TypeScript, FastAPI, PostgreSQL, MongoDB — end-to-end from UI to database.",
    tags: ["Next.js", "TypeScript", "APIs"],
    accent: "from-mint to-aqua",
    glow: "rgba(87,219,150,0.5)",
  },
  {
    icon: "🧠",
    title: "ML & Data Engineering",
    count: "Pipelines",
    desc: "Airflow pipelines, MLflow tracking, ensemble forecasting with XGBoost and LightGBM.",
    tags: ["Airflow", "XGBoost", "MLflow"],
    accent: "from-sand to-orange",
    glow: "rgba(214,153,92,0.5)",
  },
  {
    icon: "🚀",
    title: "Developer Tools",
    count: "Build",
    desc: "Comfortable building developer-facing tools — IDEs, testing automation, CLI workflows.",
    tags: ["Monaco", "WebContainer", "APIs"],
    accent: "from-fuchsia to-coral",
    glow: "rgba(202,47,140,0.5)",
  },
];

const Highlights = () => {
  return (
    <section className="c-space pt-20 md:pt-28 pb-16 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-center gap-4 mb-4">
        <div className="h-[2px] w-12 bg-gradient-to-r from-lavender to-transparent" />
        <h2 className="text-heading">What I Bring</h2>
      </div>
      <p className="subtext mb-12 max-w-lg relative">
        A quick snapshot of what you can expect from working with me
      </p>

      {/* Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative p-5 rounded-2xl border border-white/10 bg-gradient-to-b from-storm/70 to-indigo/90 hover:border-white/25 transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: `0 4px 20px -5px ${item.glow.replace("0.5", "0.1")}`,
            }}
          >
            {/* Top accent line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accent} opacity-70 group-hover:opacity-100 transition-opacity`}
            />

            {/* Hover glow */}
            <div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: item.glow }}
            />

            {/* Large watermark number */}
            <div className="absolute -bottom-4 -right-2 text-[80px] font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-500 leading-none select-none">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Icon */}
            <div className="relative flex items-center justify-between mb-5">
              <div
                className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                style={{ boxShadow: `0 8px 20px -5px ${item.glow}` }}
              >
                {item.icon}
              </div>
              <span className="text-xs font-bold tracking-wider text-white/40 uppercase">
                {item.count}
              </span>
            </div>

            {/* Title */}
            <h3 className="relative text-white font-semibold text-base mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="relative text-neutral-400 text-sm leading-relaxed mb-4">
              {item.desc}
            </p>

            {/* Tags */}
            <div className="relative flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;