import { useState } from 'react'
import { liveStages } from './live-project/stages'
import { labSections } from './reference-lab'

const groups = [{ id: 'live', name: 'Live Project — Event RSVP', items: liveStages }, ...labSections]

function App() {
  const [activeId, setActiveId] = useState('stage-0')

  const activeItem = groups
    .flatMap((g) => g.items)
    .find((i) => i.id === activeId)
  const Active = activeItem?.Component ?? null

  return (
    <div className="viewer">
      <aside className="sidebar">
        <h2>Workshop Reference</h2>
        {groups.map((group) => (
          <div key={group.id}>
            <h2>{group.name}</h2>
            {group.items.map((item) => (
              <button
                key={item.id}
                className={'side-item' + (item.id === activeId ? ' active' : '')}
                onClick={() => setActiveId(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <main className="content">
        {Active ? (
          <>
            <h1>{activeItem.name}</h1>
            <p className="subhead">
              {activeId.startsWith('stage-')
                ? 'Live project stage — run it in the browser, no branch switching needed.'
                : 'Reference lab — a tiny, focused example.'}
            </p>
            <Active />
          </>
        ) : (
          <p className="subhead">Pick an example from the sidebar.</p>
        )}
      </main>
    </div>
  )
}

export default App