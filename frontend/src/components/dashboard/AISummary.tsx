interface Props {
  summary: string;
}

export default function AISummary({ summary }: Props) {
  return (
    <section className="mt-10 rounded-[28px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-8">

      <div className="mb-4 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500">

          🤖

        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-orange-400">
            AI SUMMARY
          </p>

          <h2 className="text-2xl font-heading font-bold">
            Community Insight
          </h2>

        </div>

      </div>

      <p className="leading-8 text-gray-300">
        {summary}
      </p>

    </section>
  );
}