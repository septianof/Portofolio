import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import SectionLabel from './ui/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const LinkedInIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="1.8" />
  </svg>
)

const GitHubIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

export default function ContactSection() {
  const { t } = useLang()
  const { theme } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.15)

  const contacts = [
    {
      icon: <EmailIcon />,
      label: t('contact.email'),
      value: t('contact.emailValue'),
      href: `mailto:${t('contact.emailValue')}`,
      style: 'primary',
    },
    {
      icon: <LinkedInIcon color={theme === 'dark' ? '#3B82F6' : '#2563EB'} />,
      label: t('contact.linkedin'),
      value: t('contact.linkedinValue'),
      href: t('contact.linkedinLink'),
      style: 'linkedin',
    },
    {
      icon: <GitHubIcon color={theme === 'dark' ? '#E2E8F0' : '#374151'} />,
      label: t('contact.github'),
      value: t('contact.githubValue'),
      href: t('contact.githubLink'),
      style: 'github',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full flex flex-col items-center py-16 md:py-25 px-5 md:px-20 gap-12 md:gap-15"
      style={{
        backgroundImage:
          theme === 'dark'
            ? 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)'
            : 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      }}
    >
      {/* Header */}
      <div className={`flex flex-col items-center max-w-[700px] gap-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionLabel text={t('contact.label')} />
        <h2 className="tracking-[-1px] font-display font-bold text-[32px] md:text-[44px] leading-tight dark:text-[#F1F5F9] text-[#0F172A] m-0">
          {t('contact.title')}
        </h2>
        <p className="text-base md:text-lg leading-[1.7] font-body dark:text-[#94A3B8] text-[#64748B] m-0">
          {t('contact.subtitle')}
        </p>
      </div>

      {/* Contact Cards */}
      <div className={`flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-5xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {contacts.map((contact) => {
          let cardStyles = {}
          let labelColor = ''
          let valueColor = ''

          if (contact.style === 'primary') {
            cardStyles = {
              backgroundImage: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
              boxShadow: '0px 8px 32px #6366F159',
            }
            labelColor = '#FFFFFFB3'
            valueColor = '#FFFFFF'
          } else if (contact.style === 'linkedin') {
            cardStyles = {
              backgroundColor: theme === 'dark' ? '#0A66C226' : '#EFF6FF',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: theme === 'dark' ? '#0A66C266' : '#BFDBFE',
            }
            labelColor = theme === 'dark' ? '#FFFFFF66' : '#64748B'
            valueColor = theme === 'dark' ? '#60A5FA' : '#2563EB'
          } else {
            cardStyles = {
              backgroundColor: theme === 'dark' ? '#FFFFFF0D' : '#F8FAFC',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: theme === 'dark' ? '#FFFFFF1F' : '#E2E8F0',
            }
            labelColor = theme === 'dark' ? '#FFFFFF66' : '#64748B'
            valueColor = theme === 'dark' ? '#E2E8F0' : '#374151'
          }

          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[14px] py-4.5 px-6 gap-3.5 transition-transform duration-200 hover:scale-[1.02] no-underline cursor-pointer"
              style={cardStyles}
            >
              <div className="shrink-0">
                {contact.icon}
              </div>
              <div className="flex flex-col gap-0.5 overflow-hidden text-left">
                <span
                  className="uppercase tracking-[0.5px] font-body font-medium text-[11px] leading-3.5 truncate"
                  style={{ color: labelColor }}
                >
                  {contact.label}
                </span>
                <span
                  className="font-body font-semibold text-[15px] leading-5 truncate"
                  style={{ color: valueColor }}
                >
                  {contact.value}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
