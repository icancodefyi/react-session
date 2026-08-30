import { useState } from 'react'

function ArrayState() {
  const [items, setItems] = useState(['Homework', 'Lab file'])

  function add() {
    setItems([...items, `Task #${items.length + 1}`])
  }

  function remove(index) {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="card">
      <h1 className="ev-title">Array state</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i} className="row" style={{ marginBottom: 8 }}>
            <span className="pill pill-blue">{item}</span>
            <button className="btn btn-auto" onClick={() => remove(i)}>
              remove
            </button>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={add}>
        Add task
      </button>
      <p className="demo-note">
        Add = new array via spread. Remove = new array via filter. Never
        push/splice in place.
      </p>
    </div>
  )
}

export default ArrayState