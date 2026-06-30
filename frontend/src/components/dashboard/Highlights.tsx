interface Props {
  highlights: string[];
}

export default function Highlights({ highlights }: Props) {
  return (
    <section className="glass rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        DISCUSSION HIGHLIGHTS
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Key Insights
      </h2>

      <div className="mt-8 space-y-4">

        {highlights.map((item) => (

          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >

            {item}

          </div>

        ))}

      </div>

    </section>
  );
}