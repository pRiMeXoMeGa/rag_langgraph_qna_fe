import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ragApi } from '../../api/ragApi';

export const fetchDocuments = createAsyncThunk('rag/fetchDocuments', async () => {
  const response = await ragApi.listDocuments();
  return response.data.documents;
});

export const uploadDocument = createAsyncThunk('rag/uploadDocument', async (file) => {
  const response = await ragApi.uploadPdf(file);
  return response.data;
});

export const askQuestion = createAsyncThunk('rag/askQuestion', async ({ query, documentId }) => {
  const response = await ragApi.queryDocument(query, documentId);
  return response.data;
});

export const removeDocument = createAsyncThunk('rag/removeDocument', async (documentId) => {
  await ragApi.deleteDocument(documentId);
  return documentId;
});

const ragSlice = createSlice({
  name: 'rag',
  initialState: {
    documents: [],
    currentAnswer: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearAnswer: (state) => { state.currentAnswer = null; }
  },
  extraReducers: (builder) => {
    builder
      // List Documents
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        state.documents = action.payload;
      })
      // Upload
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.documents.push({
          document_id: action.payload.document_id,
          filename: action.payload.filename,
          uploaded_at: new Date().toISOString(),
          pages_count: action.payload.pages_count,
          chunks_count: action.payload.chunks_count
        });
      })
      // Query
      .addCase(askQuestion.pending, (state) => { state.loading = true; })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.currentAnswer = action.payload.answer;
      })
      // Delete
      .addCase(removeDocument.fulfilled, (state, action) => {
        state.documents = state.documents.filter(doc => doc.document_id !== action.payload);
      });
  },
});

export const { clearAnswer } = ragSlice.actions;
export default ragSlice.reducer;