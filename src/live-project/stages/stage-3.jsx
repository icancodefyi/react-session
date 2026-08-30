function EventCard({ title, tagline, day, time, location, attendees }) {
  return (
    <div className="card">
      <span className="badge">Workshop</span>
      <h1 className="ev-title">{title}</h1>
      <p className="desc">{tagline}</p>

      <div className="meta">
        <span>
          🗓️ {day} · {time}
        </span>
        <span>📍 {location}</span>
      </div>

      <p className="going">{attendees} people are going</p>

      <button className="btn">Join Workshop</button>
    </div>
  )
}

function App() {
  return (
    <main className="page">
      <EventCard
        title="React Workshop"
        tagline="Learn React from scratch — components, state and more."
        day="Monday"
        time="3:00 PM"
        location="Seminar Hall"
        attendees={24}
      />

      <EventCard
        title="Git & GitHub Workshop"
        tagline="Version control for absolute beginners."
        day="Wednesday"
        time="2:00 PM"
        location="Lab 3"
        attendees={12}
      />
    </main>
  )
}

export default App