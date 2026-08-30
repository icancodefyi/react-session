import { useRef } from 'react'

function Focus() {
  const inputRef = useRef(null)

  function focusIt() {
    inputRef.current.focus()
  }

  return (
    <div className="card">
      <h1 className="ev-title">useRef — focus a DOM node</h1>
      <input ref={inputRef} className="name-input" placeholder="Search events..." />
      <button className="btn" onClick={focusIt}>
        Focus the input
      </button>
      <p className="demo-note">
        <span className="pill pill-blue">ref={inputRef}</span> links the real DOM
        node. <span className="pill pill-blue">inputRef.current</span> is the
        element, so we can call .focus() on it.
      </p>
    </div>
  )
}

export default Focus