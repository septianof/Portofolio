import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import SectionLabel from './ui/SectionLabel'
import useScrollReveal from '../hooks/useScrollReveal'

const tagColors = [
  { bg: '#10B9811A', border: '#10B9814D', darkText: '#34D399', lightText: '#059669' },
  { bg: '#06B6D41A', border: '#06B6D44D', darkText: '#22D3EE', lightText: '#0891B2' },
  { bg: '#A855F71A', border: '#A855F74D', darkText: '#C084FC', lightText: '#7C3AED' },
  { bg: '#F59E0B1A', border: '#F59E0B4D', darkText: '#FBBF24', lightText: '#D97706' },
]

export default function AboutSection() {
  const { t } = useLang()
  const { theme } = useTheme()
  const tags = t('about.tags')
  const { ref, isVisible } = useScrollReveal(0.15)

  const headingSuffix = t('about.headingSuffix')

  return (
    <section
      id="about"
      ref={ref}
      className="w-full min-h-[600px] flex items-center justify-center py-16 md:py-25 px-5 md:px-20 dark:bg-[#0F172A] bg-white"
    >
      <div
        className={`flex flex-col lg:flex-row items-center w-full max-w-7xl gap-10 lg:gap-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Photo */}
        <div className="shrink-0 flex flex-col items-center gap-4">
          <div
            className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-3xl p-[3px] shrink-0"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
            }}
          >
            <img
              src="/images/Septiano.png"
              alt="Septiano Ferdiansyah"
              className="w-full h-full object-cover object-center rounded-[22px]"
            />
          </div>
          <div className="rounded-xl py-2.5 px-5 dark:bg-[#6366F11A] bg-[#EEF2FF] border border-solid dark:border-[#6366F14D] border-[#C7D2FE]">
            <span className="font-body font-medium text-base leading-5 dark:text-[#A5B4FC] text-[#4F46E5]">
              {t('about.semester')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <SectionLabel text={t('about.label')} />

          {/* Heading */}
          <h2 className="text-[32px] md:text-[44px] tracking-[-1px] leading-[1.15] font-display font-bold m-0">
            <span className="dark:text-[#F1F5F9] text-[#0F172A]">
              {t('about.headingPrefix')}{' '}
            </span>
            <span className="dark:text-[#818CF8] text-[#4F46E5]">
              {t('about.headingHighlight')}
            </span>
            {headingSuffix && (
              <span className="dark:text-[#F1F5F9] text-[#0F172A]">
                {' '}{headingSuffix}
              </span>
            )}
          </h2>

          {/* Paragraph 1 */}
          <p className="text-base md:text-[17px] leading-[1.8] font-body m-0">
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('about.paragraph1')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#4F46E5] font-medium">
              {t('about.keyword1')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {' '}{t('about.paragraph1End')}
            </span>
          </p>

          {/* Paragraph 2 */}
          <p className="text-base md:text-[17px] leading-[1.8] font-body m-0">
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('about.paragraph2Start')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#4F46E5] font-medium">
              {t('about.keyword2')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {' '}{t('about.paragraph2Mid')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#4F46E5] font-medium">
              {t('about.keyword3')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {' '}{t('about.paragraph2Connector')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#4F46E5] font-medium">
              {t('about.keyword4')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {' '}{t('about.paragraph2End')}
            </span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap mt-2 gap-4 justify-center lg:justify-start">
            {Array.isArray(tags) && tags.map((tag, i) => {
              const c = tagColors[i % tagColors.length]
              return (
                <div
                  key={tag}
                  className="rounded-lg py-2 px-4 border border-solid"
                  style={{
                    backgroundColor: c.bg,
                    borderColor: c.border,
                  }}
                >
                  <span
                    className="font-body font-medium text-base leading-5"
                    style={{
                      color: theme === 'dark' ? c.darkText : c.lightText,
                    }}
                  >
                    {tag}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
