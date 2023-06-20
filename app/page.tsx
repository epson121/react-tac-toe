'use client';


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './globals.css';

import App from './App';


export default function Tic() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
 );
}

