import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between py-8 md:py-10 px-5 md:px-20 gap-6 dark:bg-[#0F172A] bg-[#EEF2FF] dark:border-t dark:border-t-[#6366F126] border-t border-t-[#C7D2FE]">
      {/* Left */}
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded-md shrink-0 w-6 h-6"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
            }}
          >
            <span className="text-white font-display font-bold text-[11px] leading-3.5">
              SF
            </span>
          </div>
          <span className="tracking-[-0.3px] font-display font-bold text-sm leading-4.5 dark:text-[#E2E8F0] text-[#0F172A]">
            Septiano Ferdiansyah
          </span>
        </div>
        <span className="font-body text-[13px] leading-4 dark:text-[#64748B] text-[#94A3B8]">
          {t('footer.copyright')}
        </span>
      </div>

      {/* Right Nav */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body font-medium text-sm leading-4.5 dark:text-[#94A3B8] text-[#64748B] hover:dark:text-[#F1F5F9] hover:text-[#0F172A] transition-colors duration-200 no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
