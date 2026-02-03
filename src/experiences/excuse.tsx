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
  'My charger and I had a disagreement.',
  'I was debugging my sleep schedule.',
  'A cloud was in the way.',
  'My motivation is in a different time zone.',
]

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function ExcuseContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() => setText(EXCUSES.length > 0 ? pickRandom(EXCUSES) : null)}
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
