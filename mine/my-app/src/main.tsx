import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/practice/page.tsx'
import './index.css'
import "tailwindcss";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
