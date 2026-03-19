import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import id from '../locales/id.json'
import en from '../locales/en.json'

const locales = { id, en }
const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang')
    return saved || 'id'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  const toggleLang = () => {
    setLang(prev => prev === 'id' ? 'en' : 'id')
  }

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = locales[lang]
    for (const k of keys) {
      value = value?.[k]
    }
    return value !== undefined && value !== null ? value : key
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error('useLang must be used within LangProvider')
  return context
}
