function Quote({ author }) {
  return (
    <div className="card">
      <span className="badge">Props are read-only</span>
      <p className="desc" style={{ fontStyle: 'italic' }}>
        "You cannot change the props you receive. A component must never modify
        its own props — it can only read them and tell its parent about changes."
      </p>
      <p className="going">— {author}</p>
      <div className="row">
        <span className="pill pill-red">props are immutable</span>
        <span className="pill pill-green">state is the copy you can change</span>
      </div>
    </div>
  )
}

export default Quote