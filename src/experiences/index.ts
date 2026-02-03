import type { JSX } from 'react'
import { factExperiences } from './fact'
import { challengeExperiences } from './challenge'
import { complimentExperience } from './compliment'
import { prophecyExperience } from './prophecy'
import { breathingExperience } from './breathing'
import { insultExperience } from './insult'
import { excuseExperience } from './excuse'
import { lavaJokeExperience } from './joke2'
import { numberPickExperience } from './numberpick'
import { yesNoExperience } from './yesno'
import { dotGameExperience } from './dotgame'
import { coinFlipExperience } from './coinflip'

export type Experience = {
  id: string
  title: string
  render: () => JSX.Element
}

export const EXPERIENCES: Experience[] = [
  ...factExperiences,
  ...challengeExperiences,
  complimentExperience,
  prophecyExperience,
  breathingExperience,
  insultExperience,
  excuseExperience,
  lavaJokeExperience,
  numberPickExperience,
  yesNoExperience,
  dotGameExperience,
  coinFlipExperience,
]

/** Fisher–Yates shuffle (mutates array). */
function shuffle<T>(array: T[]): T[] {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Returns the next experience from the deck. User sees each experience once
 * (in random order) before any repeat. When the deck is empty, it is
 * reshuffled and refilled.
 */
export function getNextExperience(
  currentDeck: Experience[]
): { experience: Experience; nextDeck: Experience[] } {
  if (EXPERIENCES.length === 0) {
    throw new Error('No experiences registered')
  }
  let deck = currentDeck
  if (deck.length === 0) {
    deck = shuffle(EXPERIENCES)
  }
  const experience = deck[0]
  const nextDeck = deck.slice(1)
  return { experience, nextDeck }
}

/** @deprecated Use getNextExperience with deck for cycle-without-repeat. */
export function pickRandomExperience(): Experience {
  if (EXPERIENCES.length === 0) {
    throw new Error('No experiences registered')
  }
  return EXPERIENCES[Math.floor(Math.random() * EXPERIENCES.length)]
}
