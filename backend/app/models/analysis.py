from pydantic import BaseModel, Field


class AnalyzeRequest(BaseModel):
    discussion: str = Field(
        ...,
        min_length=50,
        max_length=120000
    )


class ChatRequest(BaseModel):
    discussion: str
    question: str


class Sentiment(BaseModel):
    positive: int
    neutral: int
    negative: int


class Emotion(BaseModel):
    supportive: float
    harsh: float
    hopeful: float
    sarcastic: float
    frustrated: float


class Advice(BaseModel):
    text: str
    frequency: int


class Keyword(BaseModel):
    word: str
    count: int


class AnalysisResponse(BaseModel):

    summary: str

    community_pulse: str

    community_consensus: str

    sentiment: Sentiment

    emotions: Emotion

    advice: list[Advice]

    keywords: list[Keyword]

    highlights: list[str]

    red_flags: list[str]

    constructive_takeaway: str


class ChatResponse(BaseModel):
    answer: str