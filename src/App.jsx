import { useState } from 'react'
import './App.css'

// Import all tutorial components
import ComponentReusability from './components/ComponentReusability'
import PropsBasics from './components/PropsBasics'
import DestructuringProps from './components/DestructuringProps'
import PropsImmutability from './components/PropsImmutability'
import PassingArraysObjects from './components/PassingArraysObjects'
import RenderingArrays from './components/RenderingArrays'
import RenderingArrayOfObjects from './components/RenderingArrayOfObjects'
import RenderingComponentsInLoop from './components/RenderingComponentsInLoop'
import ConditionalRendering from './components/ConditionalRendering'
import ConditionalRenderingWithVariables from './components/ConditionalRenderingWithVariables'
import TernaryOperators from './components/TernaryOperators'
import ConditionalListItems from './components/ConditionalListItems'
import ConditionalMessageTernary from './components/ConditionalMessageTernary'
import EventHandling from './components/EventHandling'
import PropsVsState from './components/PropsVsState'
import StateBasics from './components/StateBasics'
import MultipleStates from './components/MultipleStates'
import HandlingInputFields from './components/HandlingInputFields'
import HandlingMultipleInputs from './components/HandlingMultipleInputs'
import HandlingFormSubmission from './components/HandlingFormSubmission'
import UseEffectHook from './components/UseEffectHook'
import MakingAPICall from './components/MakingAPICall'
import BasicRouting from './components/BasicRouting'
import RoutingWithLayout from './components/RoutingWithLayout'
import PublicPrivateRouting from './components/PublicPrivateRouting'

const tutorials = [
  { id: 9, name: 'Props Basics', component: PropsBasics },
  { id: 10, name: 'Destructuring Props', component: DestructuringProps },
  { id: 11, name: 'Props Immutability', component: PropsImmutability },
  { id: 8, name: 'Component Reusability', component: ComponentReusability },
  { id: 12, name: 'Passing Arrays & Objects', component: PassingArraysObjects },
  { id: 13, name: 'Rendering Arrays', component: RenderingArrays },
  { id: 14, name: 'Rendering Array of Objects', component: RenderingArrayOfObjects },
  { id: 15, name: 'Rendering Components in Loop', component: RenderingComponentsInLoop },
  { id: 16, name: 'Conditional Rendering', component: ConditionalRendering },
  { id: 17, name: 'Conditional Rendering with Variables', component: ConditionalRenderingWithVariables },
  { id: 18, name: 'Ternary Operators', component: TernaryOperators },
  { id: 19, name: 'Conditional List Items', component: ConditionalListItems },
  { id: 20, name: 'Conditional Message with Ternary', component: ConditionalMessageTernary },
  { id: 21, name: 'Event Handling', component: EventHandling },
  { id: 22, name: 'Props vs State', component: PropsVsState },
  { id: 23, name: 'State Basics', component: StateBasics },
  { id: 24, name: 'Multiple States', component: MultipleStates },
  { id: 25, name: 'Handling Input Fields', component: HandlingInputFields },
  { id: 26, name: 'Handling Multiple Inputs', component: HandlingMultipleInputs },
  { id: 27, name: 'Handling Form Submission', component: HandlingFormSubmission },
  { id: 48, name: 'useEffect Hook', component: UseEffectHook },
  { id: 49, name: 'Making API Call', component: MakingAPICall },
  { id: 50, name: 'Basic Routing', component: BasicRouting },
  { id: 51, name: 'Routing with Layout', component: RoutingWithLayout },
  { id: 52, name: 'Public & Private Routing', component: PublicPrivateRouting },
]

function App() {
  const [selectedTutorial, setSelectedTutorial] = useState(8)
  
  const CurrentComponent = tutorials.find(t => t.id === selectedTutorial)?.component || ComponentReusability
  const currentTutorialName = tutorials.find(t => t.id === selectedTutorial)?.name || 'Component Reusability'

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React.js Training - Tutorials</h1>
        <p>Select a tutorial from the dropdown to view examples</p>
      </header>

      <div className="navigation-container">
        <label htmlFor="tutorial-select" className="select-label">
          Select Tutorial:
        </label>
        <select
          id="tutorial-select"
          value={selectedTutorial}
          onChange={(e) => setSelectedTutorial(Number(e.target.value))}
          className="tutorial-select"
        >
          {tutorials.map(tutorial => (
            <option key={tutorial.id} value={tutorial.id}>
              {tutorial.id}: {tutorial.name}
            </option>
          ))}
        </select>
      </div>

      <div className="tutorial-header">
        <h2>📚 {currentTutorialName}</h2>
      </div>

      <main className="tutorial-content">
        <CurrentComponent />
      </main>

      <footer className="app-footer">
        <p>React.js Training Session - All Tutorial Components</p>
      </footer>
    </div>
  )
}

export default App
