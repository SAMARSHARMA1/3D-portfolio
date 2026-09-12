<<<<<<< HEAD
// src/components/ProjectDetail.jsx
import { motion } from "motion/react";

const ProjectDetail = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-md bg-black/70 p-4"
      onClick={closeModal}
    >
      <motion.div
        className="relative w-full max-w-3xl my-auto rounded-2xl border border-white/10 bg-gradient-to-b from-midnight to-navy shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button — now always visible */}
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 hover:bg-lavender/80 backdrop-blur border border-white/20 text-white transition-all cursor-pointer group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 transition-transform group-hover:rotate-90"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative w-full max-h-[45vh] overflow-hidden bg-black/40">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto custom-scroll">
          <h3 className="mb-3 text-2xl md:text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="mb-5 text-neutral-300 leading-relaxed">
            {description}
          </p>

          <div className="mb-5 space-y-3">
            {subDescription.map((subDesc, index) => (
              <p
                key={index}
                className="text-sm md:text-base text-neutral-400 leading-relaxed flex gap-2"
              >
                <span className="text-lavender mt-1.5 flex-shrink-0">▸</span>
                <span>{subDesc}</span>
              </p>
            ))}
          </div>

          {/* Footer with tags + link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="size-4"
                  />
                  <span className="text-xs text-neutral-300">{tag.name}</span>
                </div>
              ))}
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-lavender hover:text-white transition-colors group/link"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
=======
import { motion } from "motion/react"

const ProjectDetail = ({title,
    description,
    subDescription,
    href,
    image,
    tags,
    closeModal
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center
    justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        <motion.div className='relative max-w-2xl border shadow-sm
        rounded-2xl bg-gradiant-to-l from-midnight to-navy 
        border-white/10' initial={{opacity:0, scale:0.5}}
        animate={{ opacity:1, scale: 1}}
        >
            <button onClick={ closeModal} className='absolute p-2 rounded-sm top-5 right-5
            bg-midnight hover:bg-gray-500'>
                <img src="assets/close.svg" className='w-6 h-6' />
            </button>
            <img src={image} alt={title} className='w-full
            rounded-t-2xl'/>
            <div className='p-5'>
                <h5 className='mb-2 text-2xl font-bold text-white'>
                    {title}</h5>
                <p className='mb-3 font-normal text-neutral-400'>
                    {description}</p>
                {subDescription.map((subDesc,index)=>(
                    <p className='mb-3 font-normal text-neutral-400'>
                        {subDesc}</p> 
                    
                    ))}
                    <div className='flex items-center justify-between
                    mt-4'>
                        <div className='flex gap-3'>
                            {tags.map((tag)=>(
                                <img key={tag.id} src={tag.path} alt={tag.name}
                                className='rounded-lg size-10 hover-animation'
                                />
                            ))}

                </div>
                <a className='inline-flex items-center gap-1
                font-medium cursor-pointer hover-animation'>
                    View Project <img src="assets/arrow-up.svg"
                    className='size-4' href={href} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
  )
}

export default ProjectDetail
>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
