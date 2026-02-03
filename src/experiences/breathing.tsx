import type { Experience } from './index'

export const breathingExperience: Experience = {
  id: 'breathing',
  title: 'Manual Breathing',
  render: () => (
    <p>You are now manually breathing. Sorry.</p>
  ),
}
