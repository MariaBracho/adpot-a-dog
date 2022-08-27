import { useState, useEffect } from 'react'

const DEFAULT_OBSERVER_OPTIONS = {
  rootMargin: '1px'
}

export default function useNearScreen ({ externalRef }) {
  const [isNearScreen, setIsNearScreen] = useState(false)

  useEffect(() => {
    const onchange = (entries, _observer) => {
      const [firstEntrie] = entries

      setIsNearScreen(firstEntrie.isIntersecting)
    }

    const observer = new IntersectionObserver(
      onchange,
      DEFAULT_OBSERVER_OPTIONS
    )
    observer.observe(externalRef.current)
    return () => observer?.disconnect()
  }, [externalRef])

  return { isNearScreen }
}
