import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const MIN = 1
const MAX = 10

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function NumberPickContent() {
  const [result, setResult] = useState<number | null>(null)
  return (
    <div>
      <p>When in doubt, let fate pick.</p>
      <button
        type="button"
        className="experience-button"
        onClick={() => setResult(randomInt(MIN, MAX))}
      >
        Pick a number {MIN}–{MAX}
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
