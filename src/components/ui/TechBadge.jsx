const colorMap = {
  indigo: {
    bg: '#6366F11A',
    border: '#6366F140',
    darkText: '#818CF8',
    lightText: '#4F46E5',
  },
  cyan: {
    bg: '#06B6D41A',
    border: '#06B6D440',
    darkText: '#22D3EE',
    lightText: '#0891B2',
  },
  green: {
    bg: '#10B9811A',
    border: '#10B98140',
    darkText: '#34D399',
    lightText: '#059669',
  },
  purple: {
    bg: '#A855F71A',
    border: '#A855F740',
    darkText: '#C084FC',
    lightText: '#7C3AED',
  },
  amber: {
    bg: '#F59E0B1A',
    border: '#F59E0B40',
    darkText: '#FBBF24',
    lightText: '#D97706',
  },
  red: {
    bg: '#EF44441A',
    border: '#EF444433',
    darkText: '#F87171',
    lightText: '#DC2626',
  },
}

import { useTheme } from '../../context/ThemeContext'

export default function TechBadge({ name, color = 'indigo', size = 'sm' }) {
  const { theme } = useTheme()
  const c = colorMap[color] || colorMap.indigo
  const sizeClasses =
    size === 'sm'
      ? 'py-1 px-2.5 text-[11px] leading-3.5 rounded-md'
      : 'py-1.5 px-3.5 text-[13px] leading-4 rounded-lg'

  return (
    <div
      className={`border border-solid ${sizeClasses}`}
      style={{
        backgroundColor: c.bg,
        borderColor: c.border,
      }}
    >
      <span
        className="font-body font-medium"
        style={{ color: theme === 'dark' ? c.darkText : c.lightText }}
      >
        {name}
      </span>
    </div>
  )
}
