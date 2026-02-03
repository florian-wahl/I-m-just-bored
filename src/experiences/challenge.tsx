import type { Experience } from './index'

const CHALLENGE_1: Experience = {
  id: 'micro-challenge-1',
  title: 'Micro-Challenge #1',
  render: () => (
    <p>Stand up and stretch for 15 seconds. Reach for the ceiling, then touch your toes—or just wave your arms. Yes, now.</p>
  ),
}

const CHALLENGE_2: Experience = {
  id: 'micro-challenge-2',
  title: 'Micro-Challenge #2',
  render: () => (
    <p>Text someone: &quot;I&apos;m bored. Give me a number 1–10.&quot; Whatever they reply, that&apos;s your number. No take-backs.</p>
  ),
}

const CHALLENGE_3: Experience = {
  id: 'micro-challenge-3',
  title: 'Micro-Challenge #3',
  render: () => (
    <p>Look around and find something blue. Stare at it for 10 seconds like it matters. Bonus: try to remember its shade later.</p>
  ),
}

const CHALLENGE_4: Experience = {
  id: 'micro-challenge-4',
  title: 'Micro-Challenge #4',
  render: () => (
    <p>Do 5 jumping jacks. No one is watching. Probably. If someone is, they&apos;re now mildly confused. You&apos;re welcome.</p>
  ),
}

const CHALLENGE_5: Experience = {
  id: 'micro-challenge-5',
  title: 'Micro-Challenge #5',
  render: () => (
    <p>Name three things you can see right now—out loud. Objects, colors, shapes. It&apos;s a tiny grounding exercise. Go.</p>
  ),
}

export const challengeExperiences: Experience[] = [
  CHALLENGE_1,
  CHALLENGE_2,
  CHALLENGE_3,
  CHALLENGE_4,
  CHALLENGE_5,
]
