import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const COMPLIMENTS = [
  'Your vibe is legally distinct from chaos.',
  'You seem like someone who owns at least one good pen.',
  'Your existence has not made things worse today.',
  'Someone, somewhere, would miss your particular brand of weird.',
  'You have the kind of face that doesn\'t immediately cause concern.',
  'Your hair is doing something. That\'s more than can be said for many.',
]

function ComplimentContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setText(
            COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)] ?? ''
          )
        }
      >
        Generate a useless compliment
      </button>
      {text !== null && <p className="experience-result">{text}</p>}
    </div>
  )
}

export const complimentExperience: Experience = {
  id: 'compliment',
  title: 'Useless Compliment',
  render: () => <ComplimentContent />,
}
