# 🤖 RAG LangGraph Q&A Platform - Frontend

A high-performance frontend for a Retrieval-Augmented Generation (RAG) application. This platform leverages **LangGraph** for agentic workflows and **React/Redux** for a seamless, real-time user experience.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation--setup)
- [Project Structure](#-project-structure)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [API Integration](#-api-integration)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🚀 Features

- **PDF Document Upload:** Upload and process PDF documents into searchable vector embeddings
- **Intelligent Q&A:** Ask complex questions about your documents with AI-powered responses
- **Agentic Reasoning:** Powered by LangGraph to handle multi-step retrieval and reasoning
- **Modern UI:** Built with **React 19**, **Vite**, and **Tailwind CSS v4**
- **Real-time State Management:** Redux Toolkit with Async Thunks for efficient side effects
- **Rich Text Responses:** AI answers rendered with Markdown formatting and professional typography
- **Responsive Design:** Works seamlessly across desktop and mobile devices
- **Production Ready:** Optimized performance with Vite's fast build system

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 19 + Vite
- **State Management:** Redux Toolkit with Async Thunks
- **Styling:** Tailwind CSS v4 + @tailwindcss/typography
- **HTTP Client:** Axios
- **Markdown Rendering:** react-markdown
- **Build Tool:** Vite with ESBuild
- **Linting:** ESLint

### Backend (Separate Repository)

- **Framework:** FastAPI
- **Orchestration:** LangGraph
- **Vector Database:** ChromaDB or PGVector
- **LLM Integration:** OpenAI / Anthropic via LangChain
- **Embeddings:** OpenAI Embeddings or Open-source alternatives

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm 9+
- Backend API running locally or accessible via network

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/rag-langgraph-fe.git
cd rag-langgraph-fe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8000
VITE_API_TIMEOUT=30000
```

### 4. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or the next available port).

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

---

## 📂 Project Structure

```
rag_langgraph_qna_fe/
├── src/
│   ├── api/
│   │   └── ragApi.js              # Axios instance and API calls
│   ├── components/
│   │   └── RagDashboard.jsx       # Main dashboard component
│   ├── redux/
│   │   ├── store.js               # Redux store configuration
│   │   └── slices/
│   │       └── ragSlice.js        # RAG state slice with thunks
│   ├── assets/                    # Images, icons, and other assets
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Root styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── public/                        # Static files
├── index.html                     # HTML template
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
├── eslint.config.js               # ESLint configuration
└── README.md                      # This file
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local` in the project root:

| Variable            | Description              | Default                 |
| ------------------- | ------------------------ | ----------------------- |
| `VITE_API_BASE_URL` | Backend API base URL     | `http://localhost:8000` |
| `VITE_API_TIMEOUT`  | API request timeout (ms) | `30000`                 |

### Tailwind CSS

Tailwind is configured in `tailwind.config.js`. Customize theme colors, spacing, or typography as needed.

### Vite Configuration

Vite settings are in `vite.config.js`, including React plugin setup and build optimization.

---

## 💻 Usage

### Starting the Application

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 🔌 API Integration

The frontend communicates with a backend RAG API.

### Key API Endpoints

| Method   | Endpoint                  | Description                         |
| -------- | ------------------------- | ----------------------------------- |
| `POST`   | `/api/documents/upload`   | Upload PDF documents                |
| `POST`   | `/api/query/ask-question` | Submit a question to the RAG system |
| `GET`    | `/api/documents`          | List uploaded documents             |
| `DELETE` | `/api/documents/{id}`     | Delete a document                   |

### Making API Calls

The `src/api/ragApi.js` file contains the Axios instance configured for your backend:

```javascript
import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});

export default apiClient;
```

Use Redux Thunks in `ragSlice.js` for async operations:

```javascript
export const uploadDocument = createAsyncThunk(
  "rag/uploadDocument",
  async (formData) => {
    const response = await apiClient.post("/api/documents/upload", formData);
    return response.data;
  },
);
```

---

## 🔧 Development

### Project Commands

```bash
# Install dependencies
npm install

# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint --fix
```

### Adding New Components

1. Create new component in `src/components/`
2. Use functional components with hooks
3. Connect to Redux for state management when needed

### State Management with Redux

Redux slices are in `src/redux/slices/`. Add new slices for different features:

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "featureName/fetchData",
  async (params) => {
    // API call here
  },
);

const featureSlice = createSlice({
  name: "featureName",
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    // Handle fulfilled and rejected cases
  },
});

export default featureSlice.reducer;
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

### Code Style

- Use ES6+ syntax
- Follow ESLint configuration
- Write functional components with hooks
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License. See LICENSE file for details.

---

## 📞 Support

For issues, questions, or feedback:

- Open an issue on GitHub
- Contact the development team

---

## 🗺️ Roadmap

- [ ] Document chat history persistence
- [ ] Advanced filtering and search
- [ ] Export conversation as PDF
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Analytics dashboard

---

## 🎯 Quick Start Guide

1. Clone the repo and navigate to the directory
2. Run `npm install`
3. Create `.env.local` with your backend URL
4. Run `npm run dev`
5. Open `http://localhost:5173` in your browser
6. Start uploading documents and asking questions!
