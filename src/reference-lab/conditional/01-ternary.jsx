import { useState } from 'react'

function ToggleLight() {
  const [on, setOn] = useState(false)

  return (
    <div className="card">
      <h1 className="ev-title">Ternary in JSX</h1>
      {on ? (
        <p className="status">💡 Light is ON</p>
      ) : (
        <p className="desc">Light is OFF</p>
      )}
      <button className="btn" onClick={() => setOn(!on)}>
        Toggle
      </button>
    </div>
  )
}

export default ToggleLight