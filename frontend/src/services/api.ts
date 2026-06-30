const API_URL = "https://acyy49-redditpulse-ai.hf.space"

export async function analyzeDiscussion(discussion: string) {
  const response = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      discussion,
    }),
  });

  if (!response.ok) {
    throw new Error("Analysis failed");
  }

  return response.json();
}