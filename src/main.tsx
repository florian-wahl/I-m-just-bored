import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import LoadingScreen from './LoadingScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen>
      <App />
    </LoadingScreen>
  </StrictMode>,
)
