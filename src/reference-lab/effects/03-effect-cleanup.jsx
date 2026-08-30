import { useEffect, useState } from 'react'

function Cleanup() {
  const [running, setRunning] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setTick((t) => t + 1), 500)
    return () => clearInterval(id)
  }, [running])

  return (
    <div className="card">
      <h1 className="ev-title">Cleanup</h1>
      <p className="going">
        tick: <b>{tick}</b>
      </p>
      <button className="btn" onClick={() => setRunning(!running)}>
        {running ? 'Stop' : 'Start'}
      </button>
      <p className="demo-note">
        The function returned from an effect is the cleanup — it runs before the
        next effect run and before unmount.
      </p>
    </div>
  )
}

export default Cleanup