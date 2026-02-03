import { useState } from 'react'
import type { Experience } from './index'

function CoinFlipContent() {
  const [result, setResult] = useState<'Heads' | 'Tails' | null>(null)
  return (
    <div>
      <button
        type="button"
        className="experience-button"
        onClick={() =>
          setResult(Math.random() < 0.5 ? 'Heads' : 'Tails')
        }
      >
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
