"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function LoadScreen() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loadScreen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex h-screen w-full items-center justify-center bg-black"
      >
        <span className="animate-pulse text-6xl font-bold text-matrix-light">
          JND.
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
