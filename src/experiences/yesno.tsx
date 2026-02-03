import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
function YesNoContent() {
  const [result, setResult] = useState<'Yes' | 'No' | null>(null)
  const flip = () => setResult(Math.random() < 0.5 ? 'Yes' : 'No')
  return (
    <div>
      <p>Stuck between two options? Let the coin of fate decide.</p>
      <button type="button" className="experience-button" onClick={flip}>
        Yes or No?
      </button>
      {result !== null && (
        <>
          <p className="experience-result">{result}</p>
          <p className="experience-subtitle">The universe has spoken.</p>
        </>
      )}
    </div>
  )
}

export const yesNoExperience: Experience = {
  id: 'yes-no',
  title: 'Yes or No',
  render: () => <YesNoContent />,
}
