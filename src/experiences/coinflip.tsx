import { useState } from 'react'
import type { Experience } from './index'

/* eslint-disable react-refresh/only-export-components */
function CoinFlipContent() {
  const [result, setResult] = useState<'Heads' | 'Tails' | null>(null)
  const flip = () => setResult(Math.random() < 0.5 ? 'Heads' : 'Tails')
  return (
    <div>
      <p>Let the coin decide. Then pretend you&apos;ll abide.</p>
      <button type="button" className="experience-button" onClick={flip}>
        Flip a coin
      </button>
      {result !== null && (
        <>
          <p className="experience-result">{result}</p>
          <p className="experience-subtitle">Pretend this solved something.</p>
        </>
      )}
    </div>
  )
}

export const coinFlipExperience: Experience = {
  id: 'coin-flip',
  title: 'Coin Flip',
  render: () => <CoinFlipContent />,
}
