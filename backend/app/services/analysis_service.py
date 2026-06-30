from app.models.analysis import (
    AnalysisResponse,
    Sentiment,
    Emotion,
    Advice,
    Keyword,
)

from app.services.preprocess import preprocess_text
from app.services.sentiment_service import analyze_sentiment
from app.services.gemini_service import analyze_with_gemini


def analyze_discussion(discussion: str) -> AnalysisResponse:

    # ----------------------------
    # Clean text
    # ----------------------------

    clean_text = preprocess_text(discussion)

    # ----------------------------
    # VADER Sentiment
    # ----------------------------

    sentiment_result = analyze_sentiment(clean_text)

    # ----------------------------
    # Gemini Analysis
    # ----------------------------

    gemini = analyze_with_gemini(discussion)

    # ----------------------------
    # Return
    # ----------------------------

    return AnalysisResponse(

        summary=gemini["summary"],

        community_pulse=gemini["community_pulse"],

        community_consensus=gemini["consensus"],

        sentiment=Sentiment(
            positive=sentiment_result["positive"],
            neutral=sentiment_result["neutral"],
            negative=sentiment_result["negative"],
        ),

        emotions=Emotion(
            supportive=gemini["emotions"]["supportive"],
            harsh=gemini["emotions"]["harsh"],
            hopeful=gemini["emotions"]["hopeful"],
            sarcastic=gemini["emotions"]["sarcastic"],
            frustrated=gemini["emotions"]["frustrated"],
        ),

        advice=[
            Advice(
                text=item["text"],
                frequency=item["frequency"],
            )
            for item in gemini["advice"]
        ],

        keywords=[
            Keyword(
                word=item["word"],
                count=item["count"],
            )
            for item in gemini["keywords"]
        ],

        highlights=gemini["highlights"],

        red_flags=gemini["red_flags"],

        constructive_takeaway=gemini["constructive_takeaway"],
    )