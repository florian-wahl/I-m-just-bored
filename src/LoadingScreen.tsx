import { useEffect, useState } from 'react'
import './index.css'
import './LoadingScreen.css'

const FONT_FAMILY = 'Press Start 2P'
const FONT_LOAD_FALLBACK_MS = 5000

/**
 * Waits for a font to be loaded via the Font Loading API.
 * Resolves when the font is ready, or after a fallback timeout.
 */
function useFontReady(fontFamily: string, fallbackMs: number): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timeout = setTimeout(() => {
      if (cancelled) return
      setReady(true)
    }, fallbackMs)

    if (document.fonts?.load) {
      document.fonts
        .load(`1rem "${fontFamily}"`)
        .then(() => {
          if (cancelled) return
          clearTimeout(timeout)
          setReady(true)
        })
        .catch(() => {
          if (cancelled) return
          clearTimeout(timeout)
          setReady(true)
        })
    } else {
      clearTimeout(timeout)
      setReady(true)
    }

    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [fontFamily, fallbackMs])

  return ready
}

function LoadingScreen({ children }: { children: React.ReactNode }) {
  const ready = useFontReady(FONT_FAMILY, FONT_LOAD_FALLBACK_MS)

  return (
    <>
      <div
        className={`loading-screen ${ready ? 'loading-screen--done' : ''}`}
        aria-live="polite"
        aria-busy={!ready}
      >
        <div className="loading-screen__dot" aria-hidden="true" />
      </div>
      {ready ? children : null}
    </>
  )
}

export default LoadingScreen
