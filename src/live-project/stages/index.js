import Stage0 from './stage-0.jsx'
import Stage1 from './stage-1.jsx'
import Stage2 from './stage-2.jsx'
import Stage3 from './stage-3.jsx'
import Stage4 from './stage-4.jsx'
import Stage5 from './stage-5.jsx'
import Stage6 from './stage-6.jsx'
import Stage7 from './stage-7.jsx'
import Stage8 from './stage-8.jsx'

export const liveStages = [
  { id: 'stage-0', name: 'Stage 0 — Static UI', Component: Stage0 },
  { id: 'stage-1', name: 'Stage 1 — Components', Component: Stage1 },
  { id: 'stage-2', name: 'Stage 2 — JSX is dynamic', Component: Stage2 },
  { id: 'stage-3', name: 'Stage 3 — Props', Component: Stage3 },
  { id: 'stage-4', name: 'Stage 4 — useState', Component: Stage4 },
  { id: 'stage-5', name: 'Stage 5 — Events', Component: Stage5 },
  { id: 'stage-6', name: 'Stage 6 — Conditional UI', Component: Stage6 },
  { id: 'stage-7', name: 'Stage 7 — useEffect', Component: Stage7 },
  { id: 'stage-8', name: 'Stage 8 — useRef (final)', Component: Stage8 },
]