import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const EXCUSES = [
  'My goldfish needed a walk.',
  'I was busy reorganizing my thoughts. They escaped.',
  'A pigeon looked at me wrong.',
  'I had to water my plastic plant.',
  'My WiFi was feeling shy.',
  'I was waiting for a sign. It was delayed.',
]

function ExcuseContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setText(EXCUSES[Math.floor(Math.random() * EXCUSES.length)] ?? '')
        }
      >
        Generate a random excuse
      </button>
      {text !== null && <p className="experience-result">{text}</p>}
    </div>
  )
}

export const excuseExperience: Experience = {
  id: 'excuse',
  title: 'Random Excuse',
  render: () => <ExcuseContent />,
}
