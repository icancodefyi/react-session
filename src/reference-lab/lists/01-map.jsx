const events = ['React Workshop', 'Git & GitHub Workshop', 'Hackathon 2026']

function MapList() {
  return (
    <div className="card">
      <h1 className="ev-title">Render a list</h1>
      <h2 className="desc">.map turns each item into JSX</h2>
      {events.map((ev) => (
        <p key={ev} className="going">
          🎟️ {ev}
        </p>
      ))}
    </div>
  )
}

export default MapList