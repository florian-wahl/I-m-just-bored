import type { JSX } from 'react'
import { factExperiences } from './fact'
import { challengeExperiences } from './challenge'
import { complimentExperience } from './compliment'
import { prophecyExperience } from './prophecy'
import { breathingExperience } from './breathing'
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
  dotGameExperience,
  coinFlipExperience,
]

export function pickRandomExperience(): Experience {
  if (EXPERIENCES.length === 0) {
    throw new Error('No experiences registered')
  }
  return EXPERIENCES[Math.floor(Math.random() * EXPERIENCES.length)]
}
