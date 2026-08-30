import { useState } from 'react'

function EventObject() {
  const [last, setLast] = useState('Not clicked yet')

  function handleClick(e) {
    setLast('target: ' + e.target.textContent + ' | type: ' + e.type)
  }

  return (
    <div className="card">
      <h1 className="ev-title">The event object</h1>
      <span className="mono">{last}</span>
      <div className="row" style={{ marginTop: 14 }}>
        <button className="btn btn-auto" onClick={handleClick}>
          Button A
        </button>
        <button className="btn btn-auto" onClick={handleClick}>
          Button B
        </button>
      </div>
      <p className="demo-note">
        React passes a synthetic event <span className="pill pill-blue">e</span>{' '}
        to your handler carrying type, target, and more.
      </p>
    </div>
  )
}

export default EventObject