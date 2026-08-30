const events = [
  { id: 1, title: 'React Workshop', date: 'Monday' },
  { id: 2, title: 'Git & GitHub', date: 'Wednesday' },
  { id: 3, title: 'Hackathon 2026', date: 'Saturday' },
]

function Keys() {
  return (
    <div className="card">
      <h1 className="ev-title">Keys help React track items</h1>
      {events.map((ev) => (
        <p key={ev.id} className="going">
          🎟️ {ev.title} — {ev.date}
        </p>
      ))}
      <p className="demo-note">
        Key = stable id, not the array index. Keys let React know which item
        changed when the list updates. Using index as key breaks this when items
        are added/removed.
      </p>
    </div>
  )
}

export default Keys