import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="py-44">

      <div className="mx-auto max-w-5xl text-center">

        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-orange-500">
          READY TO START?
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Understand Reddit
          <span className="gradient-text">
            {" "}Like Never Before
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Paste an entire Reddit discussion and let RedditPulse AI uncover
          community consensus, emotional tone, recurring advice, key insights,
          and constructive takeaways—all in one beautiful dashboard.
        </p>

        <div className="mt-14">

          <Link to="/dashboard">
            <Button>
              Enter Dashboard →
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}