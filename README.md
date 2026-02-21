# 🤖 Agentic RAG: Document Intelligence Platform - Frontend

A production-ready React frontend for a GenAI document intelligence platform that transforms static PDF documents into interactive Q&A experiences.

**🌐 Deployed App:** https://raglanggraphfe.netlify.app/

---

## 🎯 The Problem

Enterprise professionals often struggle to extract specific, grounded insights from lengthy technical documents. The resulting intelligence requires:

1. **Real-time Query Processing:** Submit complex questions and get instant responses.
2. **Hallucination-Free Answers:** Display reasoning backed by source document chunks.
3. **Seamless User Experience:** Intuitive UI that handles async operations gracefully.

**The Frontend Solution:** A React-based dashboard that provides clean document upload, intelligent Q&A, and source attribution through a Redux-managed state machine.

---

## 🛠️ Tech Stack

| Layer                  | Technology                                |
| :--------------------- | :---------------------------------------- |
| **Framework**          | React 19 + Vite                           |
| **State Management**   | Redux Toolkit with Async Thunks           |
| **Styling**            | Tailwind CSS v4 + @tailwindcss/typography |
| **HTTP Client**        | Axios                                     |
| **Markdown Rendering** | react-markdown                            |
| **Linting**            | ESLint                                    |

---

## 📂 Project Structure

```
rag_langgraph_qna_fe/
├── src/
│   ├── api/
│   │   └── ragApi.js              # Axios instance & API calls
│   ├── components/
│   │   └── RagDashboard.jsx       # Main dashboard component
│   ├── redux/
│   │   ├── store.js               # Redux store configuration
│   │   └── slices/
│   │       └── ragSlice.js        # RAG state slice with thunks
│   ├── assets/                    # Images and static files
│   ├── App.jsx                    # Root component
│   ├── App.css                    # Global styles
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global CSS
├── public/                        # Static files
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── eslint.config.js               # ESLint configuration
└── README.md                      # This file
```

---

## 🚀 Local Setup

### Prerequisites

- Node.js 18+

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`.


## 🧩 Key Features

### 📄 Document Upload

- Click-to-upload PDF interface
- Real-time upload progress indicator
- Error handling with user-friendly messages

### 💬 Intelligent Q&A

- Submit natural language questions
- Receive AI-powered answers grounded in uploaded documents
- View source document chunks supporting each answer

### 📊 Redux State Management

- **`uploadDocument`**: Async thunk for uploading PDFs
- **`askQuestion`**: Async thunk for submitting queries
- **Loading States**: Managed at the Redux store level
- **Error Handling**: Centralized error management with UI feedback

### 🎨 Responsive UI

- Tailwind CSS v4 for modern, responsive design
- Markdown rendering for rich text responses
- Loading spinners and error boundaries

---

## 🔌 API Integration

The frontend communicates with a backend RAG API via Axios. Key integration points:

## 📈 Future Enhancements

- **Persistent Storage:** Browser storage for chat history
- **Light/Dark Mode:** Theme toggle support
- **Advanced Filters:** Document filtering and search
- **Export Functionality:** Save conversations as PDF
- **Multi-language Support:** Localization for global users

---

**Frontend Repository:** https://github.com/pRiMeXoMeGa/rag_langgraph_qna_fe

**Author:** Mohd Aqib – Full-Stack Engineer
