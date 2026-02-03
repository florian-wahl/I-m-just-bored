import { useState } from 'react'
import type { Experience } from './index'

const PROPHECIES = [
  'Soon, you will remember a song from 2009.',
  'A snack is in your future.',
  'Someone you know will send a typo within 24 hours.',
  'You will forget why you opened this tab.',
  'A minor inconvenience shall befall you before sunset.',
  'You will consider reorganizing a drawer. You will not.',
]

function ProphecyContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setText(
            PROPHECIES[Math.floor(Math.random() * PROPHECIES.length)] ?? ''
          )
        }
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
