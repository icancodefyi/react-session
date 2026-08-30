import { useState } from 'react'
import CodeBlock from './site/CodeBlock.jsx'
import { liveStages } from './live-project/stages'
import { conceptExamples } from './examples'

const SOLUTIONS_PASSWORD = 'session-zaid'

const groups = [
  {
    kind: 'concept',
    name: 'Concept Examples',
    items: conceptExamples,
  },
  {
    kind: 'stage',
    name: 'Live Project — Event RSVP',
    items: liveStages,
  },
]

function findItem(id) {
  for (const group of groups) {
    const found = group.items.find((item) => item.id === id)
    if (found) return { found, kind: group.kind }
  }
  return null
}

function ConceptView({ item, unlocked, onRequestSolution, onRelock }) {
  const [previewMode, setPreviewMode] = useState('starter')
  const [codeMode, setCodeMode] = useState('starter')

  const Active = previewMode === 'starter' ? item.Starter : item.Solution

  function switchPreview(mode) {
    if (mode === 'solution' && !unlocked) return onRequestSolution()
    setPreviewMode(mode)
  }

  function switchCode(mode) {
    if (mode === 'solution' && !unlocked) return onRequestSolution()
    setCodeMode(mode)
  }

  return (
    <>
      <h1>
        <span className="ex-num">{item.num}</span> {item.title}
      </h1>
      <p className="subhead">{item.teach}</p>

      <div className="ex-panel theory">
        <div className="ex-label">Theory — explain this out loud before the demo</div>
        {item.theory.map((section) => (
          <section key={section.title} className="theory-section">
            <h4>{section.title}</h4>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="ex-panel">
        <div className="ex-label">
          Preview
          <div className="seg">
            <button
              className={'seg-btn' + (previewMode === 'starter' ? ' active' : '')}
              onClick={() => switchPreview('starter')}
            >
              Starter
            </button>
            <button
              className={'seg-btn' + (previewMode === 'solution' ? ' active' : '')}
              onClick={() => switchPreview('solution')}
            >
              {unlocked ? 'Solution' : 'Solution 🔒'}
            </button>
          </div>
        </div>
        <Active />
      </div>

      <div className="ex-panel">
        <div className="ex-label">
          Code — students copy-paste the Starter, you build the Solution together.
          <div className="seg">
            <button
              className={'seg-btn' + (codeMode === 'starter' ? ' active' : '')}
              onClick={() => switchCode('starter')}
            >
              Starter
            </button>
            <button
              className={'seg-btn' + (codeMode === 'solution' ? ' active' : '')}
              onClick={() => switchCode('solution')}
            >
              {unlocked ? 'Solution' : 'Solution 🔒'}
            </button>
          </div>
        </div>
        <CodeBlock
          code={codeMode === 'starter' ? item.starterCode : item.solutionCode}
          title={
            codeMode === 'starter'
              ? 'src/examples/Starter.jsx'
              : 'src/examples/Solution.jsx'
          }
        />
      </div>

      {unlocked ? (
        <div className="unlocked-bar">
          <span>🔓 Solutions unlocked for this browser</span>
          <button className="btn btn-auto" onClick={onRelock}>Lock again</button>
        </div>
      ) : (
        <p className="subhead lock-hint">
          🔒 Solutions unlock after the session with the password you get during the session.
        </p>
      )}
    </>
  )
}

function LockModal({ onClose, onUnlock }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (input === SOLUTIONS_PASSWORD) {
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className="lock-overlay" onClick={onClose}>
      <form
        className="lock-modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
        <h3>🔒 Solutions are locked</h3>
        <p className="demo-note">
          The Starter gives you the UI. The Solution — the logic shown live in the
          session — unlocks with the password shared at the end of the workshop.
        </p>
        <input
          className="name-input"
          type="password"
          placeholder="Enter password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
        {error ? <p className="lock-error">Wrong password — try again.</p> : null}
        <div className="row">
          <button className="btn" type="submit">Unlock</button>
          <button className="btn btn-auto" type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

function App() {
  const [activeId, setActiveId] = useState('jsx')
  const [solutionsUnlocked, setSolutionsUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem('csi-unlocked') === '1'
    } catch {
      return false
    }
  })
  const [showLock, setShowLock] = useState(false)

  function unlock() {
    try {
      sessionStorage.setItem('csi-unlocked', '1')
    } catch {
      /* storage unavailable */
    }
    setSolutionsUnlocked(true)
    setShowLock(false)
  }

  function relock() {
    try {
      sessionStorage.removeItem('csi-unlocked')
    } catch {
      /* storage unavailable */
    }
    setSolutionsUnlocked(false)
  }

  const current = findItem(activeId)
  const Active = current?.found?.Component ?? null

  return (
    <div className="viewer">
      <aside className="sidebar">
        <h2>Workshop Reference</h2>
        {groups.map((group) => (
          <div key={group.id || group.name || group.kind}>
            <h2>{group.name}</h2>
            {group.items.map((item) => (
              <button
                key={item.id}
                className={'side-item' + (item.id === activeId ? ' active' : '')}
                onClick={() => setActiveId(item.id)}
              >
                {item.num ? `${item.num} · ${item.title}` : item.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main className="content">
        {!current ? (
          <p className="subhead">Pick an example from the sidebar.</p>
        ) : current.kind === 'concept' ? (
          <ConceptView
            key={activeId}
            item={current.found}
            unlocked={solutionsUnlocked}
            onRequestSolution={() => setShowLock(true)}
            onRelock={relock}
          />
        ) : (
          <>
            <h1>{current.found.name}</h1>
            <p className="subhead">
              Live project stage — run it in the browser, no branch switching needed.
            </p>
            {Active ? <Active /> : null}
          </>
        )}
      </main>

      {showLock ? (
        <LockModal
          onClose={() => setShowLock(false)}
          onUnlock={unlock}
        />
      ) : null}
    </div>
  )
}

export default App