import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainRouter from './App.jsx'; // Import the RouterProvider from App.jsx
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>,
);
