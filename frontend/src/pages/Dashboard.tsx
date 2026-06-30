import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import DiscussionInput from "../components/dashboard/DiscussionInput";
import CommunityPulse from "../components/dashboard/CommunityPulse";
import AISummary from "../components/dashboard/AISummary";
import MetricCards from "../components/dashboard/MetricCards";
import Consensus from "../components/dashboard/Consensus";
import AdviceCards from "../components/dashboard/AdviceCards";
import TrendingKeywords from "../components/dashboard/TrendingKeywords";
import RedFlags from "../components/dashboard/RedFlags";
import Highlights from "../components/dashboard/Highlights";
import Takeaway from "../components/dashboard/Takeaway";
import ChatBox from "../components/dashboard/ChatBox";

import { analyzeDiscussion } from "../services/api";

export default function Dashboard() {
  const [analysis, setAnalysis] = useState<any>(null);
  const [discussion, setDiscussion] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (text: string) => {
    if (!text.trim()) return;

    setDiscussion(text);
    setLoading(true);
    setError("");

    try {
      const result = await analyzeDiscussion(text);

      console.log(result);

      setAnalysis(result);
    } catch (err) {
      console.error(err);
      setError("Unable to analyze discussion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 transition hover:text-orange-500"
          >
            <ArrowLeft size={18} />
            Home
          </Link>

          <div className="text-center">

            <p className="text-xs uppercase tracking-[0.35em] text-orange-500">
              RedditPulse AI
            </p>

            <h1 className="mt-1 text-2xl font-bold">
              Community Intelligence Workspace
            </h1>

          </div>

          <div className="text-right">

            <p className="text-sm text-gray-500">
              AI Powered
            </p>

            <p className="font-medium text-orange-500">
              Discussion Analysis
            </p>

          </div>

        </div>

      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12">

        {/* Input */}

        <DiscussionInput onAnalyze={handleAnalyze} />

        {/* Loading */}

        {loading && (

          <div className="glass rounded-[32px] p-10 text-center">

            <h2 className="text-3xl font-bold">
              Analyzing Discussion...
            </h2>

            <p className="mt-4 text-gray-400">
              RedditPulse AI is understanding the discussion...
            </p>

          </div>

        )}

        {/* Error */}

        {error && (

          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-red-400">

            {error}

          </div>

        )}

        {/* Results */}

        {analysis && (

          <>

            <CommunityPulse
              pulse={analysis.community_pulse}
            />

            <AISummary
              summary={analysis.summary}
            />

            <MetricCards
              sentiment={analysis.sentiment}
            />

            <Consensus
              consensus={analysis.community_consensus}
            />

            <div className="grid gap-8 lg:grid-cols-2">

              <AdviceCards
                advice={analysis.advice}
              />

              <TrendingKeywords
                keywords={analysis.keywords}
              />

            </div>

            <div className="grid gap-8 lg:grid-cols-2">

              <RedFlags
                flags={analysis.red_flags}
              />

              <Highlights
                highlights={analysis.highlights}
              />

            </div>

            <Takeaway
              takeaway={analysis.constructive_takeaway}
            />

            <ChatBox
              discussion={discussion}
            />

          </>

        )}

      </section>

    </main>
  );
}