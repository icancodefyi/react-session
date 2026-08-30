import { useState } from 'react'

function FormInput() {
  const [name, setName] = useState('')

  return (
    <div className="card">
      <h1 className="ev-title">Controlled input</h1>
      <input
        className="name-input"
        placeholder="Type something"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="going">
        {name ? `Hello, ${name}!` : 'Waiting for input...'}
      </p>
      <p className="demo-note">
        The input's <span className="pill pill-blue">value</span> comes from
        state. Every keystroke fires onChange → setState → re-render. React is
        the single source of truth.
      </p>
    </div>
  )
}

export default FormInput