interface Props {
  children: React.ReactNode
  light?: boolean
}

export default function SectionBadge({ children, light = false }: Props) {
  return (
    <span
      className={`text-[11px] tracking-[0.28em] uppercase font-medium font-sans ${
        light ? 'text-bakshala-mist' : 'text-bakshala-sand'
      }`}
    >
      {children}
    </span>
  )
}
