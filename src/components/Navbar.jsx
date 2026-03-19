import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3v1m0 16v1M4.22 4.22l.71.71m12.02 12.02.71.71M1 12h2m18 0h2M4.22 19.78l.71-.71M18.95 5.05l.71-.71M12 7a5 5 0 100 10 5 5 0 000-10z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Navbar() {
  const { lang, toggleLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-5 md:px-10 lg:px-20 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0F172AF2] bg-[#FFFFFFEB] backdrop-blur-[12px] dark:border-b dark:border-b-[#6366F133] border-b border-b-[#E2E8F0]'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2 cursor-pointer no-underline group">
        <div
          className="flex items-center justify-center rounded-lg shrink-0 w-9 h-9 transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage:
              'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
          }}
        >
          <span className="text-white font-display font-bold text-base leading-5">
            SF
          </span>
        </div>
        <span className="tracking-[-0.3px] font-display font-bold text-lg leading-5.5 dark:text-[#F1F5F9] text-[#0F172A]">
          Septiano
        </span>
      </a>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-5 lg:gap-9">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="tracking-[0.3px] font-body font-medium text-sm leading-4.5 dark:text-[#94A3B8] text-[#64748B] hover:dark:text-[#F1F5F9] hover:text-[#0F172A] transition-colors duration-200 no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Language Toggle */}
        <div className="relative flex items-center rounded-3xl p-1 dark:bg-[#6366F126] bg-[#6366F10F] border border-solid dark:border-[#6366F14D] border-[#C7D2FE] w-[90px] h-[34px]">
          {/* Slider Background */}
          <div
            className="absolute top-1 bottom-1 left-1 w-10 rounded-2xl bg-[#6366F1] transition-transform duration-300 ease-out"
            style={{
              transform: lang === 'id' ? 'translateX(0)' : 'translateX(40px)',
            }}
          />
          <button
            onClick={() => lang !== 'id' && toggleLang()}
            className={`relative z-10 w-10 h-full flex items-center justify-center text-sm leading-5 font-medium transition-colors duration-300 cursor-pointer border-none bg-transparent outline-none ${
              lang === 'id' ? 'text-white' : 'dark:text-[#94A3B8] text-[#64748B] hover:text-[#0F172A] dark:hover:text-[#F1F5F9]'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => lang !== 'en' && toggleLang()}
            className={`relative z-10 w-10 h-full flex items-center justify-center text-sm leading-5 font-medium transition-colors duration-300 cursor-pointer border-none bg-transparent outline-none ${
              lang === 'en' ? 'text-white' : 'dark:text-[#94A3B8] text-[#64748B] hover:text-[#0F172A] dark:hover:text-[#F1F5F9]'
            }`}
          >
            EN
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center rounded-[10px] dark:bg-[#6366F126] bg-[#6366F10F] border border-solid dark:border-[#6366F14D] border-[#C7D2FE] shrink-0 w-10 h-10 dark:text-[#94A3B8] text-[#64748B] hover:dark:text-[#F1F5F9] hover:text-[#0F172A] transition-colors duration-200 cursor-pointer"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center rounded-[10px] dark:bg-[#6366F126] bg-[#6366F10F] border border-solid dark:border-[#6366F14D] border-[#C7D2FE] w-10 h-10 dark:text-[#94A3B8] text-[#64748B] cursor-pointer"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 dark:bg-[#0F172AF2] bg-[#FFFFFFEB] backdrop-blur-[12px] border-b dark:border-b-[#6366F133] border-b-[#E2E8F0] md:hidden flex flex-col py-4 px-5 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body font-medium text-base py-3 px-4 rounded-lg dark:text-[#94A3B8] text-[#64748B] hover:dark:text-[#F1F5F9] hover:text-[#0F172A] hover:dark:bg-[#6366F11A] hover:bg-[#6366F10A] transition-all duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
