import type { Experience } from './index'

const FACT_1: Experience = {
  id: 'weird-fact-1',
  title: 'Weird Fact #1',
  render: () => (
    <p>Octopuses have three hearts. Two pump blood to the gills; one pumps it to the rest of the body.</p>
  ),
}

const FACT_2: Experience = {
  id: 'weird-fact-2',
  title: 'Weird Fact #2',
  render: () => (
    <p>Bananas are berries. Strawberries aren&apos;t. Botanically, a berry has to have seeds on the inside—so grapes and kiwis count too.</p>
  ),
}

const FACT_3: Experience = {
  id: 'weird-fact-3',
  title: 'Weird Fact #3',
  render: () => (
    <p>A day on Venus is longer than its year. One full rotation takes about 243 Earth days; one orbit around the Sun takes about 225.</p>
  ),
}

const FACT_4: Experience = {
  id: 'weird-fact-4',
  title: 'Weird Fact #4',
  render: () => (
    <p>Wombat poop is cube-shaped. Scientists think their intestines form the shape so the cubes stack and don&apos;t roll away—handy for marking territory.</p>
  ),
}

const FACT_5: Experience = {
  id: 'weird-fact-5',
  title: 'Weird Fact #5',
  render: () => (
    <p>Honey never spoils. Its low moisture and acidity mean bacteria can&apos;t grow. Archaeologists have found 3,000-year-old honey that&apos;s still edible.</p>
  ),
}

const FACT_6: Experience = {
  id: 'weird-fact-6',
  title: 'Weird Fact #6',
  render: () => (
    <p>A group of flamingos is called a &quot;flamboyance.&quot; A group of jellyfish is a &quot;smack.&quot; We&apos;re not making this up.</p>
  ),
}

const FACT_7: Experience = {
  id: 'weird-fact-7',
  title: 'Weird Fact #7',
  render: () => (
    <p>The shortest war in history lasted 38 to 45 minutes. The Anglo-Zanzibar War of 1896 ended when the Sultan&apos;s palace was shelled and he fled.</p>
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
