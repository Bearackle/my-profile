"use client";

import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "ONLINE NOTE SYSTEM",
      subtitle:
        "Backend system with Java Spring Boot\nRedis for caching\nMinio for object storage",
      imageUrl: "/note-system.png",
      link: "https://github.com/Bearackle/Note.git",
    },
    {
      title: "EMPLOYEE PERFORMANCE DATA WAREHOUSE",
      subtitle:
        "Data ETL with Visual Studio\nEmployee performance metrics\nAutomated data processing pipeline",
      imageUrl: "/data-warehouse-project.png",
      link: "https://github.com/Bearackle/Employee-Performance-Data-Warehouse.git",
    },
    {
      title: "LLM BACKEND SYSTEM",
      subtitle:
        "System for LLMs with Java Spring Boot\nAPI integration with language models\nScalable architecture design",
      imageUrl: "/lyraAI2.png",
      link: "https://github.com/Bearackle/AI-Chat-App.git",
    },
    {
      title: "ONLINE SHOPPING SYSTEM",
      subtitle:
        "Robust backend system with PHP Laravel\nLaravel permission and policies\nSecured VPS deployment with SSL/TLS\nFirewall setup and SSH key configuration",
      imageUrl: "/4h-protein-cover.png",
      link: "https://4hprotein.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-7xl font-extrabold">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white"
            >
              MY ACADEMIC
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-zinc-800"
            >
              PROJECTS
            </motion.span>
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-400 max-w-2xl mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Here are some of my academic projects that showcase my skills in
          backend development, data engineering, and system architecture. Each
          project represents a unique challenge and learning experience.
        </motion.p>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="transform hover:-translate-y-1 transition-transform duration-300"
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
