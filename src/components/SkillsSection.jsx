import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import SectionLabel from './ui/SectionLabel'
import TechBadge from './ui/TechBadge'
import useScrollReveal from '../hooks/useScrollReveal'

const categoryConfig = {
  backend: {
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    borderColor: '#6366F140',
    iconBg: '#6366F126',
    iconBorder: '#6366F14D',
    iconColor: '#6366F1',
    badgeColors: ['indigo', 'cyan', 'amber'],
  },
  frontend: {
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 4l4 8-4 8M20 4l-4 8 4 8M9 4h6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    borderColor: '#06B6D440',
    iconBg: '#06B6D41F',
    iconBorder: '#06B6D44D',
    iconColor: '#06B6D4',
    badgeColors: ['cyan', 'cyan'],
  },
  mobile: {
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke={color} strokeWidth="1.8" />
        <circle cx="12" cy="18" r="1" fill={color} />
      </svg>
    ),
    borderColor: '#A855F740',
    iconBg: '#A855F71F',
    iconBorder: '#A855F74D',
    iconColor: '#A855F7',
    badgeColors: ['purple', 'purple'],
  },
  other: {
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.22-6.78-1.42 1.42M5.64 18.36l-1.42 1.42M18.36 18.36l-1.42-1.42M5.64 5.64 4.22 4.22" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    borderColor: '#10B98140',
    iconBg: '#10B9811F',
    iconBorder: '#10B9814D',
    iconColor: '#10B981',
    badgeColors: ['green', 'green', 'green'],
  },
}

export default function SkillsSection() {
  const { t } = useLang()
  const { theme } = useTheme()
  const categories = t('skills.categories')
  const categoryKeys = ['backend', 'frontend', 'mobile', 'other']
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="skills"
      ref={ref}
      className="w-full flex flex-col items-center py-16 md:py-25 px-5 md:px-20 gap-12 md:gap-15 dark:bg-[#111827] bg-[#F8FAFC]"
    >
      {/* Header */}
      <div
        className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionLabel text={t('skills.label')} />
        <h2 className="tracking-[-1px] font-display font-bold text-[32px] md:text-[44px] leading-tight dark:text-[#F1F5F9] text-[#0F172A] m-0">
          {t('skills.title')}
        </h2>
        <p className="text-base max-w-[480px] leading-[1.6] font-body dark:text-[#64748B] text-[#64748B] m-0">
          {t('skills.subtitle')}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl gap-6">
        {categoryKeys.map((key, index) => {
          const config = categoryConfig[key]
          const cat = typeof categories === 'object' ? categories[key] : null
          if (!cat) return null

          return (
            <div
              key={key}
              className={`flex flex-col rounded-[20px] gap-5 border border-solid p-7 transition-all duration-700 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                backgroundImage:
                  theme === 'dark'
                    ? 'linear-gradient(145deg, #1E293B 0%, #0F172A 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
                borderColor: config.borderColor,
                boxShadow:
                  theme === 'dark'
                    ? 'none'
                    : '0 2px 12px rgba(99,102,241,0.06)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-xl shrink-0 w-11 h-11 border border-solid"
                  style={{
                    backgroundColor: config.iconBg,
                    borderColor: config.iconBorder,
                  }}
                >
                  {config.icon(config.iconColor)}
                </div>
                <span className="font-display font-bold text-lg leading-5.5 dark:text-[#F1F5F9] text-[#0F172A]">
                  {cat.title}
                </span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.items?.map((item, i) => (
                  <TechBadge
                    key={item}
                    name={item}
                    color={config.badgeColors?.[i] || 'indigo'}
                    size="md"
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
