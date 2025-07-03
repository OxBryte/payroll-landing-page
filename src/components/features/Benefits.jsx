/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: "/time.svg",
      title: "Save Time",
      description: "One-click payroll runs—no more manual spreadsheets.",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: "/error.svg",
      title: "Eliminate Errors",
      description: "Automated tax calculations and real-time validation.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: "/data.svg",
      title: "Scale with Confidence",
      description: "From 5 to 5,000 employees, we've got you covered.",
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: "/crypto.svg",
      title: "Borderless, Instant Settlements",
      description:
        "Empower your global team with near-real-time, cross-border crypto payouts—no intermediaries, no delays, minimal fees.",
      color: "from-c-color/20 to-c-color-sec/20",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full p-6 md:py-24 z-10 flex flex-col justify-center items-center ">
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-bricolage text-gray-900 mb-6">
            Why <span className="text-c-color">GLÖC</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the future of payroll with blockchain-powered efficiency,
            transparency, and global reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <motion.div
                className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-lg shadow-gray-100/50 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 h-full"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>

                  <div className="flex flex-col items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-c-color transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover effect line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-c-color to-c-color-sec group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-c-color">
              500+
            </div>
            <div className="text-gray-600 font-medium">Companies Trust Us</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-c-color">
              99.9%
            </div>
            <div className="text-gray-600 font-medium">Uptime Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-c-color">
              24/7
            </div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
