import { useState } from "react";
import Button from "../ui/Button";

interface Props {
  onAnalyze: (discussion: string) => void;
}

export default function DiscussionInput({ onAnalyze }: Props) {
  const [discussion, setDiscussion] = useState("");

  return (
    <section className="glass rounded-[32px] p-8">

      <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
        DISCUSSION INPUT
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        Paste Reddit Discussion
      </h2>

      <p className="mt-3 max-w-3xl text-gray-400">
        Paste an entire Reddit thread including the post and comments.
        RedditPulse AI will analyze the discussion, identify community
        consensus, emotional tone and recurring advice.
      </p>

      <textarea
        value={discussion}
        onChange={(e) => setDiscussion(e.target.value)}
        placeholder="Paste the Reddit post and comments here..."
        className="mt-8 h-72 w-full rounded-3xl border border-white/10 bg-[#111111] p-6 outline-none placeholder:text-gray-600"
      />

      <div className="mt-6 flex justify-end">
        <Button onClick={() => onAnalyze(discussion)}>
          Analyze Community
        </Button>
      </div>

    </section>
  );
}