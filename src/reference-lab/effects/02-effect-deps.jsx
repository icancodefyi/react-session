import { useEffect, useState } from 'react'

function Dependencies() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    console.log('count changed →', count)
  }, [count])

  return (
    <div className="card">
      <h1 className="ev-title">Dependency array</h1>
      <p className="going">
        <b>{count}</b>
      </p>
      <div className="row">
        <button className="btn btn-auto" onClick={() => setCount(count + 1)}>
          +count
        </button>
        <button
          className="btn btn-auto"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          toggle theme ({theme})
        </button>
      </div>
      <p className="demo-note">
        Effect only re-runs when something inside the deps array changes.
        Changing theme does not trigger it.
      </p>
    </div>
  )
}

export default Dependencies