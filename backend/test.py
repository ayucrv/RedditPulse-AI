import requests

url = "http://127.0.0.1:8000/analyze"

discussion = """
I build automations and AI agents for companies.

A guy running a supplements brand came to me.

He wanted AI.

I built automation instead.
"""

response = requests.post(
    url,
    json={
        "discussion": discussion
    }
)

print(response.status_code)
print(response.json())