# Netflix GPT

Netflix GPT is an AI-powered movie recommendation application built with **React**, **TailwindCSS**, **Redux**, and **Firebase**. It integrates **TMDB API** and **OpenAI API** to provide smart movie suggestions based on user queries.

## 🚀 Features

### 🔐 Authentication
- **Login/Sign Up** (Firebase Authentication)
- **Form Validation**
- **Sign In / Sign Up Form**
- **Sign Out Functionality**
- **Update Profile**

### 🎬 Movie Browsing
- **Browse Movies** (After Authentication)
- **Now Playing Movies List** (Fetched from TMDB API)
- **Movie Details & Trailer** (Embedded YouTube Video Autoplay & Mute)
- **Dynamic Movie Lists** (Using TMDB API)

### 🤖 Netflix GPT (AI-Powered Search)
- **Search Bar** for Movie Suggestions
- **Gpt Search API Call**
- **TMDB Movie Suggestions Based on GPT Query**
- **Multi-language Support** (BONUS Feature)

### 🛠️ Additional Features
- **Redux Store** with userSlice and movieSlice
- **Custom Hooks** (Now Playing Movies, Popular Movies)
- **Environment Variables (.env support)**
- **Made the Website Fully Responsive**
- **Optimized Performance with Memoization**

---

## 🏗️ Project Setup

### 1️⃣ Prerequisites
Before running the project, create a **.env** file and add your API keys:
```plaintext
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key



2️⃣ Installation & Running Locally

# Clone the repository
git clone https://github.com/yourusername/netflix-gpt.git
cd netflix-gpt

# Install dependencies
yarn install  # or npm install

# Start the development server
yarn start  # or npm start


3️⃣ Deployment
yarn build  # or npm run build



📂 Project Structure
Netflix-GPT/
│── src/
│   ├── components/
│   ├── hooks/
│   ├── redux/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│── public/
│── .env
│── package.json
│── README.md




🛠️ Tech Stack
React (Frontend)

TailwindCSS (Styling)

Firebase (Authentication & Hosting)

TMDB API (Movie Database)

OpenAI API (AI-Powered Recommendations)

Redux (State Management)


🐞 Bug Fixes & Improvements
✅ Fixed Sign Up User Display Name & Profile Picture Update issue
✅ Redirected users to Login Page if not authenticated
✅ Unsubscribed onAuthStateChanged callback for better performance
✅ Hardcoded values moved to constants file for maintainability
✅ Optimized API Calls & Performance using memoization


🚀 Future Enhancements
Add Watchlist & Favorites functionality

Implement Dark Mode

Improve GPT Search Accuracy

Add Trending Movies Section
