import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  uploadDocument,
  removeDocument,
  askQuestion,
} from "../redux/slices/ragSlice";
import ReactMarkdown from 'react-markdown';

const RagDashboard = () => {
  const dispatch = useDispatch();
  const { documents, currentAnswer, loading } = useSelector(
    (state) => state.rag,
  );
  const [selectedDoc, setSelectedDoc] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      dispatch(uploadDocument(e.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          RAG Langgraph Manager
        </h1>
        <p className="text-slate-400">Upload PDFs and query them with AI.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">
              Upload PDF
            </h2>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-600 rounded-lg cursor-pointer hover:bg-slate-700 transition">
              <span className="text-sm text-slate-400">
                Click to upload file
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleUpload}
                accept=".pdf"
              />
            </label>
          </section>

          <section className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-semibold mb-4 text-emerald-300">
              Query Assistant
            </h2>
            <select
              className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2 mb-4 focus:ring-2 focus:ring-emerald-500 outline-none"
              onChange={(e) => setSelectedDoc(e.target.value)}
              value={selectedDoc}
            >
              <option value="">Select a Document</option>
              {documents.map((doc) => (
                <option key={doc.document_id} value={doc.document_id}>
                  {doc.filename}
                </option>
              ))}
            </select>
            <textarea
              className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 h-24 mb-4 resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Ask a question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              disabled={loading || !selectedDoc || !query}
              onClick={() =>
                dispatch(askQuestion({ query, documentId: selectedDoc }))
              }
              className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 text-white font-bold py-2 rounded-lg transition"
            >
              {loading ? "Processing..." : "Ask AI"}
            </button>
          </section>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <section className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="p-4 font-semibold text-slate-300">
                      Filename
                    </th>
                    <th className="p-4 font-semibold text-slate-300">Pages</th>
                    <th className="p-4 font-semibold text-slate-300 text-right">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr
                      key={doc.document_id}
                      className="border-t border-slate-700 hover:bg-slate-700/30 transition"
                    >
                      <td className="p-4 max-w-xs truncate">{doc.filename}</td>
                      <td className="p-4 text-slate-400">{doc.pages_count}</td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() =>
                            dispatch(removeDocument(doc.document_id))
                          }
                          className="text-red-400 hover:text-red-300 font-medium text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {documents.length === 0 && (
                    <tr>
                      <td
                        colSpan="3"
                        className="p-10 text-center text-slate-500"
                      >
                        No documents found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {currentAnswer && (
            <section className="bg-slate-800 p-6 rounded-2xl border border-blue-500/30 shadow-lg">
              <h2 className="text-lg font-semibold mb-4 text-blue-300 border-b border-slate-700 pb-2">
                AI Analysis
              </h2>

              <div className="prose prose-invert prose-blue max-w-none">
                <ReactMarkdown>{currentAnswer}</ReactMarkdown>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default RagDashboard;
