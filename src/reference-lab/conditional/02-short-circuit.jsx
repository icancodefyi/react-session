function Notification() {
  const unread = 3
  const zero = 0

  return (
    <div className="card">
      <h1 className="ev-title">&& short-circuit</h1>
      <p className="going">
        Inbox
        {unread > 0 && <span className="pill pill-red"> {unread} new</span>}
      </p>
      <p className="desc">3 &gt; 0 is true, so the right side renders.</p>
      <p className="demo-note">
        {zero && 'This side never renders'} ← false values render nothing. Avoid{' '}
        <span className="pill pill-yellow">0 &amp;&amp;</span> when 0 is a real
        number you want to show.
      </p>
    </div>
  )
}

export default Notification