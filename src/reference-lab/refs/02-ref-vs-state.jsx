import { useRef, useState } from 'react'

function RefVsState() {
  const [renders, setRenders] = useState(0)
  const silentClicks = useRef(0)

  function silent() {
    silentClicks.current += 1
    alert('ref bumped to ' + silentClicks.current + ' — but no re-render happened')
  }

  return (
    <div className="card">
      <h1 className="ev-title">useRef — value that does NOT re-render</h1>
      <p className="going">
        re-renders: <b>{renders}</b>
      </p>
      <div className="row">
        <button className="btn btn-auto" onClick={silent}>
          ref++ (no render)
        </button>
        <button className="btn btn-auto" onClick={() => setRenders(renders + 1)}>
          re-render to prove the ref keeps its value
        </button>
      </div>
      <p className="demo-note">
        A ref survives re-renders like state, but changing it never triggers a
        render (check the alert: the screen never updates). Use refs for
        observable, non-visual values.
      </p>
    </div>
  )
}

export default RefVsState