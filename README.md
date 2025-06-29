 ABA Data Collector

A full-stack React + AWS Amplify app to track ABA clients, their goals, and data points.

✨ Features

🔐 Authentication with Amazon Cognito

⚛️ GraphQL API via AppSync + Amplify

✨ React Frontend using Vite + TypeScript

📆 Models: Client, Goal, DataPoint

☑️ Auth-protected UI with withAuthenticator

☁️ Deployed backend via AWS Amplify

🚀 Version control with GitHub

📊 Tech Stack

Frontend: React + Vite + TypeScript

Backend: AWS Amplify (Gen 1)

Auth: Amazon Cognito

API: AppSync (GraphQL)

Version Control: Git + GitHub

⚡ Project Setup (Quick)

# From project root
npm install
cd frontend/frontend
npm run dev

📂 Key Structure

frontend/frontend/         # React + Vite project
frontend/frontend/src/graphql  # Auto-gen queries/mutations
frontend/frontend/src/aws-exports.js  # Amplify config
amplify/                   # Amplify backend setup

❌ Common Issues & Fixes

Issue

Fix

Blank screen

Needed valid Cognito user login

API 401 errors

Auth not configured or user not logged in

amplify_outputs.json not found

Use aws-exports.js instead

npm start failed

Use npm run dev for Vite

Git push rejected

Run git pull --rebase first

💡 Lessons Learned

Stick with Amplify Gen 1 unless you're ready for advanced setup

Always check Cognito login for GraphQL API access

Make sure AWS config (aws-exports.js) is wired up

Push early and often to GitHub

🎓 Author

Colin D | @Cduff1174

