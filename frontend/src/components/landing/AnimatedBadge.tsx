import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-orange-500/20
      bg-white/5
      px-5
      py-2
      backdrop-blur-xl
      "
    >
      <Sparkles size={16} className="text-orange-500" />

      <span className="text-sm text-gray-300">
        AI Powered Reddit Analytics
      </span>
    </motion.div>
  );
}