import { useState } from 'react'
import { pickRandomExperience, type Experience } from './experiences'
import './App.css'

function App() {
  const [experience, setExperience] = useState<Experience | null>(null)

  return (
    <main className="app">
      <h1 className="title">ImJustBored.com</h1>
      <p className="subtitle">Click the button. Get something random.</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setExperience(pickRandomExperience())}
      >
        I'm just bored
      </button>
      {experience !== null && (
        <>
          <section className="card" aria-label="Experience">
            <h2 className="card-title">{experience.title}</h2>
            <div className="card-content">{experience.render()}</div>
          </section>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setExperience(pickRandomExperience())}
          >
            Still bored
          </button>
        </>
      )}
    </main>
  )
}

export default App
