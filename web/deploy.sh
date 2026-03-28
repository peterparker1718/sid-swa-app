#!/bin/bash
# Deploy SID Capital Bridge to Firebase Hosting
set -euo pipefail

PROJECT_ID="${1:-$(gcloud config get-value project)}"

echo "🚀 Building SID Capital Bridge..."
npm ci
npm run build

echo "📦 Deploying to Firebase Hosting..."
if [ ! -f firebase.json ]; then
  cat > firebase.json << 'EOF'
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
EOF
fi

npx firebase-tools deploy --only hosting --project "${PROJECT_ID}"

echo "✅ SID app deployed!"
