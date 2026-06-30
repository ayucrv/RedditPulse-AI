interface Props {
  flags: string[];
}

export default function RedFlags({ flags }: Props) {
  return (
    <section className="glass rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-red-400">
        RED FLAGS
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Potential Concerns
      </h2>

      <div className="mt-8 space-y-4">

        {flags.map((flag) => (

          <div
            key={flag}
            className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5"
          >

            <p>{flag}</p>

          </div>

        ))}

      </div>

    </section>
  );
}