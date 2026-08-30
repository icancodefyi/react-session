import { useState } from 'react'

let nonReactCount = 0

function StateVsVariable() {
  const [count, setCount] = useState(0)

  function bump() {
    nonReactCount = nonReactCount + 1
    alert(
      'nonReactCount = ' + nonReactCount + ' but the screen won\'t update!',
    )
  }

  return (
    <div className="card">
      <h1 className="ev-title">State vs plain variable</h1>
      <div className="row">
        <span className="pill pill-yellow">state: {count}</span>
        <span className="pill pill-red">variable: {nonReactCount}</span>
      </div>
      <div className="row" style={{ marginTop: 16 }}>
        <button className="btn btn-auto" onClick={() => setCount(count + 1)}>
          setCount(+1) → re-renders
        </button>
        <button className="btn btn-auto" onClick={bump}>
          let x++ → no re-render
        </button>
      </div>
      <p className="demo-note">
        Changing a plain JS variable does NOT make React redraw. Only state
        changes trigger a re-render.
      </p>
    </div>
  )
}

export default StateVsVariable