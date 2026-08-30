function Card({ title, children }) {
  return (
    <div className="card">
      <h1 className="ev-title">{title}</h1>
      <div className="desc">{children}</div>
    </div>
  )
}

function Composition() {
  return (
    <Card title="props.children">
      <p>Anything you put between &lt;Card&gt; and &lt;/Card&gt; lands inside.</p>
      <div className="row">
        <span className="pill pill-yellow">text</span>
        <span className="pill pill-green">JSX</span>
        <span className="pill pill-blue">components</span>
      </div>
    </Card>
  )
}

export default Composition