// Separating Context Into Its Own File & Sharing It

import { ThemeProvider, useTheme } from '../context/ThemeContext';

function ThemeToggler() {
  const { mode, toggleMode } = useTheme();

  return (
    <div
      style={{
        border: '2px solid #4CAF50',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '10px',
        backgroundColor: mode === 'light' ? '#e8f5e9' : '#263238',
        color: mode === 'light' ? '#2e7d32' : '#e8f5e9',
      }}
    >
      <h3 style={{ marginTop: 0 }}>ThemeToggler Component</h3>
      <p>Current theme mode: {mode}</p>
      <button
        onClick={toggleMode}
        style={{
          padding: '8px 16px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: mode === 'light' ? '#4CAF50' : '#90caf9',
          color: '#fff',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

function ThemeStatus() {
  const { mode } = useTheme();
  return (
    <div
      style={{
        border: '1px dashed #999',
        padding: '10px',
        borderRadius: '6px',
        marginTop: '10px',
        fontSize: '14px',
      }}
    >
      <strong>ThemeStatus Component:</strong> Theme is <span>{mode}</span>.
    </div>
  );
}

function ContextSeparateFileDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Separating Context Into Its Own File & Sharing Context</h2>
      <p>
        In real projects, we usually put context logic in a <strong>separate file</strong> (for example,
        <code>ThemeContext.jsx</code>) and then reuse it across many components.
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
        <h3>Example: ThemeProvider from its own file</h3>
        <p>
          The <code>ThemeProvider</code> and <code>useTheme</code> hook are defined in{' '}
          <code>src/context/ThemeContext.jsx</code>. Multiple components below share the same context.
        </p>

        <ThemeProvider>
          <ThemeToggler />
          <ThemeStatus />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default ContextSeparateFileDemo;

