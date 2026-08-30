function Tagline({ tagline = 'No tagline provided yet' }) {
  const safe = tagline || 'No tagline provided yet'
  return (
    <div>
      <span className="pill pill-blue">default param:</span>
      <p className="demo-note">{tagline}</p>
      <span className="pill pill-yellow">|| fallback:</span>
      <p className="demo-note">{safe}</p>
    </div>
  )
}

function Defaults() {
  return (
    <div className="card">
      <h1 className="ev-title">Default prop values</h1>
      <p className="desc">When a prop is missing, give it a fallback.</p>
      <Tagline />
      <Tagline tagline="This one has a tagline!" />
    </div>
  )
}

export default Defaults