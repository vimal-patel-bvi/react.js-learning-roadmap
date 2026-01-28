// Creating Custom Hooks In React

import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Simple custom hook example
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
}

function CustomHooksIntro() {
  const [isOn, toggleIsOn] = useToggle(false);
  const [username, setUsername] = useLocalStorage('demo-username', '');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Creating Custom Hooks In React</h2>
      <p>
        Custom hooks let you extract and reuse stateful logic. They are just regular functions that use other hooks
        (<code>useState</code>, <code>useEffect</code>, etc.) and follow the <strong>\"use\"</strong> naming rule.
      </p>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
        }}
      >
        <h3>Example 1: useToggle Hook</h3>
        <p>
          <code>useToggle</code> returns a boolean value and a function to toggle it. This logic can be reused across
          many components.
        </p>
        <button
          onClick={toggleIsOn}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: isOn ? '#4CAF50' : '#f44336',
            color: '#fff',
          }}
        >
          {isOn ? 'ON' : 'OFF'}
        </button>
        <p style={{ marginTop: '10px' }}>Current value: {String(isOn)}</p>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#e3f2fd',
        }}
      >
        <h3>Example 2: useLocalStorage Hook (Reused Here)</h3>
        <p>
          We are also using the <code>useLocalStorage</code> hook (defined in <code>src/hooks/useLocalStorage.js</code>
          ) to persist the username to <code>localStorage</code>.
        </p>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #2196F3',
            width: '100%',
            maxWidth: '300px',
          }}
        />
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
          Value is stored in <code>localStorage</code> under key <code>\"demo-username\"</code>.
        </p>
      </div>
    </div>
  );
}

export default CustomHooksIntro;

