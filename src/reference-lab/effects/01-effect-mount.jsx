import { useEffect, useState } from 'react'

function OnMount() {
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    console.log('mounted once — even if I click a lot')
  }, [])

  return (
    <div className="card">
      <h1 className="ev-title">useEffect — run once</h1>
      <p className="demo-note">Check the browser console.</p>
      <p className="going">
        <b>{clicks}</b> clicks
      </p>
      <button className="btn" onClick={() => setClicks(clicks + 1)}>
        Click me
      </button>
      <p className="demo-note">
        Empty deps array <span className="pill pill-blue">[]</span> = runs after
        the first render only.
      </p>
    </div>
  )
}

export default OnMount