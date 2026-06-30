import json
import os

import google.generativeai as genai

from dotenv import load_dotenv

from app.prompts.analysis_prompt import SYSTEM_PROMPT

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel("gemini-2.5-flash")


def analyze_with_gemini(discussion: str):

    prompt = f"""
{SYSTEM_PROMPT}

Discussion:

{discussion}
"""

    try:

        response = model.generate_content(prompt)

        text = response.text.strip()

        if text.startswith("```json"):
            text = text.replace("```json", "", 1)

        if text.endswith("```"):
            text = text[:-3]

        text = text.strip()

        return json.loads(text)

    except Exception as e:

        print("Gemini Error:", e)

        raise e