import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const INSULTS = [
  'You have the energy of a damp napkin.',
  'Your personality is the font equivalent of Comic Sans.',
  'You bring to mind a screensaver. Not the interesting kind.',
  'Someone once left you on read. They were right.',
  'You are the human version of a loading spinner.',
  'Your vibe is that of a participation trophy.',
]

function InsultContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setText(INSULTS[Math.floor(Math.random() * INSULTS.length)] ?? '')
        }
      >
        Generate a useless insult
      </button>
      {text !== null && <p className="experience-result">{text}</p>}
    </div>
  )
}

export const insultExperience: Experience = {
  id: 'insult',
  title: 'Useless Insult',
  render: () => <InsultContent />,
}
