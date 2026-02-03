import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
const TARGET_CLICKS = 10

function DotGameContent() {
  const [clicks, setClicks] = useState(0)
  const done = clicks >= TARGET_CLICKS
  const remaining = TARGET_CLICKS - clicks
  return (
    <div className="dot-game">
      {!done ? (
        <>
          <p>Click the dot {remaining} more time{remaining === 1 ? '' : 's'}. No prize. No point. Just clicks.</p>
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
