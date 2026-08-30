const event = {
  title: 'React Workshop',
  tagline: 'Learn React from scratch — components, state and more.',
  day: 'Monday',
  time: '3:00 PM',
  location: 'Seminar Hall',
  attendees: 24,
}

function EventCard() {
  return (
    <div className="card">
      <span className="badge">Workshop</span>
      <h1 className="ev-title">{event.title}</h1>
      <p className="desc">{event.tagline}</p>

      <div className="meta">
        <span>
          🗓️ {event.day} · {event.time}
        </span>
        <span>📍 {event.location}</span>
      </div>

      <p className="going">{event.attendees} people are going</p>

      <button className="btn">Join Workshop</button>
    </div>
  )
}

function App() {
  return (
    <main className="page">
      <EventCard />
    </main>
  )
}

export default App