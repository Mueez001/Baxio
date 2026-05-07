import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'baxio_chatbot_docs_v1'

const ChatbotContext = createContext(null)

function readStoredEntries() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function ChatbotProvider({ children }) {
  const [entries, setEntries] = useState(() => readStoredEntries())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const value = useMemo(
    () => ({
      entries,
      addEntry(entry) {
        setEntries((prev) => [entry, ...prev])
      },
      updateEntry(id, updates) {
        setEntries((prev) =>
          prev.map((entry) => (entry.id === id ? { ...entry, ...updates } : entry)),
        )
      },
      clearEntries() {
        setEntries([])
      },
    }),
    [entries],
  )

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
}

export function useChatbot() {
  const ctx = useContext(ChatbotContext)
  if (!ctx) {
    throw new Error('useChatbot must be used within ChatbotProvider')
  }
  return ctx
}
