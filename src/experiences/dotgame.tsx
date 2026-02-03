import { useState } from 'react'
import type { Experience } from './index'

function DotGameContent() {
  const [clicks, setClicks] = useState(0)
  const done = clicks >= 10
  return (
    <div className="dot-game">
      {!done ? (
        <>
          <p>Click the dot {10 - clicks} more time{10 - clicks === 1 ? '' : 's'}.</p>
          <button
            type="button"
            className="dot"
            onClick={() => setClicks((c) => c + 1)}
            aria-label="Click the dot"
          />
        </>
      ) : (
        <p className="experience-result">You did it. Nothing changed.</p>
      )}
    </div>
  )
}

export const dotGameExperience: Experience = {
  id: 'dot-game',
  title: 'Click the Dot',
  render: () => <DotGameContent />,
}
