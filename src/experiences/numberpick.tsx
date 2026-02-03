import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
function NumberPickContent() {
  const [result, setResult] = useState<number | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setResult(Math.floor(Math.random() * 10) + 1)
        }
      >
        Pick a number 1–10
      </button>
      {result !== null && (
        <>
          <p className="experience-result">{result}</p>
          <p className="experience-subtitle">There. You&apos;ve chosen.</p>
        </>
      )}
    </div>
  )
}

export const numberPickExperience: Experience = {
  id: 'number-pick',
  title: 'Pick a Number',
  render: () => <NumberPickContent />,
}
