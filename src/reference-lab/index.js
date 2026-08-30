import ComponentBasics from './components/01-component-basics.jsx'
import Composition from './components/02-composition.jsx'
import Children from './components/03-children.jsx'
import Fragments from './components/04-fragments.jsx'

import PropsBasics from './props/01-props-basics.jsx'
import PropsDefaults from './props/02-props-defaults.jsx'
import PropsSpread from './props/03-props-spread.jsx'
import PropsImmutable from './props/04-props-immutable.jsx'

import StateVsVariable from './state/01-state-vs-variable.jsx'
import UpdaterFunction from './state/02-updater-function.jsx'
import ObjectState from './state/03-object-state.jsx'
import ArrayState from './state/04-array-state.jsx'

import EventObject from './events/01-event-object.jsx'
import ControlledInput from './events/02-controlled-input.jsx'

import Ternary from './conditional/01-ternary.jsx'
import ShortCircuit from './conditional/02-short-circuit.jsx'
import Multiway from './conditional/03-multiway.jsx'

import MapList from './lists/01-map.jsx'
import Keys from './lists/02-keys.jsx'

import EffectMount from './effects/01-effect-mount.jsx'
import EffectDeps from './effects/02-effect-deps.jsx'
import EffectCleanup from './effects/03-effect-cleanup.jsx'

import RefFocus from './refs/01-ref-focus.jsx'
import RefVsState from './refs/02-ref-vs-state.jsx'

export const labSections = [
  {
    id: 'components',
    name: 'Components',
    items: [
      { id: 'comp-basics', name: 'Component basics', Component: ComponentBasics },
      { id: 'comp-composition', name: 'Composition', Component: Composition },
      { id: 'comp-children', name: 'props.children', Component: Children },
      { id: 'comp-fragments', name: 'Fragments', Component: Fragments },
    ],
  },
  {
    id: 'props',
    name: 'Props',
    items: [
      { id: 'props-basics', name: 'Props basics', Component: PropsBasics },
      { id: 'props-defaults', name: 'Default values', Component: PropsDefaults },
      { id: 'props-spread', name: 'Spread {...event}', Component: PropsSpread },
      { id: 'props-immutable', name: 'Props are read-only', Component: PropsImmutable },
    ],
  },
  {
    id: 'state',
    name: 'State & useState',
    items: [
      { id: 'state-vs-var', name: 'State vs plain variable', Component: StateVsVariable },
      { id: 'state-updater', name: 'Functional updater', Component: UpdaterFunction },
      { id: 'state-object', name: 'Object state', Component: ObjectState },
      { id: 'state-array', name: 'Array state', Component: ArrayState },
    ],
  },
  {
    id: 'events',
    name: 'Events',
    items: [
      { id: 'event-object', name: 'Event object', Component: EventObject },
      { id: 'event-controlled', name: 'Controlled input', Component: ControlledInput },
    ],
  },
  {
    id: 'conditional',
    name: 'Conditional rendering',
    items: [
      { id: 'cond-ternary', name: 'Ternary', Component: Ternary },
      { id: 'cond-short-circuit', name: '&& short-circuit', Component: ShortCircuit },
      { id: 'cond-multiway', name: 'Multiple branches', Component: Multiway },
    ],
  },
  {
    id: 'lists',
    name: 'Lists & keys',
    items: [
      { id: 'list-map', name: 'Render with .map', Component: MapList },
      { id: 'list-keys', name: 'Keys', Component: Keys },
    ],
  },
  {
    id: 'effects',
    name: 'useEffect',
    items: [
      { id: 'effect-mount', name: 'Run once on mount', Component: EffectMount },
      { id: 'effect-deps', name: 'Dependency array', Component: EffectDeps },
      { id: 'effect-cleanup', name: 'Cleanup', Component: EffectCleanup },
    ],
  },
  {
    id: 'refs',
    name: 'useRef',
    items: [
      { id: 'ref-focus', name: 'Focus a DOM node', Component: RefFocus },
      { id: 'ref-norender', name: 'Ref vs state', Component: RefVsState },
    ],
  },
]