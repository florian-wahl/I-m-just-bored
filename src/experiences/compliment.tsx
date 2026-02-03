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
  'You have not yet been replaced by a very slow robot.',
  'At least one person has thought, "Okay, they\'re fine," about you.',
  'You could probably parallel park if the stakes were low enough.',
  'Your sneeze is at least 40% your own.',
]

function pickRandom<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function ComplimentContent() {
  const [text, setText] = useState<string | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() => setText(COMPLIMENTS.length > 0 ? pickRandom(COMPLIMENTS) : null)}
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
