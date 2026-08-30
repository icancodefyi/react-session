function Greeting() {
  const title = 'What is a Component?'
  return (
    <div className="card">
      <h1 className="ev-title">{title}</h1>
      <p className="desc">
        A component is just a function that returns JSX. The function name must
        start with a capital letter so React treats it as a component.
      </p>

      <div className="row">
        <span className="pill pill-green">function Greeting()</span>
        <span className="pill pill-blue">returns JSX</span>
      </div>

      <p className="demo-note" style={{ marginTop: 14 }}>Rendered as: &lt;Greeting /&gt;</p>
    </div>
  )
}

export default Greeting