import { useState } from 'react'

function ObjectState() {
  const [user, setUser] = useState({ name: 'Rahul', batch: 2025 })

  function rename() {
    setUser({ ...user, name: 'Priya' })
  }

  return (
    <div className="card">
      <h1 className="ev-title">Object state</h1>
      <div className="meta">
        <span>👤 {user.name}</span>
        <span>🎓 {user.batch}</span>
      </div>
      <button className="btn" onClick={rename}>
        Rename
      </button>
      <p className="demo-note">
        Never mutate: create a new object with the spread operator{' '}
        <span className="pill pill-blue">...user</span> then override the field.
      </p>
    </div>
  )
}

export default ObjectState