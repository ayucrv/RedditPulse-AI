import {
  Brain,
  ShieldCheck,
  Lightbulb,
  MessageSquareText,
  Sparkles,
  Bot,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Community Intelligence",
    description:
      "Go beyond simple summaries. RedditPulse AI identifies the overall community consensus, recurring viewpoints, and what people collectively believe.",
  },
  {
    icon: Sparkles,
    title: "AI Discussion Insights",
    description:
      "Generate concise summaries, emotional context, key discussion themes, and actionable insights from long Reddit conversations in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Red Flag Detection",
    description:
      "Automatically identify recurring warning signs such as manipulation, scams, burnout, toxicity, financial risks, and other concerns mentioned throughout the discussion.",
  },
  {
    icon: Lightbulb,
    title: "Recurring Advice",
    description:
      "Extract the most common recommendations shared by the Reddit community instead of reading hundreds of repetitive comments yourself.",
  },
  {
    icon: MessageSquareText,
    title: "Discussion Highlights",
    description:
      "Discover the most important ideas, opinions, and recurring concepts without manually scrolling through lengthy Reddit threads.",
  },
  {
    icon: Bot,
    title: "Ask RedditPulse AI",
    description:
      "After the analysis, ask follow-up questions about the discussion. The AI answers using only the uploaded conversation, providing grounded and contextual responses.",
  },
];

export default function Features() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-28 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Hero */}

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-orange-500">
            FEATURES
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Understand
            <br />
            What Reddit Really Means
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            RedditPulse AI transforms long Reddit discussions into structured
            community intelligence using Natural Language Processing, sentiment
            analysis, and AI-powered reasoning.
          </p>

        </div>

        {/* Features */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-orange-500/30
                  hover:bg-white/[0.05]
                "
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10">

                  <Icon
                    size={30}
                    className="text-orange-500"
                  />

                </div>

                <h2 className="mb-4 text-2xl font-semibold">
                  {feature.title}
                </h2>

                <p className="leading-8 text-gray-400">
                  {feature.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </main>
  );
}