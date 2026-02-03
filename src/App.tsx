import { useState } from 'react'
import { getNextExperience, type Experience } from './experiences'
import './App.css'

function App() {
  const [experience, setExperience] = useState<Experience | null>(null)
  const [deck, setDeck] = useState<Experience[]>([])

  const handlePick = () => {
    const { experience: next, nextDeck } = getNextExperience(deck)
    setExperience(next)
    setDeck(nextDeck)
  }

  return (
    <main className="app">
      {experience === null ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePick}
        >
          I&apos;m just bored
        </button>
      ) : (
        <>
          <section className="card" aria-label="Experience">
            <h2 className="card-title">{experience.title}</h2>
            <div className="card-content">{experience.render()}</div>
          </section>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePick}
          >
            Still bored
          </button>
        </>
      )}
    </main>
  )
}

export default App
