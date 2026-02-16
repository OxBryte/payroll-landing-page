/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLightningChargeFill } from "react-icons/bs";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full min-h-[100dvh] mx-auto">
      <Navbar />
      <div className="w-full min-h-[95dvh] relative overflow-hidden p-4 md:p-10 mx-auto relative flex flex-col items-center justify-center bg-c-bg text-white">
        {/* Animated background elements */}
        <motion.div
          className="absolute -bottom-30 -left-10 m-auto bg-gradient-to-br from-c-color to-black w-[340px] h-[340px] blur-[60px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 -right-10 m-auto bg-[#C294C2]/30 w-[280px] h-[280px] blur-[80px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="flex flex-col gap-6 z-10 items-center text-center max-w-4xl">
          <Link
            target="_blank"
            to="https://paragraph.com/@0xb9ffcd5fb867905e2f823a5a29dc7a2cd1c101b5/preview/lfkUFpf56ZsJ8h5xQhtu"
          >
            <motion.div
              className="bg-c-color/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 text-c-color border border-c-color/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(148, 194, 148, 0.3)",
              }}
            >
              <BsLightningChargeFill className="animate-pulse" />
              <p className="text-sm font-medium">
                Latest update - Enhanced crypto payroll features
              </p>
            </motion.div>
          </Link>
          <motion.h1
            className="font-bricolage text-[40px] md:text-[72px] lg:text-[80px] font-bold leading-[44px] md:leading-[68px] lg:leading-[76px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Forge Trust <br /> with Every{" "}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-c-color via-c-color/80 to-c-color/60 animate-pulse">
              Paycheck
            </span>
          </motion.h1>

          <motion.p
            className="max-w-[600px] text-base md:text-lg w-full font-light text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Deliver seamless, transparent payroll experiences that honor your
            team's dedication and fuel your company's ambition with
            blockchain-powered efficiency.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link target="_blank" to="https://app.gloc.pro">
              <motion.button
                className="cursor-pointer bg-gradient-to-r from-c-color to-c-color-sec px-8 py-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-c-color/25 flex items-center gap-2 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(148, 194, 148, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Launch App
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>

            <motion.button
              className="cursor-pointer border-2 border-white/20 px-8 py-4 rounded-xl text-white font-medium text-base backdrop-blur-sm hover:border-c-color/50 transition-colors duration-300"
              disabled
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(148, 194, 148, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-8 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-c-color rounded-full animate-pulse"></div>
              <span>Trusted by 500+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-c-color rounded-full animate-pulse"></div>
              <span>99.9% uptime</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
