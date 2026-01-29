// Using Reducer With Context Provider & Passing Complex State

import { initialThemeState, ThemeProvider, themeReducer, useTheme } from '../context/ThemeContext';
import { useReducer } from 'react';

function ThemeControls() {
  // const { state, toggleMode, setPrimaryColor, resetTheme } = useTheme();
 const [state, dispatch] = useReducer(themeReducer, initialThemeState);
 let abc= 10;

 function test() {
  abc = 20;
 }

  return (
    <div
      style={{
        border: '2px solid #2196F3',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '10px',
        backgroundColor: state.mode === 'light' ? '#e3f2fd' : '#102027',
        color: state.mode === 'light' ? '#0d47a1' : '#e3f2fd',
      }}
    >
      <h3 style={{ marginTop: 0 }}>ThemeControls (Reducer + Context)</h3>
      <p>
        <strong>Mode:</strong> {state.mode}
      </p>
      <p>
        <strong>Primary Color:</strong>
        {abc}
      </p>
      <p>
        <strong>Accent Color:</strong> {state.accentColor}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
        <button
          onClick={()=>test()}
          style={{
            padding: '8px 14px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#2196F3',
            color: '#fff',
          }}
        >
          Toggle Mode
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_PRIMARY_COLOR', payload: '#e91e63' })}
          style={{
            padding: '8px 14px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#e91e63',
            color: '#fff',
          }}
        >
          Set Primary Pink
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_PRIMARY_COLOR', payload: '#4caf50' })}
          style={{
            padding: '8px 14px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#4caf50',
            color: '#fff',
          }}
        >
          Set Primary Green
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          style={{
            padding: '8px 14px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#9e9e9e',
            color: '#fff',
          }}
        >
          Reset Theme
        </button>
      </div>
    </div>
  );
}

function ThemePreviewCard() {
  const { state } = useTheme();

  return (
    <div
      style={{
        marginTop: '15px',
        padding: '15px',
        borderRadius: '8px',
        border: `2px solid ${state.primaryColor}`,
        backgroundColor: state.mode === 'light' ? '#ffffff' : '#37474f',
        color: state.mode === 'light' ? '#000' : '#ffffff',
      }}
    >
      <h4 style={{ marginTop: 0 }}>ThemePreviewCard</h4>
      <p>This component also reads from the same reducer-based context.</p>
      <p style={{ fontSize: '14px' }}>
        Mode: <strong>{state.mode}</strong> | Primary: <strong>{state.primaryColor}</strong> | Accent:{' '}
        <strong>{state.accentColor}</strong>
      </p>
    </div>
  );
}

function ContextWithReducerDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Using Reducer With Context Provider & Passing Complex State</h2>
      <p>
        For more complex state, we can combine <strong>useReducer</strong> with <strong>Context</strong>. The reducer
        manages a complex state object, and the provider shares that state and dispatch function with the whole tree.
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
        <h3>Example: ThemeProvider with useReducer (Complex State)</h3>
        <p>
          The <code>ThemeProvider</code> in <code>ThemeContext.jsx</code> can run in a <strong>reducer mode</strong>{' '}
          where state is an object (<code>&#123; mode, primaryColor, accentColor &#125;</code>).
        </p>

        <ThemeProvider useReducerMode>
          <ThemeControls />
          <ThemePreviewCard />
        </ThemeProvider>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#e3f2fd',
        }}
      >
        <h4>Reducer + Context Pattern:</h4>
        <ol>
          <li>
            Define <code>initialState</code> and <code>reducer(state, action)</code>.
          </li>
          <li>
            In provider: <code>const [state, dispatch] = useReducer(reducer, initialState)</code>.
          </li>
          <li>
            Pass <code>&#123; state, dispatch &#125;</code> (or helper functions) via context value.
          </li>
          <li>
            In children: use <code>const &#123; state, dispatch &#125; = useContext(MyContext)</code>.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ContextWithReducerDemo;

