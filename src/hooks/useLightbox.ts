import { useState, useEffect } from 'react'

export default function useLightbox(images: string[]) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const isOpen = selectedIndex !== null

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowRight')
        setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null))
      if (e.key === 'ArrowLeft')
        setSelectedIndex((i) =>
          i !== null ? (i - 1 + images.length) % images.length : null
        )
    }

    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, images.length])

  return { selectedIndex, setSelectedIndex, isOpen }
}
