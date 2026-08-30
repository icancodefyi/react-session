import { useState } from 'react'

function Updater() {
  const [count, setCount] = useState(0)

  function addThree() {
    setCount((c) => c + 1)
    setCount((c) => c + 1)
    setCount((c) => c + 1)
  }

  function addOneBug() {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div className="card">
      <h1 className="ev-title">Functional updater</h1>
      <p className="going">
        <b>{count}</b>
      </p>
      <div className="row">
        <button className="btn btn-auto" onClick={addThree}>
          setCount(c ↦ c+1) ×3
        </button>
        <button className="btn btn-auto" onClick={addOneBug}>
          setCount(count+1) ×3
        </button>
      </div>
      <p className="demo-note">
        The first button queues 3 real increments (~3 becomes 3). The second
        uses a stale value, so it only adds 1 in total. Prefer the updater form
        when the next value depends on the previous.
      </p>
    </div>
  )
}

export default Updater