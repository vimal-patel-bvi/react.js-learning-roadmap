// Tutorial: Promises, Promise.all and Use Cases

import { useState } from 'react';

// Simulate async operations
const delay = (ms, value) => new Promise((resolve) => setTimeout(() => resolve(value), ms));
const failAfter = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error('Failed!')), ms));

function PromisesDemo() {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const runSinglePromise = async () => {
    setLoading(true);
    setResult('Running...');
    try {
      const data = await delay(800, 'Single promise resolved!');
      setResult(data);
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const runPromiseAll = async () => {
    setLoading(true);
    setResult('Running Promise.all...');
    try {
      const [a, b, c] = await Promise.all([
        delay(500, 'A'),
        delay(800, 'B'),
        delay(300, 'C'),
      ]);
      setResult(`Promise.all done: [${a}, ${b}, ${c}]`);
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const runPromiseAllSettled = async () => {
    setLoading(true);
    setResult('Running Promise.allSettled...');
    try {
      const results = await Promise.allSettled([
        delay(400, 'OK'),
        failAfter(200),
        delay(300, 'OK2'),
      ]);
      const summary = results.map((r, i) => (r.status === 'fulfilled' ? r.value : r.reason?.message)).join(', ');
      setResult('allSettled: ' + summary);
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const runPromiseRace = async () => {
    setLoading(true);
    setResult('Running Promise.race...');
    try {
      const first = await Promise.race([
        delay(1000, 'Slow'),
        delay(300, 'Fast'),
      ]);
      setResult('Race winner: ' + first);
    } catch (err) {
      setResult('Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const runPromiseAny = async () => {
    setLoading(true);
    setResult('Running Promise.any...');
    try {
      const first = await Promise.any([
        failAfter(200),
        delay(400, 'First success'),
      ]);
      setResult('Any first fulfilled: ' + first);
    } catch (err) {
      setResult('Any all failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Promises, Promise.all and Use Cases</h2>
      <p>
        <strong>Promises</strong> represent an eventual value (or error). Use <strong>async/await</strong> or{' '}
        <strong>.then()</strong>. <strong>Promise.all</strong>, <strong>Promise.allSettled</strong>,{' '}
        <strong>Promise.race</strong>, and <strong>Promise.any</strong> combine multiple promises in different ways.
      </p>

      <div style={{ marginTop: '20px', border: '2px solid #2196F3', padding: '15px', borderRadius: '8px', backgroundColor: '#e3f2fd' }}>
        <h3>Interactive Examples</h3>
        <p style={{ marginBottom: '15px' }}>Click a button to run the corresponding pattern. Result appears below.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px' }}>
          <button onClick={runSinglePromise} disabled={loading} style={{ backgroundColor: '#2196F3', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}>Single Promise</button>
          <button onClick={runPromiseAll} disabled={loading} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}>Promise.all</button>
          <button onClick={runPromiseAllSettled} disabled={loading} style={{ backgroundColor: '#FF9800', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}>Promise.allSettled</button>
          <button onClick={runPromiseRace} disabled={loading} style={{ backgroundColor: '#9C27B0', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}>Promise.race</button>
          <button onClick={runPromiseAny} disabled={loading} style={{ backgroundColor: '#00BCD4', color: 'white', padding: '8px 14px', border: 'none', borderRadius: '5px', cursor: loading ? 'not-allowed' : 'pointer' }}>Promise.any</button>
        </div>
        <p style={{ fontWeight: 'bold', margin: 0 }}>Result: {loading ? '...' : result}</p>
      </div>

      <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
        <h4>Summary</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Promise</strong>: <code>new Promise((resolve, reject) =&gt; ...)</code> or <code>async</code> functions.</li>
          <li><strong>Promise.all</strong>: wait for all; rejects if any rejects.</li>
          <li><strong>Promise.allSettled</strong>: wait for all; returns status + value/reason for each.</li>
          <li><strong>Promise.race</strong>: resolve or reject with the first settled promise.</li>
          <li><strong>Promise.any</strong>: resolve with first fulfilled; reject only if all reject.</li>
        </ul>
      </div>
    </div>
  );
}

export default PromisesDemo;
