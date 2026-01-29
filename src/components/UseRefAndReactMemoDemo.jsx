// Tutorial: useRef, React.memo and Other Important Topics

import { useState, useRef, useCallback } from 'react';
import { memo } from 'react';

// React.memo: skip re-renders when props are the same (shallow compare)
const MemoizedChild = memo(function MemoizedChild({ label, count, onIncrement }) {
  console.log('MemoizedChild rendered:', label);
  return (
    <div style={{ border: '1px solid #4CAF50', padding: '10px', borderRadius: '5px', marginBottom: '8px', backgroundColor: '#e8f5e9' }}>
      <span>{label}: {count} </span>
      <button onClick={onIncrement} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '4px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '8px' }}>+1</button>
    </div>
  );
});

function UseRefAndReactMemoDemo() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  const handleIncrementA = useCallback(() => setCountA((c) => c + 1), []);
  const handleIncrementB = useCallback(() => setCountB((c) => c + 1), []);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>useRef, React.memo and Other Important Topics</h2>
      <p>
        <strong>useRef</strong> holds a mutable value that does not trigger re-renders (e.g. DOM node, previous value).
        <strong> React.memo</strong> memoizes a component so it only re-renders when its props change.
      </p>

      <div style={{ marginTop: '20px', border: '2px solid #2196F3', padding: '15px', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
        <h3>useRef: DOM Reference</h3>
        <p>Ref is attached to the input. Click the button to focus it programmatically.</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="Focus me via ref"
          style={{ padding: '8px', width: '100%', maxWidth: '300px', borderRadius: '5px', border: '1px solid #2196F3', marginRight: '8px' }}
        />
        <button onClick={focusInput} style={{ backgroundColor: '#2196F3', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Focus input</button>
      </div>

      <div style={{ marginTop: '20px', border: '2px solid #9C27B0', padding: '15px', borderRadius: '8px', backgroundColor: '#f3e5f5' }}>
        <h3>useRef: Render Count (No Re-render)</h3>
        <p>We store render count in a ref — updating it does not cause re-renders.</p>
        <p style={{ fontWeight: 'bold' }}>This component has rendered {renderCountRef.current} time(s).</p>
      </div>

      <div style={{ marginTop: '20px', border: '2px solid #4CAF50', padding: '15px', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
        <h3>React.memo + useCallback</h3>
        <p>Memoized children only re-render when their props change. Check console for "MemoizedChild rendered".</p>
        <MemoizedChild label="A" count={countA} onIncrement={handleIncrementA} />
        <MemoizedChild label="B" count={countB} onIncrement={handleIncrementB} />
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Other Important React Topics (Brief)</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>useRef</strong>: DOM refs, mutable values that don’t trigger re-renders.</li>
          <li><strong>React.memo</strong>: avoid re-renders when props are shallowly equal.</li>
          <li><strong>Fragment</strong>: <code>&lt;&gt;...&lt;/&gt;</code> or <code>&lt;React.Fragment&gt;</code> to avoid extra DOM nodes.</li>
          <li><strong>Key prop</strong>: stable unique key in lists (e.g. <code>key=&#123;item.id&#125;</code>) for correct reconciliation.</li>
          <li><strong>Strict Mode</strong>: double-invokes in dev to surface side-effect bugs.</li>
          <li><strong>Error Boundaries</strong>: catch errors in child tree and show fallback UI.</li>
          <li><strong>Portals</strong>: <code>createPortal</code> to render children into another DOM node.</li>
        </ul>
      </div>
    </div>
  );
}

export default UseRefAndReactMemoDemo;
