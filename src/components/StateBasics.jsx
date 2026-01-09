// Tutorial 23: State In React

import { useState } from 'react';

function StateBasics() {
  // Basic state declaration
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [color, setColor] = useState('blue');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 23: State In React</h2>
      <p>
        <strong>State</strong> allows components to create and manage their own data that can change over time.
        When state changes, React re-renders the component.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Counter State</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ backgroundColor: '#2196F3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Increment
          </button>
          <button 
            onClick={() => setCount(count - 1)}
            style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Decrement
          </button>
          <button 
            onClick={() => setCount(0)}
            style={{ backgroundColor: '#FF9800', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: Input State</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{ padding: '10px', fontSize: '16px', width: '300px', borderRadius: '5px', border: '2px solid #4CAF50' }}
          />
          <p style={{ marginTop: '10px', fontSize: '18px' }}>
            Hello, <strong>{name || 'Guest'}</strong>!
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Boolean State</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            style={{ backgroundColor: '#FF9800', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            {isVisible ? 'Hide' : 'Show'} Message
          </button>
          {isVisible && (
            <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#fff3e0', borderRadius: '5px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>This message is visible!</p>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: Color State</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <div style={{ 
            width: '200px', 
            height: '100px', 
            backgroundColor: color, 
            borderRadius: '5px',
            margin: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            {color}
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button onClick={() => setColor('red')} style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Red</button>
            <button onClick={() => setColor('blue')} style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Blue</button>
            <button onClick={() => setColor('green')} style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Green</button>
            <button onClick={() => setColor('purple')} style={{ backgroundColor: 'purple', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Purple</button>
            <button onClick={() => setColor('orange')} style={{ backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Orange</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>useState Hook Syntax:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
{`// Import useState
import { useState } from 'react';

// Declare state
const [stateName, setStateName] = useState(initialValue);

// Update state
setStateName(newValue);

// Example
const [count, setCount] = useState(0);
setCount(count + 1);`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>useState</strong> returns an array: [value, setter function]</li>
          <li><strong>Initial value</strong> is set only on first render</li>
          <li><strong>State updates</strong> trigger component re-render</li>
          <li><strong>Never mutate state directly</strong> - always use setter function</li>
          <li><strong>State is component-specific</strong> - each component has its own state</li>
        </ul>
      </div>
    </div>
  );
}

export default StateBasics;

