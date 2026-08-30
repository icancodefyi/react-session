const student = {
  name: 'Priya Sharma',
  batch: 2027,
  branch: 'Computer Science',
  skills: ['React', 'Vite'],
  joined: 2024,
}

function App() {
  return (
    <div className="card">
      <span className="badge">Student Profile</span>
      <h1 className="ev-title">{student.name.toUpperCase()}</h1>
      <p className="desc">
        Batch of {student.batch} · {student.branch}
      </p>
      <div className="row">
        <span className="pill pill-blue">{student.skills[0]}</span>
        <span className="pill pill-blue">{student.skills[1]}</span>
      </div>
      <p className="going">
        Member for {2027 - student.joined} years
      </p>
      <p className="demo-note">Her name has {student.name.length} letters — JSX can compute.</p>
    </div>
  )
}

export default App