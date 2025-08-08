from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import re

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

KEYWORDS = [
    "zk proofs", "computefi", "scalable zks", "proof of compute", "zkevms",
    "zkvm", "coprover", "zk supremacy", "verifiable compute", "@cysic_xyz"
]

TIER_LABELS = [
    (0, 20, "Still in Web2. Read a zk primer."),
    (21, 50, "ZK-intrigued. You follow from the shadows."),
    (51, 80, "Regular preacher. You're in the zk trenches."),
    (81, 99, "Cysic Devotee. The zk blood runs deep."),
    (100, 999, "You ARE the coprover. Touch grass.")
]

def fetch_latest_tweets(username):
    return [
        f"Check out zk proofs and computefi! @{username}",
        "I love scalable zks and zkevms",
        "zk supremacy is real",
        "Proof of compute is the future",
    ]

def calculate_score(tweets):
    score = 0
    for tweet in tweets:
        for keyword in KEYWORDS:
            if re.search(keyword, tweet, re.IGNORECASE):
                score += 5
        if "@cysic_xyz" in tweet:
            score += 10
        if "zk supremacy" in tweet.lower():
            score += 15
        if len(re.findall(r"(zk\w+)", tweet)) > 2:
            score += 5
    return min(score, 120)

def get_label(score):
    for low, high, label in TIER_LABELS:
        if low <= score <= high:
            return label
    return "You're beyond zk logic."

@app.get("/api/check")
def check_addiction(username: str):
    tweets = fetch_latest_tweets(username)
    score = calculate_score(tweets)
    label = get_label(score)
    return {"score": score, "label": label, "username": username}

