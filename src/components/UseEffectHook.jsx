// Tutorial 48: useEffect Hook In React

import { useState, useEffect } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [timer, setTimer] = useState(0);
  const [data, setData] = useState(null);

  // Example 1: useEffect without dependencies - runs on every render
  useEffect(() => {
    console.log('Component rendered or updated');
  },[]);

  // Example 2: useEffect with empty dependency array - runs only once on mount
  useEffect(() => {
    console.log('Component mounted (runs only once)');
    document.title = 'React useEffect Tutorial';
    
    // Cleanup function - runs when component unmounts
    return () => {
      console.log('Component unmounting - cleanup');
      document.title = 'React App';
    };
  }, []);

  // Example 3: useEffect with dependencies - runs when dependencies change
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Example 4: useEffect with multiple dependencies
  useEffect(() => {
    console.log('Name or count changed:', { name, count });
  }, [name, count]);

  // Example 5: useEffect for window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log('Window width:', window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    console.log('Event listener added');

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener removed');
    };
  }, []);

  // Example 6: useEffect with timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    console.log('Timer started');

    // Cleanup: clear interval
    return () => {
      clearInterval(interval);
      console.log('Timer cleared');
    };
  }, []);

  // Example 7: useEffect with conditional logic
  console.log('count', count);
  useEffect(() => {
    if (count > 5) {
      alert('Count is greater than 5!');
    }
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tutorial 48: useEffect Hook In React</h2>
      <p>
        The <code>useEffect</code> hook lets you perform side effects in functional components.
        It runs after the component renders and can handle tasks like API calls, subscriptions, timers, and DOM manipulation.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Example 1: useEffect with Dependencies (Count)</h3>
        <div style={{ border: '2px solid #2196F3', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Check the browser tab title - it updates when count changes!
          </p>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '5px'
            }}
          >
            Increment Count
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '5px'
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 2: useEffect with Multiple Dependencies</h3>
        <div style={{ border: '2px solid #4CAF50', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '100%',
              maxWidth: '300px',
              borderRadius: '5px',
              border: '2px solid #4CAF50',
              boxSizing: 'border-box',
              marginBottom: '10px'
            }}
          />
          <p style={{ fontSize: '16px' }}>
            Name: <strong>{name || '(empty)'}</strong> | Count: <strong>{count}</strong>
          </p>
          <p style={{ fontSize: '12px', color: '#666' }}>
            useEffect runs when either name or count changes (check console)
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 3: useEffect for Window Resize</h3>
        <div style={{ border: '2px solid #FF9800', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Window Width: <strong style={{ color: '#FF9800' }}>{windowWidth}px</strong>
          </p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Resize your browser window to see the width update in real-time!
          </p>
          <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
            Event listener is added on mount and removed on unmount (check console)
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 4: useEffect with Timer (Interval)</h3>
        <div style={{ border: '2px solid #9C27B0', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#9C27B0' }}>
            Timer: {timer} seconds
          </p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Timer starts automatically when component mounts and clears when component unmounts
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Example 5: Conditional useEffect</h3>
        <div style={{ border: '2px solid #607D8B', padding: '15px', margin: '10px', borderRadius: '5px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Count: {count}</p>
          {count > 5 && (
            <p style={{ fontSize: '16px', color: '#f44336', fontWeight: 'bold' }}>
              ⚠️ Count is greater than 5!
            </p>
          )}
          <p style={{ fontSize: '12px', color: '#666' }}>
            useEffect checks if count &gt; 5 and logs to console
          </p>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: '#607D8B',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '5px'
            }}
          >
            Increment
          </button>
        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>useEffect Syntax:</h4>
        <pre style={{ backgroundColor: '#263238', color: '#fff', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// 1. Import useEffect
import { useState, useEffect } from 'react';

// 2. Basic syntax
useEffect(() => {
  // Side effect code here
}, [dependencies]);

// 3. Run on every render (no dependencies)
useEffect(() => {
  console.log('Runs on every render');
});

// 4. Run only once on mount (empty array)
useEffect(() => {
  console.log('Runs only once');
  return () => {
    // Cleanup function
  };
}, []);

// 5. Run when dependencies change
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);

// 6. Cleanup function
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => {
    clearInterval(timer); // Cleanup
  };
}, []);`}
        </pre>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '5px' }}>
        <h4>Key Points:</h4>
        <ul>
          <li><strong>Side Effects:</strong> Operations that affect something outside the component</li>
          <li><strong>Runs After Render:</strong> useEffect runs after the component renders</li>
          <li><strong>Dependency Array:</strong> Controls when the effect runs</li>
          <li><strong>Empty Array []:</strong> Runs only once on mount</li>
          <li><strong>No Array:</strong> Runs on every render (use carefully!)</li>
          <li><strong>Cleanup Function:</strong> Return a function to clean up (timers, listeners, etc.)</li>
          <li><strong>Multiple Effects:</strong> You can use multiple useEffect hooks in one component</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#fff3e0', padding: '15px', borderRadius: '5px' }}>
        <h4>Common Use Cases:</h4>
        <ul>
          <li>Fetching data from an API</li>
          <li>Setting up subscriptions or event listeners</li>
          <li>Updating the DOM (like document.title)</li>
          <li>Setting up timers (setInterval, setTimeout)</li>
          <li>Cleaning up resources when component unmounts</li>
        </ul>
      </div>
    </div>
  );
}

export default UseEffectHook;
