# The MovieRec 🎬

Welcome to **The MovieRec** – a dynamic movie recommendation web app that allows users to search for movies, filter by genres, and explore exciting movie recommendations. Built using modern web technologies, this project integrates The Movie Database (TMDb) API to fetch real-time movie data.

---

## 🌟 Features
- 🔎 **Search Functionality** – Instantly search for movies by title.
- 🎭 **Genre Filtering** – Browse movies based on your preferred genre.
- 🎲 **Randomized Movie Recommendations** – Get a fresh selection of movies on each search.
- 🔄 **Dynamic Grid Layout** – Responsive and visually appealing movie display.
- 🛠 **React Router for Navigation** – Navigate seamlessly between different pages.

---

## 🛠 Tech Stack & Usage
The MovieRec is built using a powerful combination of modern web technologies:

### 1️⃣ **Frontend Technologies**
- **React.js** – Used to build a fast, modular, and reusable component-based UI.
- **Tailwind CSS** – For a sleek, responsive, and modern design.
- **Redux Toolkit** – Manages global state efficiently, storing user inputs and fetched movies.
- **React Router** – Enables smooth page navigation between the Home and About pages.

### 2️⃣ **Backend & APIs**
- **TMDb API** – Fetches movie data dynamically based on user search queries and genre selection.
- **.env Variables** – API keys are securely stored in an `.env` file and imported via `API.js`.

### 3️⃣ **Build & Deployment**
- **Vite** – A fast development environment for React.
- **Git & GitHub** – Version control and collaboration.
- **Vercel** – Deployed for seamless hosting with automatic updates from GitHub.

---

## 🔄 Workflow Example
Here’s how the app works:

1. **User enters a movie name** in the search bar or selects a genre.
2. **Redux stores the search query or selected genre** in the global state.
3. **An API request is made to TMDb** with the given input.
4. **The response is stored and displayed dynamically** in a visually appealing movie grid.
5. **User can navigate between pages** using React Router (Home & About).

---

## 🌍 Live Demo
🚀 Check out the live site here: [The MovieRec](https://the-movierec.vercel.app/)

---

## 📥 How to Clone and Run Locally
Follow these steps to set up the project on your machine:

1️⃣ **Clone the Repository**
```sh
  git clone https://github.com/Shailesh-Singh-Bisht/The-MovieRec.git
  cd The-MovieRec
```

2️⃣ **Install Dependencies**
```sh
  npm install
```

3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root folder and add:
```sh
  VITE_API_KEY=your_tmdb_api_key
  VITE_AUTH_KEY=your_tmdb_auth_key
```

4️⃣ **Run the Development Server**
```sh
  npm run dev
```

5️⃣ **Build for Production** (Optional)
```sh
  npm run build
```

---

## 👋 Goodbye & Happy Coding!
Thank you for checking out **The MovieRec**! If you have any feedback or want to contribute, feel free to fork the repo or reach out. 🚀🎬

Made with ❤️ by **Shailesh Singh Bisht**

