from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from nltk.tokenize import sent_tokenize

analyzer = SentimentIntensityAnalyzer()


def analyze_sentiment(text: str):

    sentences = sent_tokenize(text)

    positive = 0
    neutral = 0
    negative = 0

    compound_scores = []

    for sentence in sentences:

        score = analyzer.polarity_scores(sentence)

        compound_scores.append(score["compound"])

        if score["compound"] >= 0.05:
            positive += 1

        elif score["compound"] <= -0.05:
            negative += 1

        else:
            neutral += 1

    total = max(len(sentences), 1)

    return {

        "positive": round((positive / total) * 100),

        "neutral": round((neutral / total) * 100),

        "negative": round((negative / total) * 100),

        "compound": round(
            sum(compound_scores) / total,
            3,
        )

    }