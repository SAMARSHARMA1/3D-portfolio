// src/sections/Certifications.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { certifications } from "../constants";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="c-space pt-20 md:pt-28 pb-16">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-[2px] w-12 bg-gradient-to-r from-lavender to-transparent" />
        <h2 className="text-heading">Certifications</h2>
      </div>
      <p className="subtext mb-12 max-w-lg">
        Trainings and certifications I've completed
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedCert(cert)}
            className="group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-storm/60 to-indigo/80 hover:border-lavender/60 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(122,87,219,0.4)] transition-all duration-300"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lavender to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

            {/* Preview Area */}
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-8 overflow-hidden">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(122,87,219,0.25),transparent_65%)] group-hover:bg-[radial-gradient(circle_at_50%_40%,rgba(122,87,219,0.4),transparent_65%)] transition-all duration-500" />

              {/* Diagonal shine */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent" />

              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Certificate image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="relative max-w-full max-h-full object-contain rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.7)] ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-[1.04] group-hover:-rotate-1"
              />

              {/* Medal badge */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gradient-to-br from-lavender to-royal flex items-center justify-center text-white text-sm shadow-lg ring-2 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                ✦
              </div>

              {/* Hover hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 backdrop-blur-0 group-hover:backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 text-white text-xs font-semibold tracking-wider uppercase bg-white/10 border border-white/30 backdrop-blur px-5 py-2.5 rounded-full">
                  View Certificate
                </span>
              </div>
            </div>

            {/* Info Footer */}
            <div className="relative p-5 border-t border-white/10 bg-gradient-to-b from-transparent to-black/20">
              <h3 className="text-lg font-semibold text-white group-hover:text-lavender transition-colors">
                {cert.title}
              </h3>
              <p className="text-neutral-400 text-sm mt-1 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-lavender" />
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between mt-4 text-xs">
                <span className="text-neutral-500 tracking-wide uppercase">
                  {cert.date}
                </span>
                <span className="text-neutral-500 font-mono truncate ml-2">
                  {cert.credentialId}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-14 right-0 flex items-center gap-2 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium uppercase tracking-wider">
                  Close
                </span>
                <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center border border-white/20">
                  ✕
                </div>
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              />

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/30 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-lavender animate-pulse" />
                  <span className="text-xs text-lavender uppercase tracking-wider">
                    Verified
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl">
                  {selectedCert.title}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  {selectedCert.issuer} · {selectedCert.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;