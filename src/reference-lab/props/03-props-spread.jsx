function EventCard({ title, time, location }) {
  return (
    <div className="card">
      <span className="badge">Props spread</span>
      <h1 className="ev-title">{title}</h1>
      <div className="meta">
        <span>🗓️ {time}</span>
        <span>📍 {location}</span>
      </div>
    </div>
  )
}

const event = {
  title: 'Hackathon 2026',
  time: 'Saturday · 9:00 AM',
  location: 'Main Auditorium',
}

function Spread() {
  return (
    <>
      <EventCard {...event} />
      <p className="demo-note">
        &lt;EventCard ...&#123;event&#125; /&gt; passes every key of the object as a prop.
      </p>
    </>
  )
}

export default Spread