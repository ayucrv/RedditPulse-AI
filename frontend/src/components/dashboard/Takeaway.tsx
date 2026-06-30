interface Props {
  takeaway: string;
}

export default function Takeaway({ takeaway }: Props) {
  return (
    <section className="glass mt-10 rounded-[32px] border border-orange-500/20 p-10">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        CONSTRUCTIVE TAKEAWAY
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Final Interpretation
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-300">
        {takeaway}
      </p>

    </section>
  );
}