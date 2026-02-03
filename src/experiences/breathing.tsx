import type { Experience } from './index'

export const breathingExperience: Experience = {
  id: 'breathing',
  title: 'Manual Breathing',
  render: () => (
    <>
      <p>Breathe in for 4 seconds, hold for 4, exhale for 4. Do it once—or don&apos;t.</p>
      <p>Either way: you are now manually breathing. Sorry.</p>
    </>
  ),
}
