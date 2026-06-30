import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute inset-0 bg-[#0A0A0A]" />

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -left-60
        -top-60
        h-[700px]
        w-[700px]
        rounded-full
        bg-red-700/20
        blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -180, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-250px]
        bottom-[-250px]
        h-[700px]
        w-[700px]
        rounded-full
        bg-orange-700/20
        blur-[180px]
        "
      />
    </div>
  );
}