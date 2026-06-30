from fastapi import APIRouter

from app.models.analysis import (
    AnalyzeRequest,
    ChatRequest,
)

from app.services.analysis_service import analyze_discussion
from app.services.chat_service import chat_with_discussion

router = APIRouter()


@router.post("/analyze")
def analyze(request: AnalyzeRequest):

    return analyze_discussion(request.discussion)


@router.post("/chat")
def chat(request: ChatRequest):

    return chat_with_discussion(
        request.discussion,
        request.question,
    )