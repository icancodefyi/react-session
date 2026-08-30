function EventInfo({ title, time, location }) {
  return (
    <div className="card">
      <span className="badge">Props</span>
      <h1 className="ev-title">{title}</h1>
      <div className="meta">
        <span>🗓️ {time}</span>
        <span>📍 {location}</span>
      </div>
      <p className="desc">
        Props are the arguments passed to a component. Destructuring makes them
        readable.
      </p>
    </div>
  )
}

export default EventInfo