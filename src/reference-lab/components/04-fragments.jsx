function Fragment() {
  return (
    <div className="card">
      <h1 className="ev-title">Fragments</h1>
      <p className="desc">
        In JSX you must return ONE element. A fragment lets you group siblings
        without adding a useless wrapper div in the page.
      </p>
      <div className="row">
        <span className="pill pill-blue">&lt;&gt; ... &lt;/&gt;</span>
        <span className="pill pill-green">no extra div</span>
      </div>
    </div>
  )
}

export default Fragment