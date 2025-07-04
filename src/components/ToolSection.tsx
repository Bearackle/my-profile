"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ToolSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tools = [
    {
      name: "Java",
      description: "Programming Language",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Duke_%28Java_mascot%29_waving.svg",
      bgColor: "bg-white",
    },
    {
      name: "PHP",
      description: "Web Development",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      bgColor: "bg-[#1a1a1a]",
    },
    {
      name: "MySQL",
      description: "Database",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
      bgColor: "bg-white",
    },
    {
      name: "SQL",
      description: "Oracle DB",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      bgColor: "bg-[#1a1a1a]",
    },
    {
      name: "IntelliJ IDEA",
      description: "Java IDE",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
      bgColor: "bg-[#1a1a1a]",
    },
    {
      name: "VS Code",
      description: "Code Editor",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      bgColor: "bg-[#1a1a1a]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="text-white py-16 relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            DEVELOPMENT
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-zinc-300"
          >
            TOOLS
          </motion.span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="relative group bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex items-center gap-6"
            >
              <motion.div
                className={`w-16 h-16 relative flex-shrink-0 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 ${tool.bgColor} p-2`}
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                    unoptimized
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="flex-grow"
              >
                <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {tool.name}
                </h3>
                <p className="text-zinc-400">{tool.description}</p>
              </motion.div>

              {/* Hover gradient border */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToolSection;
