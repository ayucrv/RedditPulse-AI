import {
  Brain,
  TrendingUp,
  BarChart3,
  MessageSquare,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";

const cards = [
  {
    title: "AI Sentiment",
    text: "Analyze positive, neutral and negative discussions instantly.",
    icon: Brain,
    span: "md:col-span-2",
  },
  {
    title: "Trending Topics",
    text: "Discover what Reddit is talking about in real time.",
    icon: TrendingUp,
  },
  {
    title: "Interactive Charts",
    text: "Beautiful Plotly powered visualizations.",
    icon: BarChart3,
  },
  {
    title: "Conversation Insights",
    text: "Understand communities using AI.",
    icon: MessageSquare,
    span: "md:col-span-2",
  },
];

export default function BentoFeatures() {
  return (
    <section className="mx-auto my-40 max-w-7xl px-6">

      <div className="mb-16 text-center">

        <h2 className="gradient-text text-5xl font-black">
          Built for Modern Reddit Analytics
        </h2>

        <p className="mt-6 text-gray-400">
          Powerful AI tools wrapped inside a beautiful interface.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {cards.map((card) => {

          const Icon = card.icon;

          return (
            <GlassCard
              key={card.title}
              className={`group p-12 transition-all duration-500 hover:-translate-y-3 ${card.span ?? ""}`}
            >

              <Icon
                className="mb-8 text-orange-500 transition-transform duration-300 group-hover:scale-110"
                size={42}
              />

              <h3 className="mb-5 text-2xl font-bold">
                {card.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {card.text}
              </p>

            </GlassCard>
          );
        })}

      </div>

    </section>
  );
}