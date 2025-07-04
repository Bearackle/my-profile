"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ title, subtitle, imageUrl, link }: ProjectCardProps) => {
  const subtitleLines = subtitle
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <Link href={link} target="_blank" className="group block">
      <motion.div
        className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 flex gap-6 relative hover:bg-zinc-800/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image Container */}
        <motion.div
          className="w-[140px] aspect-square shrink-0 relative rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 z-10"></div>

          {/* Image */}
          <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-lg"
              sizes="50vw"
              priority={imageUrl === "/data-warehouse-project.png"}
            />
          </div>

          {/* Project Type Badge */}
          <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full z-20">
            <span className="text-xs font-medium text-white">Project</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 py-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title with gradient on hover */}
          <motion.div className="overflow-hidden">
            <motion.h3
              className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white group-hover:from-orange-400 group-hover:to-pink-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          </motion.div>

          {/* Description lines */}
          <div className="space-y-2">
            {subtitleLines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.1 * (index + 1),
                  ease: "easeOut",
                }}
              >
                <span className="text-orange-500 text-lg leading-5 mt-0.5">
                  •
                </span>
                <p className="text-gray-300 text-base leading-relaxed flex-1">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          {/* View Project Button */}
          <motion.div
            className="mt-4 inline-flex items-center space-x-1 text-sm text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>View Project</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* GitHub Icon */}
        <motion.div
          className="absolute top-4 right-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
