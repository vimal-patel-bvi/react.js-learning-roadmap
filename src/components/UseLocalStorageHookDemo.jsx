// Creating Our Own useLocalStorage Hook In ReactJS

import { useLocalStorage } from '../hooks/useLocalStorage';

function UseLocalStorageHookDemo() {
  const [theme, setTheme] = useLocalStorage('demo-theme', 'light');
  const [name, setName] = useLocalStorage('demo-name', '');

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: isDark ? '#263238' : '#fafafa',
        color: isDark ? '#e0f7fa' : '#212121',
        minHeight: '100%',
        borderRadius: '8px',
      }}
    >
      <h2>Creating Our Own useLocalStorage Hook In ReactJS</h2>
      <p>
        The <code>useLocalStorage</code> hook is a reusable way to sync React state with{' '}
        <code>window.localStorage</code>. When the state changes, the value is automatically saved and restored on
        refresh.
      </p>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: isDark ? '#37474f' : '#ffffff',
          border: '1px solid #ddd',
        }}
      >
        <h3>Example: Remembering Theme & Name</h3>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Preferred Theme:</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #2196F3',
              minWidth: '150px',
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Your Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #2196F3',
              width: '100%',
              maxWidth: '300px',
            }}
          />
        </div>

        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          Hello, <strong>{name || 'Guest'}</strong>! Your preferred theme is <strong>{theme}</strong>. Try refreshing
          the page — the values stay thanks to <code>useLocalStorage</code>.
        </p>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: isDark ? '#455a64' : '#e3f2fd',
        }}
      >
        <h4>useLocalStorage Implementation (src/hooks/useLocalStorage.js):</h4>
        <pre
          style={{
            backgroundColor: '#263238',
            color: '#fff',
            padding: '15px',
            borderRadius: '5px',
            overflow: 'auto',
            fontSize: '12px',
          }}
        >{`export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error('useLocalStorage: error reading key', key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('useLocalStorage: error setting key', key, error);
    }
  }, [key, value]);

  return [value, setValue];
}`}</pre>
      </div>
    </div>
  );
}

export default UseLocalStorageHookDemo;

