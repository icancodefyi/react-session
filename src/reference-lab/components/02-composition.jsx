function Navbar() {
  return (
    <div className="meta">
      <span>🏷️ CampusHub</span>
    </div>
  )
}

function Hero() {
  return <h1 className="ev-title">We are building the campus platform</h1>
}

function Footer() {
  return <p className="desc">© 2026 CSI ACE</p>
}

function Composition() {
  return (
    <div className="card">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Composition