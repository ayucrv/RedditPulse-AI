import type { Sentiment } from "../../types/analysis";

interface Props {
  sentiment: Sentiment;
}

export default function MetricCards({
  sentiment,
}: Props) {
  const cards = [
    {
      title: "Positive",
      value: sentiment.positive,
    },
    {
      title: "Neutral",
      value: sentiment.neutral,
    },
    {
      title: "Negative",
      value: sentiment.negative,
    },
  ];

  return (
    <section className="mt-10 grid gap-6 md:grid-cols-3">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-[28px] border border-white/10 bg-[#111111] p-8 transition hover:border-orange-500/30"
        >

          <p className="text-gray-500">
            {card.title}
          </p>

          <h2 className="mt-3 text-5xl font-heading font-bold text-orange-500">
            {card.value}%
          </h2>

        </div>

      ))}

    </section>
  );
}