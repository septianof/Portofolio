import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'

export default function HeroSection() {
  const { t } = useLang()
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center px-5 md:px-20 pt-[72px] overflow-hidden"
      style={{
        backgroundImage: 'var(--hero-bg)',
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-30 right-25 w-[480px] h-[480px] rounded-full pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-20 left-15 w-[320px] h-[320px] rounded-full pointer-events-none hidden md:block"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20 relative w-full max-w-7xl mx-auto py-10">
        {/* Text Content */}
        <div
          className={`flex flex-col items-center lg:items-start text-center lg:text-left gap-5.5 flex-1 order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Greeting */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-0.5 shrink-0"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
              }}
            />
            <span className="tracking-[2px] uppercase font-body font-medium text-[13px] leading-4 dark:text-[#06B6D4] text-[#0891B2]">
              {t('hero.greeting')}
            </span>
            <div
              className="w-8 h-0.5 shrink-0"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #06B6D4 0%, #6366F1 100%)',
              }}
            />
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[42px] md:text-[68px] leading-[1.05] tracking-[-2px] font-display font-extrabold dark:text-[#F1F5F9] text-[#0F172A]">
              {t('hero.firstName')}
            </h1>
            <h1 className="text-[42px] md:text-[68px] leading-[1.05] tracking-[-2px] font-display font-extrabold text-[#6366F1] dark:text-[#6366F1]">
              {t('hero.lastName')}
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-[500px] text-lg md:text-[20px] leading-[1.6] font-body">
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('hero.description')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#1E293B] font-semibold">
              {t('hero.keyword1')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('hero.connector1')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#1E293B] font-semibold">
              {t('hero.keyword2')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('hero.connector2')}{' '}
            </span>
            <span className="dark:text-[#E2E8F0] text-[#1E293B] font-semibold">
              {t('hero.keyword3')}
            </span>
            <span className="dark:text-[#94A3B8] text-[#64748B]">
              {t('hero.ending')}
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center lg:justify-start items-stretch sm:items-center mt-2 gap-4">
            <a
              href="#projects"
              className="flex justify-center items-center w-full md:w-auto rounded-xl py-3.5 px-8 gap-2 text-white font-body font-semibold text-base leading-5 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
                boxShadow: '0px 8px 32px #6366F166',
              }}
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#contact"
              className="flex justify-center items-center w-full md:w-auto rounded-xl py-3.5 px-8 gap-2 border-2 border-solid dark:border-[#6366F180] border-[#C7D2FE] font-body font-semibold text-base leading-5 dark:text-[#A5B4FC] text-[#4F46E5] transition-transform duration-200 hover:scale-[1.02] active:scale-95"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className={`w-[220px] h-[240px] md:w-[260px] md:h-[280px] lg:w-[300px] lg:h-[320px] rounded-[28px] p-[3px] shrink-0 order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{
            backgroundImage:
              'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
          }}
        >
          <img
            src="/images/Septiano.png"
            alt="Septiano Ferdiansyah"
            className="w-full h-full object-cover object-center rounded-[26px]"
          />
        </div>
      </div>
    </section>
  )
}
