const companies = [
  "OpenAI",
  "Reddit",
  "GitHub",
  "HuggingFace",
  "Anthropic",
];

export default function TrustedBy() {
  return (
    <section className="mt-28 text-center">

      <p className="mb-8 text-sm uppercase tracking-[0.3em] text-gray-500">
        Inspired by modern AI platforms
      </p>

      <div className="flex flex-wrap justify-center gap-10 text-xl font-semibold text-gray-400">

        {companies.map((company) => (
          <span key={company}>
            {company}
          </span>
        ))}

      </div>

    </section>
  );
}