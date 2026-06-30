import type { Keyword } from "../../types/analysis";

interface Props {
  keywords: Keyword[];
}

export default function TrendingKeywords({
  keywords,
}: Props) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-[#111111] p-8">

      <h2 className="mb-8 text-3xl font-heading font-bold">
        Trending Keywords
      </h2>

      <div className="space-y-5">

        {keywords.map((keyword) => (

          <div
            key={keyword.word}
            className="flex items-center justify-between rounded-2xl bg-black/30 px-5 py-4 transition hover:border-orange-500"
          >

            <span className="font-medium">
              #{keyword.word}
            </span>

            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-orange-400">

              {keyword.count}

            </span>

          </div>

        ))}

      </div>

    </section>
  );
}