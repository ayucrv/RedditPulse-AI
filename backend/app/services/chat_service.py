import os

import google.generativeai as genai

from dotenv import load_dotenv

from app.models.analysis import ChatResponse
from app.prompts.chat_prompt import CHAT_PROMPT

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def chat_with_discussion(
    discussion: str,
    question: str,
):

    prompt = f"""
{CHAT_PROMPT}

Discussion:

{discussion}

Question:

{question}
"""

    try:

        response = model.generate_content(prompt)

        return ChatResponse(
            answer=response.text.strip()
        )

    except Exception:

        return ChatResponse(
            answer="Unable to answer the question."
        )