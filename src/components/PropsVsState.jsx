// Tutorial 22: State In React, Props V/S State In React

import { useState } from 'react';

// Child component receiving props
function UserCard({ name, email, age }) {
  return (
    <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#e3f2fd' }}>
      <h3>User Card (Props)</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p style={{ color: '#1976D2', fontSize: '12px' }}>⚠️ Props are read-only - cannot be changed here</p>
    </div>
  );
}

// Child component with its own state
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px', backgroundColor: '#e8f5e9' }}>
      <h3>Counter (State)</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(0)}
        style={{ backgroundColor: '#f44336', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
      >
        Reset
      </button>
      <p style={{ color: '#2e7d32', fontSize: '12px' }}>✅ State can be changed within this component</p>
    </div>
  );
}

function PropsVsState() {
  const [parentCount, setParentCount] = useState(0);
  const [userName, setUserName] = useState('John Doe');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 22: State In React, Props V/S State In React</h2>
      <p>
        Understanding the difference between <strong>Props</strong> and <strong>State</strong> is crucial in React.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Props vs State Comparison</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div style={{ border: '2px solid #2196F3', padding: '15px', borderRadius: '5px', backgroundColor: '#e3f2fd' }}>
            <h4 style={{ color: '#1976D2' }}>PROPS</h4>
            <ul style={{ textAlign: 'left' }}>
              <li>Passed from parent to child</li>
              <li>Read-only (immutable)</li>
              <li>Cannot be changed by child</li>
              <li>Used for configuration</li>
              <li>One-way data flow</li>
            </ul>
          </div>
          <div style={{ border: '2px solid #4CAF50', padding: '15px', borderRadius: '5px', backgroundColor: '#e8f5e9' }}>
            <h4 style={{ color: '#2e7d32' }}>STATE</h4>
            <ul style={{ textAlign: 'left' }}>
              <li>Managed within component</li>
              <li>Mutable (can be changed)</li>
              <li>Changed using setState</li>
              <li>Used for dynamic data</li>
              <li>Component re-renders on change</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: Props (Passed from Parent)</h3>
        <UserCard name="Alice" email="alice@example.com" age={25} />
        <UserCard name="Bob" email="bob@example.com" age={30} />
        <p style={{ color: '#666', fontSize: '14px' }}>
          Props are passed from parent component and cannot be modified by child component.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: State (Managed in Component)</h3>
        <Counter />
        <p style={{ color: '#666', fontSize: '14px' }}>
          State is managed within the component and can be changed using setState.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: Parent State Affecting Child Props</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Parent Count: {parentCount}</p>
          <button 
            onClick={() => setParentCount(parentCount + 1)}
            style={{ backgroundColor: '#FF9800', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '5px' }}
          >
            Increment Parent Count
          </button>
          <div style={{ marginTop: '15px' }}>
            <UserCard name={userName} email="user@example.com" age={parentCount + 20} />
          </div>
          <p style={{ color: '#666', fontSize: '14px' }}>
            When parent state changes, new props are passed to child component.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>When to Use Props:</h4>
        <ul>
          <li>Passing data from parent to child</li>
          <li>Configuration values</li>
          <li>Static or parent-controlled data</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e8f5e9', padding: '15px', borderRadius: '5px' }}>
        <h4>When to Use State:</h4>
        <ul>
          <li>Data that changes over time</li>
          <li>User input</li>
          <li>Component-specific data</li>
          <li>UI state (open/closed, selected, etc.)</li>
        </ul>
      </div>
    </div>
  );
}

export default PropsVsState;

