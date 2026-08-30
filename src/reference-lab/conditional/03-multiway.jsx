function Multiway() {
  const status = (n) => {
    if (n <= 0) return { text: 'Fill up.', tone: 'pill-red' }
    if (n <= 5) return { text: 'Hurry — almost full!', tone: 'pill-yellow' }
    if (n <= 30) return { text: 'Open for everyone.', tone: 'pill-green' }
    return { text: 'Huge crowd expected.', tone: 'pill-blue' }
  }

  return (
    <div className="card">
      <h1 className="ev-title">Multiple branches</h1>
      {[0, 3, 20, 200].map((n) => {
        const s = status(n)
        return (
          <p key={n} className="going">
            {n} seats left →
            <span className={'pill ' + s.tone}> {s.text}</span>
          </p>
        )
      })}
      <p className="demo-note">
        Ternary chains or small helper functions beat giant if/else inside JSX.
      </p>
    </div>
  )
}

export default Multiway