interface Advice {
  text: string;
  frequency: number;
}

interface Props {
  advice: Advice[];
}

export default function AdviceCards({ advice }: Props) {
  return (
    <section className="glass rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        COMMON ADVICE
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Most Repeated Suggestions
      </h2>

      <div className="mt-8 space-y-4">

        {advice.map((item) => (

          <div
            key={item.text}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >

            <div className="flex items-center justify-between">

              <p>{item.text}</p>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm text-orange-400">
                {item.frequency}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}