import type { Experience } from './index'

const FACT_1: Experience = {
  id: 'weird-fact-1',
  title: 'Weird Fact #1',
  render: () => <p>Octopuses have three hearts.</p>,
}

const FACT_2: Experience = {
  id: 'weird-fact-2',
  title: 'Weird Fact #2',
  render: () => <p>Bananas are berries. Strawberries aren&apos;t.</p>,
}

const FACT_3: Experience = {
  id: 'weird-fact-3',
  title: 'Weird Fact #3',
  render: () => <p>A day on Venus is longer than its year.</p>,
}

const FACT_4: Experience = {
  id: 'weird-fact-4',
  title: 'Weird Fact #4',
  render: () => <p>Wombat poop is cube-shaped.</p>,
}

export const factExperiences: Experience[] = [FACT_1, FACT_2, FACT_3, FACT_4]
