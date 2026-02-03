import type { Experience } from './index'

export const lavaJokeExperience: Experience = {
  id: 'lava',
  title: 'Pointless Joke #2',
  render: () => (
    <>
      <p>The floor is now lava. You&apos;re welcome.</p>
      <p>Your couch is safe. Probably.</p>
    </>
  ),
}
