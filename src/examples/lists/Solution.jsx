const schedule = [
  { id: 1, day: 'Mon', activity: 'React Workshop' },
  { id: 2, day: 'Wed', activity: 'Git & GitHub' },
  { id: 3, day: 'Sat', activity: 'Hackathon' },
]

function App() {
  return (
    <div className="card">
      <span className="badge">Lists & Keys</span>
      <h1 className="ev-title">Campus Schedule</h1>
      {schedule.map((item) => (
        <p key={item.id} className="going">🗓️ {item.day} · {item.activity}</p>
      ))}
      <p className="demo-note">
        {schedule.length} events, rendered from an array. Add one entry and the list updates.
      </p>
    </div>
  )
}

export default App