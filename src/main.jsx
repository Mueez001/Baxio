import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import { ChatbotProvider } from './context/ChatbotContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatbotProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ChatbotProvider>
  </React.StrictMode>,
)
