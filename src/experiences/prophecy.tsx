import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const PROPHECIES = [
  'Soon, you will remember a song from 2009.',
  'A snack is in your future.',
  'Someone you know will send a typo within 24 hours.',
  'You will forget why you opened this tab.',
  'A minor inconvenience shall befall you before sunset.',
  'You will consider reorganizing a drawer. You will not.',
  'Within the week, you will find a pen. It may or may not work.',
  'A notification will buzz at an inconvenient time. You will survive.',
  'You will hear a word you haven\'t heard in years. You will not use it.',
  'Something will be on sale. You will debate. The moment will pass.',
]

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function ProphecyContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() => setText(PROPHECIES.length > 0 ? pickRandom(PROPHECIES) : null)}
      >
        Random pointless prophecy
      </button>
      {text !== null && <p className="experience-result">{text}</p>}
    </div>
  )
}

export const prophecyExperience: Experience = {
  id: 'prophecy',
  title: 'Pointless Prophecy',
  render: () => <ProphecyContent />,
}
