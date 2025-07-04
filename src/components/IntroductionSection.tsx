"use client";

import { motion } from "framer-motion";

const IntroductionSection = () => {
  const stats = [
    { value: "+5", label: "PROJECTS\nCOMPLETED" },
    { value: "+6", label: "TECHNICAL\nSKILLS" },
    { value: "3+", label: "YEARS OF\nCODING" },
    { value: "4rd", label: "YEAR\nSTUDENT" },
  ];

  const skillCards = [
    {
      title: "BACKEND SPECIALIST",
      description:
        "Proficient in Java, PHP, and SQL\nBuilding robust and scalable systems",
      color: "bg-[#FF6B4A] text-white",
      icon: "🔧",
    },
    {
      title: "CONTINUOUS LEARNER",
      description:
        "Quick to adapt to new technologies\nPassionate about staying current",
      color: "bg-[#C5FF41] text-black",
      icon: "📚",
    },
    {
      title: "PROBLEM SOLVER",
      description:
        "Analytical thinker with strong\ndebugging and optimization skills",
      color: "bg-[#41B3FF] text-white",
      icon: "🎯",
    },
    {
      title: "TEAM PLAYER",
      description: "Excellent communication\nand collaboration skills",
      color: "bg-[#FF41B3] text-white",
      icon: "🤝",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl mr-4"
            >
              👋
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl font-semibold text-gray-300"
            >
              Hi there! I&apos;m
            </motion.h2>
          </div>

          <h1 className="text-7xl font-extrabold mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              SOFTWARE
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-zinc-800"
            >
              DEVELOPER
            </motion.span>
          </h1>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-2xl space-y-4"
          >
            <p className="text-lg">
              As a fourth-year student and aspiring software and data
              engineering, I&apos;m on a mission to create impactful solutions
              through clean, efficient code.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a desire to
              solve real-world problems. I specialize in backend development,
              with hands-on experience in building APIs, and robust database
              systems.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(39, 39, 42, 0.8)",
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.h2
                className="text-5xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
              >
                {stat.value}
              </motion.h2>
              <p className="text-gray-400 whitespace-pre-line text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${card.color} p-8 rounded-2xl relative overflow-hidden group cursor-pointer`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 1.2 }}
                    className="font-bold text-2xl mb-3"
                  >
                    {card.title}
                  </motion.h3>
                  <p className="text-sm opacity-90 whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
                <span className="text-4xl">{card.icon}</span>
              </div>
              <motion.div
                className="absolute bottom-4 right-4"
                whileHover={{ scale: 1.2, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IntroductionSection;
