import type { Experience } from './index'

const CHALLENGE_1: Experience = {
  id: 'micro-challenge-1',
  title: 'Micro-Challenge #1',
  render: () => (
    <p>Stand up and stretch for 15 seconds. Yes, now.</p>
  ),
}

const CHALLENGE_2: Experience = {
  id: 'micro-challenge-2',
  title: 'Micro-Challenge #2',
  render: () => (
    <p>Text someone: &quot;I&apos;m bored. Give me a number 1–10.&quot;</p>
  ),
}

const CHALLENGE_3: Experience = {
  id: 'micro-challenge-3',
  title: 'Micro-Challenge #3',
  render: () => (
    <p>Look around and find something blue. Stare at it like it matters.</p>
  ),
}

export const challengeExperiences: Experience[] = [
  CHALLENGE_1,
  CHALLENGE_2,
  CHALLENGE_3,
]
