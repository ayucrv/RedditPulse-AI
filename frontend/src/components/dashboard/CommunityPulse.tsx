interface Props {
  pulse: string;
}

export default function CommunityPulse({ pulse }: Props) {
  return (
    <section className="glass mt-10 rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        COMMUNITY PULSE
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        What Reddit is Really Saying
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-300">
        {pulse}
      </p>

    </section>
  );
}