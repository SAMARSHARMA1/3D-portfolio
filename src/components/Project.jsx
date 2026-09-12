// src/components/Project.jsx
import React, { useState } from "react";
import { motion } from "motion/react";
import ProjectDetail from "./ProjectDetail";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="group relative flex flex-col md:flex-row gap-6 items-start md:items-center py-8 px-4 md:px-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]"
      >
        {/* Static thumbnail (always visible) */}
        <div className="relative w-full md:w-40 h-32 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-storm to-indigo">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
          {/* Overlay glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-lavender transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 group-hover:border-white/20 group-hover:text-neutral-300 transition-colors"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsHidden(true)}
            className="flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-lavender cursor-pointer transition-colors group/btn whitespace-nowrap self-start md:self-center"
          >
            Read More
            <img
              src="assets/arrow-right.svg"
              className="w-4 transition-transform group-hover/btn:translate-x-1"
              alt="arrow"
            />
          </button>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isHidden && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;