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
    theory: [
      {
        title: 'What it is',
        points: [
          'JSX is HTML-like syntax written inside JavaScript — markup and logic in one file.',
          'Browsers can\u2019t run JSX. Vite compiles it into plain createElement(...) calls at build time.',
          'It is not a new language — it is sugar over normal React function calls.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          '{curly braces} run real JavaScript: variables, arithmetic, .toUpperCase(), string length, anything.',
          'Anything between the braces gets evaluated before anything is painted on screen.',
          'You can build markup from data instead of typing it out.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'One component returns ONE element — wrap in a <div>, <main>, or <> ... </> fragment.',
          'Use className, not class (class is a JavaScript keyword).',
          'If the screen stays unchanged, you typed the data in rather than evaluating it — look for missing braces.',
        ],
      },
    ],
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
    theory: [
      {
        title: 'What it is',
        points: [
          'A component is just a function that returns JSX. The whole app is a tree of these functions.',
          'Components answer one question: "render this chunk of the page here".',
          'It is how pages stop being one giant HTML file and become small building blocks.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'Split a page into pieces: Badge, MemberName, MemberRole — each is its own function.',
          'Reuse a piece anywhere without copying its markup again.',
          'App composes smaller components, like stacking blocks.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'Component names MUST start with a capital letter. Lowercase is treated as a plain HTML tag (<div>, <p>).',
          'A component function runs on every render — keep it pure: same input in, same JSX out.',
          'The next topic (Props) is how a piece gets its data — for now every piece draws itself.',
        ],
      },
    ],
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
    theory: [
      {
        title: 'What it is',
        points: [
          'Props are the arguments a component receives — parameters for markup.',
          'function PricingCard({ plan, price, features, popular }) — destructured from a single props object.',
          'Data flows one way: parent hands props to child, child never sends them back up.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'One component + different props = many different cards on the page.',
          'Props can be strings, numbers, booleans, arrays — even other JSX.',
          'popular with no value means popular={true} — a common shorthand.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'Props are READ-ONLY inside the component — never reassign them.',
          'A component re-renders whenever its props change.',
          'Forgetting to pass a prop gives undefined — render it with a default value if you like.',
        ],
      },
    ],
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
    theory: [
      {
        title: 'What it is',
        points: [
          'State is data the component remembers between renders. useState(0) returns [value, setValue].',
          'A plain variable resets to 0 every render; state keeps its last value.',
          'Calling the setter tells React two things: change the value AND redraw the screen.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'const [likes, setLikes] = useState(0) — value, then its update function. Always destructure in this order.',
          'Only the component that owns the state re-renders when it changes.',
          'New state replaces the old one — that is why strings/arrays are copied before updating.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'Never mutate directly: likes++ or state.count = 5 is wrong; always use the setter.',
          'Hooks must run at the top level of the component — not inside if/loops/functions.',
          'When the next value depends on the previous one, use the function form: setLikes(prev => prev + 1).',
        ],
      },
    ],
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
    theory: [
      {
        title: 'What it is',
        points: [
          'Events are the real world pushing back: clicks, typing, form submits.',
          'React wires them with handlers: onClick, onChange, onSubmit.',
          'A handler is a function you pass to an element — React calls it when the event fires.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'onClick={handleLike} — pass the function itself, never handleLike() with parentheses.',
          'onChange={(e) => setName(e.target.value)} is the controlled-input pattern: every keystroke lands in state.',
          'e.preventDefault() stops a form submit from reloading the page (a reload would wipe all state).',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'onClick={fn()} runs immediately and does nothing later — the classic beginner bug.',
          'Form submits reload the page unless you preventDefault.',
          'Events only work when attached inside JSX on the actual element users touch.',
        ],
      },
    ],
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
    theory: [
      {
        title: 'What it is',
        points: [
          'The screen you see is a decision: is the user joined or not? In React that decision is plain JavaScript inside JSX.',
          'No template syntax — just expressions that choose which JSX to render.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'Ternary: {joined ? <p>You\u2019re attending</p> : <button>Join</button>}.',
          'Short-circuit: {isLoading && <Spinner />} — renders the right side only when the left side is true.',
          'Whole-screen switch: if (!user) return <Login /> — return different trees from the component.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'A condition must produce JSX, null, or nothing — never raw numbers. {count && <X/>} renders the literal "0" when count is 0.',
          'Use ternary when both branches exist; && when only one branch does.',
          'The state you check must already exist — conditions never create state.',
        ],
      },
    ],
    Starter: ConditionalStarter,
    Solution: ConditionalSolution,
    starterCode: ConditionalStarterCode,
    solutionCode: ConditionalSolutionCode,
  },
  {
    id: 'effects',
    num: '07',
    title: 'useEffect',
    teach: 'Do something when state changes — sync the outside world (the tab title).',
    theory: [
      {
        title: 'What it is',
        points: [
          'Rendering only paints the screen. Side effects are things to do AROUND it: change the tab title, fetch data, start timers, save.',
          'useEffect runs a function AFTER the component paints, and again when its dependencies change.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'useEffect(() => { document.title = `Count is ${count}` }, [count]) — runs whenever count changes.',
          'The dependency array is the "watch list": React re-runs the effect only when those values change.',
          'Empty array [] means run once, right after the first render.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'Anything the effect reads from state/props belongs in the dependency array — otherwise it reads stale values.',
          'Return a cleanup function to undo the effect: clearTimeout, remove listeners, unsubscribe.',
          'Do not set state directly inside an effect unless it really needs the request-first render — prefer computing during render.',
        ],
      },
    ],
    Starter: EffectsStarter,
    Solution: EffectsSolution,
    starterCode: EffectsStarterCode,
    solutionCode: EffectsSolutionCode,
  },
  {
    id: 'refs',
    num: '08',
    title: 'useRef',
    teach: 'Reach for elements directly without causing a re-render.',
    theory: [
      {
        title: 'What it is',
        points: [
          'A ref is a box: useRef(null) gives { current: null } — a value React keeps but does not watch.',
          'Refs are for things state should NOT redraw for: focusing inputs, scrolling, measuring, storing timers.',
          'ref={inputRef} attaches the box to a real element; inputRef.current becomes the actual <input>.',
        ],
      },
      {
        title: 'Key ideas',
        points: [
          'The killer feature: changing ref.current does NOT trigger a render — unlike state.',
          'focus(), scrollIntoView(), measuring size — DOM things React data cannot do.',
          'Use state for what the user SEES, refs for what you need to grab directly.',
        ],
      },
      {
        title: 'Rules & gotchas',
        points: [
          'Read ref.current in event handlers, not in JSX — writing it there never updates the screen.',
          'ref.current is null until the element mounts — guard or read it inside the handler.',
          'Do not put a ref on every input just to read a value — a controlled input (state) is usually better.',
        ],
      },
    ],
    Starter: RefsStarter,
    Solution: RefsSolution,
    starterCode: RefsStarterCode,
    solutionCode: RefsSolutionCode,
  },
]