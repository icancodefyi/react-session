import JsxStarter from './jsx/Starter.jsx'
import JsxSolution from './jsx/Solution.jsx'
import ComponentsStarter from './components/Starter.jsx'
import ComponentsSolution from './components/Solution.jsx'
import PropsStarter from './props/Starter.jsx'
import PropsSolution from './props/Solution.jsx'
import StateStarter from './state/Starter.jsx'
import StateSolution from './state/Solution.jsx'
import EventsStarter from './events/Starter.jsx'
import EventsSolution from './events/Solution.jsx'
import ConditionalStarter from './conditional/Starter.jsx'
import ConditionalSolution from './conditional/Solution.jsx'
import ListsStarter from './lists/Starter.jsx'
import ListsSolution from './lists/Solution.jsx'
import EffectsStarter from './effects/Starter.jsx'
import EffectsSolution from './effects/Solution.jsx'
import RefsStarter from './refs/Starter.jsx'
import RefsSolution from './refs/Solution.jsx'

import JsxStarterCode from './jsx/Starter.jsx?raw'
import JsxSolutionCode from './jsx/Solution.jsx?raw'
import ComponentsStarterCode from './components/Starter.jsx?raw'
import ComponentsSolutionCode from './components/Solution.jsx?raw'
import PropsStarterCode from './props/Starter.jsx?raw'
import PropsSolutionCode from './props/Solution.jsx?raw'
import StateStarterCode from './state/Starter.jsx?raw'
import StateSolutionCode from './state/Solution.jsx?raw'
import EventsStarterCode from './events/Starter.jsx?raw'
import EventsSolutionCode from './events/Solution.jsx?raw'
import ConditionalStarterCode from './conditional/Starter.jsx?raw'
import ConditionalSolutionCode from './conditional/Solution.jsx?raw'
import ListsStarterCode from './lists/Starter.jsx?raw'
import ListsSolutionCode from './lists/Solution.jsx?raw'
import EffectsStarterCode from './effects/Starter.jsx?raw'
import EffectsSolutionCode from './effects/Solution.jsx?raw'
import RefsStarterCode from './refs/Starter.jsx?raw'
import RefsSolutionCode from './refs/Solution.jsx?raw'

export const conceptExamples = [
  {
    id: 'jsx',
    num: '01',
    title: 'JSX',
    teach: 'Layout with JavaScript. Variables, expressions, and objects inside {curly braces}.',
    Starter: JsxStarter,
    Solution: JsxSolution,
    starterCode: JsxStarterCode,
    solutionCode: JsxSolutionCode,
  },
  {
    id: 'components',
    num: '02',
    title: 'Components',
    teach: 'Break the page into small, reusable pieces. Build the UI from custom tags.',
    Starter: ComponentsStarter,
    Solution: ComponentsSolution,
    starterCode: ComponentsStarterCode,
    solutionCode: ComponentsSolutionCode,
  },
  {
    id: 'props',
    num: '03',
    title: 'Props',
    teach: 'Make components accept data. One component, many layouts.',
    Starter: PropsStarter,
    Solution: PropsSolution,
    starterCode: PropsStarterCode,
    solutionCode: PropsSolutionCode,
  },
  {
    id: 'state',
    num: '04',
    title: 'useState',
    teach: 'Give the page memory. Variables reset on reload — state survives.',
    Starter: StateStarter,
    Solution: StateSolution,
    starterCode: StateStarterCode,
    solutionCode: StateSolutionCode,
  },
  {
    id: 'events',
    num: '05',
    title: 'Events',
    teach: 'React to a click or a keystroke. Handle input, then re-render.',
    Starter: EventsStarter,
    Solution: EventsSolution,
    starterCode: EventsStarterCode,
    solutionCode: EventsSolutionCode,
  },
  {
    id: 'conditional',
    num: '06',
    title: 'Conditional',
    teach: 'Render different UI depending on state. The classic "if else" in JSX.',
    Starter: ConditionalStarter,
    Solution: ConditionalSolution,
    starterCode: ConditionalStarterCode,
    solutionCode: ConditionalSolutionCode,
  },
  {
    id: 'lists',
    num: '07',
    title: 'Lists & Keys',
    teach: 'Render arrays with .map() and give each item a key.',
    Starter: ListsStarter,
    Solution: ListsSolution,
    starterCode: ListsStarterCode,
    solutionCode: ListsSolutionCode,
  },
  {
    id: 'effects',
    num: '08',
    title: 'useEffect',
    teach: 'Do something when state changes — sync the outside world (the tab title).',
    Starter: EffectsStarter,
    Solution: EffectsSolution,
    starterCode: EffectsStarterCode,
    solutionCode: EffectsSolutionCode,
  },
  {
    id: 'refs',
    num: '09',
    title: 'useRef',
    teach: 'Reach for elements directly without causing a re-render.',
    Starter: RefsStarter,
    Solution: RefsSolution,
    starterCode: RefsStarterCode,
    solutionCode: RefsSolutionCode,
  },
]