# Novel AI

Novel AI is a modern web application for AI detection and plagiarism checking. It leverages advanced AI models and the Winston API to help users verify the originality of their content.

## Features
- **Landing Page** with modern UI
- **AI Detection & Plagiarism Checking** page (integrated with Winston API)
- **Authentication** using Clerk (Sign Up / Login)
- **Responsive Navbar** with navigation and user account
- **Pricing Section** with plan details
- **Contact & Social Links** in the footer

## Tech Stack
- React (frontend)
- Express (backend proxy for Winston API)
- Clerk (authentication)
- Winston AI API (AI detection & plagiarism)

## Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Clone the repository
```
git clone <your-repo-url>
cd Project 78/novel-ai
```

### 2. Install dependencies
```
npm install
```

### 3. Start the backend proxy server
```
node server.js
```
This will run the proxy on [http://localhost:5001](http://localhost:5001)

### 4. Start the React development server
```
npm start
```
This will run the app on [http://localhost:3000](http://localhost:3000)

## Usage
- Visit the landing page at [http://localhost:3000](http://localhost:3000)
- Use the "Get Started" button or the navbar to access the AI Detection & Plagiarism Checking page
- Paste your text (minimum 300 characters) and check for AI-generated content
- Sign up or log in using Clerk authentication

## Environment Variables
- Clerk and Winston API keys are hardcoded for demo purposes. For production, use environment variables.

## License
MIT 