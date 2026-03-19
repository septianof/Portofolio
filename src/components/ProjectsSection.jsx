import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import SectionLabel from './ui/SectionLabel'
import TechBadge from './ui/TechBadge'
import { projects } from '../data/projects'
import useScrollReveal from '../hooks/useScrollReveal'

const GitHubIcon = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const LinkIcon = ({ color }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
)

const statusColorMap = {
  green: { bg: '#10B9811F', border: '#10B9814D', darkText: '#10B981', lightText: '#059669' },
  indigo: { bg: '#6366F11F', border: '#6366F14D', darkText: '#818CF8', lightText: '#4F46E5' },
  amber: { bg: '#F59E0B1F', border: '#F59E0B4D', darkText: '#FBBF24', lightText: '#D97706' },
  purple: { bg: '#A855F71F', border: '#A855F74D', darkText: '#C084FC', lightText: '#7C3AED' },
}

export default function ProjectsSection() {
  const { lang, t } = useLang()
  const { theme } = useTheme()
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full flex flex-col items-center py-16 md:py-25 px-5 md:px-20 gap-12 md:gap-15 dark:bg-[#0F172A] bg-white"
    >
      {/* Header */}
      <div className={`flex flex-col items-center gap-4 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <SectionLabel text={t('projects.label')} />
        <h2 className="tracking-[-1px] font-display font-bold text-[32px] md:text-[44px] leading-tight dark:text-[#F1F5F9] text-[#0F172A] m-0">
          {t('projects.title')}
        </h2>
        <p className="text-base max-w-[480px] leading-[1.6] font-body dark:text-[#64748B] text-[#64748B] m-0">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap w-full max-w-7xl justify-center gap-7">
        {projects.map((project) => {
          const title = typeof project.title === 'object' ? project.title[lang] : project.title
          const description = project.description[lang]
          const status = typeof project.status === 'object' ? project.status[lang] : project.status
          const statusColors = statusColorMap[project.statusColor] || statusColorMap.indigo

          return (
            <div
              key={project.id}
              className={`w-full md:w-[calc(50%-14px)] flex flex-col rounded-[20px] gap-4.5 border border-solid p-7 transition-all duration-700 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                backgroundImage:
                  theme === 'dark'
                    ? 'linear-gradient(145deg, #1E293B 0%, #0F172A 100%)'
                    : 'linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)',
                borderColor: project.borderColor,
                boxShadow:
                  theme === 'dark'
                    ? 'none'
                    : '0 2px 12px rgba(99,102,241,0.06)',
              }}
            >
              {/* Project Header Visual */}
              <div
                className="w-full h-40 flex items-center justify-center rounded-xl shrink-0 overflow-hidden"
                style={{ backgroundImage: project.headerGradient }}
              >
                <span
                  className={`tracking-[-1px] font-bold text-2xl md:text-4xl leading-10 text-center ${
                    project.headerFont === 'mono' ? 'font-mono' : 'font-display font-black'
                  }`}
                  style={{ color: project.headerTextColor }}
                >
                  {project.headerText}
                </span>
              </div>

              {/* Title + Status */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl md:text-[22px] leading-7 dark:text-[#F1F5F9] text-[#0F172A] m-0">
                    {title}
                  </h3>
                  <div
                    className="shrink-0 ml-2 rounded-[20px] py-1 px-3 border border-solid"
                    style={{
                      backgroundColor: statusColors.bg,
                      borderColor: statusColors.border,
                    }}
                  >
                    <span
                      className="uppercase tracking-[0.5px] font-body font-semibold text-[11px] leading-3.5"
                      style={{
                        color: theme === 'dark' ? statusColors.darkText : statusColors.lightText,
                      }}
                    >
                      {status}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-[1.6] font-body dark:text-[#94A3B8] text-[#64748B] m-0">
                  {description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} color={tech.color} size="sm" />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex mt-1 gap-2.5">
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center rounded-[10px] gap-1.5 p-2.5 border border-solid dark:bg-[#6366F11A] bg-[#EEF2FF] dark:border-[#6366F140] border-[#C7D2FE] transition-colors duration-200 hover:dark:bg-[#6366F133] hover:bg-[#E0E7FF]"
                >
                  <GitHubIcon color={theme === 'dark' ? '#818CF8' : '#4F46E5'} />
                  <span className="font-body font-semibold text-xs leading-4 dark:text-[#818CF8] text-[#4F46E5]">
                    GitHub
                  </span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center rounded-[10px] gap-1.5 p-2.5 border border-solid dark:bg-[#06B6D414] bg-[#ECFEFF] dark:border-[#06B6D433] border-[#A5F3FC] transition-colors duration-200 hover:dark:bg-[#06B6D426] hover:bg-[#CFFAFE]"
                  >
                    <LinkIcon color={theme === 'dark' ? '#22D3EE' : '#0891B2'} />
                    <span className="font-body font-semibold text-xs leading-4 dark:text-[#22D3EE] text-[#0891B2]">
                      Live Preview
                    </span>
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
