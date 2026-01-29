// Tutorial: useMemo In React

import { useState, useMemo } from 'react';

// Simulate expensive computation
function expensiveCalculation(n) {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += n * i;
  }
  return result;
}

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // WITHOUT useMemo: runs on every render (even when only name changes)
  // const computed = expensiveCalculation(count);

  // WITH useMemo: only recomputes when count changes
  const computed = useMemo(() => {
    console.log('useMemo: computing...');
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>useMemo In React</h2>
      <p>
        <strong>useMemo</strong> memoizes the result of an expensive computation. It only recalculates when its
        dependency array changes, avoiding unnecessary work on every render.
      </p>

      <div style={{ marginTop: '20px', border: '2px solid #2196F3', padding: '15px', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
        <h3>Example: Expensive Calculation</h3>
        <p>Type in the name field — the heavy computation does NOT run. Change count — it runs once.</p>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name (triggers re-render only):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here..."
            style={{ padding: '8px', width: '100%', maxWidth: '300px', borderRadius: '5px', border: '1px solid #2196F3' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Count (triggers recompute):</label>
          <button
            onClick={() => setCount((c) => c + 1)}
            style={{ backgroundColor: '#2196F3', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '8px' }}
          >
            Increment
          </button>
          <span style={{ fontWeight: 'bold' }}>Count: {count}</span>
        </div>
        <p style={{ margin: 0 }}>
          <strong>Memoized result:</strong> {computed}
        </p>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Syntax &amp; When to Use</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '12px', borderRadius: '5px', overflow: 'auto', fontSize: '13px' }}>
{`const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);  // only recompute when a or b changes`}
        </pre>
        <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
          <li>Use for <strong>expensive calculations</strong> that depend on specific values.</li>
          <li>Dependency array: recompute only when those values change.</li>
          <li>Do not use for every small calculation — useMemo has its own cost.</li>
        </ul>
      </div>
    </div>
  );
}

export default UseMemoDemo;
