import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface Props {
  to: string
  label?: string
  className?: string
}

export default function LearnMoreButton({
  to,
  label = 'Дізнатись більше',
  className = '',
}: Props) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-3 text-[13px] tracking-widest uppercase text-bakshala-lake border-b border-bakshala-lake pb-1 transition-[gap] duration-250 hover:gap-5 ${className}`}
    >
      {label}
      <ArrowRight size={14} />
    </Link>
  )
}
