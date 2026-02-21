// src/api/ragApi.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mohdaqib147-rag-agent-document-qna.hf.space', // Update with your actual backend URL
});

export const ragApi = {
    checkHealth: () => api.get('/health'),
    
    uploadPdf: (file) => {
        const formData = new FormData();
        formData.append('file', file);
        return api.post('/upload', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
    
    queryDocument: (query, documentId) =>
        api.post('/query', { query, document_id: documentId }),
    
    listDocuments: () => api.get('/documents'),
    
    deleteDocument: (documentId) => api.delete(`/documents/${documentId}`),
};