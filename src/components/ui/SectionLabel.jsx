export default function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="w-8 h-0.5 shrink-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #6366F1 0%, #06B6D4 100%)',
        }}
      />
      <span className="tracking-[2px] uppercase text-[13px] leading-4 font-semibold font-body text-indigo dark:text-indigo">
        {text}
      </span>
      <div
        className="w-8 h-0.5 shrink-0"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #06B6D4 0%, #6366F1 100%)',
        }}
      />
    </div>
  )
}
