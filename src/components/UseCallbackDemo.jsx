// Tutorial: useCallback In React

import { useState, useCallback } from 'react';

// Child that receives a callback prop (would re-render on parent re-render if callback reference changed)
function Button({ label, onClick }) {
  console.log(`Button "${label}" rendered`);
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '8px' }}
    >
      {label}
    </button>
  );
}

function UseCallbackDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // WITHOUT useCallback: new function every render → child re-renders every time
  // const handleIncrement = () => setCount((c) => c + 1);

  // WITH useCallback: same function reference until dependencies change
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
    setName('');
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback In React</h2>
      <p>
        <strong>useCallback</strong> returns a memoized callback. It keeps the same function reference between
        re-renders when dependencies do not change. Useful when passing callbacks to optimized children (e.g. wrapped in React.memo).
      </p>

      <div style={{ marginTop: '20px', border: '2px solid #4CAF50', padding: '15px', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
        <h3>Example: Stable Callback References</h3>
        <p>Check the console: buttons re-render less when we use useCallback (parent still re-renders on name/count change, but callback ref is stable).</p>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type to trigger parent re-render"
            style={{ padding: '8px', width: '100%', maxWidth: '320px', borderRadius: '5px', border: '1px solid #4CAF50', marginBottom: '10px' }}
          />
        </div>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Count: {count}</p>
        <Button label="Increment" onClick={handleIncrement} />
        <Button label="Reset" onClick={handleReset} />
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Syntax &amp; When to Use</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '12px', borderRadius: '5px', overflow: 'auto', fontSize: '13px' }}>
{`const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);  // same function reference until a or b changes`}
        </pre>
        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>Use when passing callbacks to <strong>React.memo</strong> children to avoid unnecessary re-renders.</li>
          <li>Use when the callback is a dependency of <strong>useEffect</strong> and you want a stable reference.</li>
          <li>Do not overuse — only when you have a real re-render or dependency issue.</li>
        </ul>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
