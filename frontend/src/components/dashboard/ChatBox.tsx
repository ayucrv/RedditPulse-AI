import { useState } from "react";
import Button from "../ui/Button";

interface Props {
    discussion: string;
}

export default function ChatBox({ discussion }: Props) {

  const [question, setQuestion] = useState("");

  return (
    <section className="glass mt-10 rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        ASK REDDITPULSE AI
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Ask Follow-up Questions
      </h2>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Example: Why did most users disagree?"
        className="mt-8 h-36 w-full rounded-3xl border border-white/10 bg-[#111111] p-5 outline-none"
      />

      <div className="mt-6 flex justify-end">

        <Button>
          Ask AI
        </Button>

      </div>

    </section>
  );
}