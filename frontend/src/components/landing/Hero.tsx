import { motion } from "framer-motion";

import AnimatedBadge from "./AnimatedBadge";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-44 pb-40">

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">

        <AnimatedBadge />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mt-10
            max-w-5xl
            text-5xl
            font-black
            leading-[1.05]
            tracking-[-0.04em]
            md:text-7xl
            lg:text-8xl
          "
        >
          Understand What
          <br />

          <span className="gradient-text">
            Reddit Really Means.
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-gray-400
          "
        >
          Turn long Reddit discussions into meaningful insights using
          AI-powered community analysis, emotional understanding,
          recurring advice, and intelligent summaries.
        </motion.p>

        <div className="mt-12 w-full max-w-3xl">

          <SearchBar />

        </div>

      </div>

    </section>
  );
}