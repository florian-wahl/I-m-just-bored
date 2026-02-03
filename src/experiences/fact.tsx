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

const FACT_5: Experience = {
  id: 'weird-fact-5',
  title: 'Weird Fact #5',
  render: () => (
    <p>Honey never spoils. Archaeologists have found 3,000-year-old honey that&apos;s still edible.</p>
  ),
}

const FACT_6: Experience = {
  id: 'weird-fact-6',
  title: 'Weird Fact #6',
  render: () => <p>A group of flamingos is called a &quot;flamboyance.&quot;</p>,
}

const FACT_7: Experience = {
  id: 'weird-fact-7',
  title: 'Weird Fact #7',
  render: () => (
    <p>The shortest war in history lasted 38 to 45 minutes (UK vs Zanzibar, 1896).</p>
  ),
}

export const factExperiences: Experience[] = [
  FACT_1,
  FACT_2,
  FACT_3,
  FACT_4,
  FACT_5,
  FACT_6,
  FACT_7,
]
